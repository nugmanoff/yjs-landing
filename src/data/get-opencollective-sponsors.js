export default async function getOpenCollectiveSponsors() {
  // Last 30 transactions
  const data = JSON.stringify({
    query: `query account($slug: String) {
      account(slug: $slug) {
        transactions(
          kind: CONTRIBUTION
          limit: 30
          orderBy: { direction: DESC }
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

  const transactions = json.data.account.transactions.nodes;

  return transactions.map((current) => {
    const amount = current.amount.value;
    const name = current.fromAccount.name || 'Anonymous';
    const date = new Date(current.updatedAt).toLocaleString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const imageUrl = current.fromAccount.imageUrl;

    return { amount, name, date, imageUrl };
  });
}
