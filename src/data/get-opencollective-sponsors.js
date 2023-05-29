export default async function getOpenCollectiveSponsors() {
  const data = JSON.stringify({
    query: `query account($slug: String) {
      account(slug: $slug) {
        transactions(
          kind: CONTRIBUTION
          limit: 500
          orderBy: { direction: ASC }
          includeChildrenTransactions: true
        ) {
          totalCount
          offset
          limit
          nodes {
            amount {
              value
              currency
            }
            updatedAt
            fromAccount {
              id
              name
              imageUrl
            }
          }
        }
      }
    }
    `,
    variables: `{
        "slug": "y-collective"
      }`
  });

  const response = await fetch('https://api.opencollective.com/graphql/v2', {
    method: 'post',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();

  return mapped(json.data.account.transactions.nodes);
}

function mapped(transactions) {
  const mapped = transactions.reduce((result, current) => {
    const id = current.fromAccount.id;
    const amount = current.amount.value;
    const name = current.fromAccount.name;
    const date = current.updatedAt;
    const imageUrl = current.fromAccount.imageUrl;

    if (!result.hasOwnProperty(id)) {
      result[id] = {
        amount: amount,
        name: name,
        date: new Date(date).toLocaleString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        imageUrl: imageUrl
      };
    } else {
      result[id].amount += amount;
    }
    return result;
  }, {});

  let result = [];

  for (let key in mapped) {
    if (mapped.hasOwnProperty(key)) {
      result.push(mapped[key]);
    }
  }

  result.sort((a, b) => b.amount - a.amount);

  return result;
}
