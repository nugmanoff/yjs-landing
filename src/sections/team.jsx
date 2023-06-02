import Image from 'next/image';
import { useState } from 'react';

function MemberCard({
  member: { imageSrc, firstname, lastname, description }
}) {
  return (
    <div className=" flex w-full max-w-[250px] flex-col items-center gap-y-1.5 rounded-lg p-4 text-center md:p-6">
      <div className="relative h-16 w-16 md:h-20 md:w-20">
        <Image
          src={imageSrc}
          alt={`${firstname}'s Avatar`}
          sizes="80px"
          fill
          quality={100}
          className="object-fit mb-1 rounded-full"
        />
      </div>
      <div className="flex flex-col text-base font-semibold md:text-[18px] lg:mt-2 lg:text-[22px]">
        <p>{firstname}</p>
        <p>{lastname}</p>
      </div>
      <p className="text-sm font-medium text-slate-400 md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Team() {
  const members = [
    {
      firstname: 'John',
      lastname: 'Weidhofer',
      description: 'Ypy maintainer',
      imageSrc: '/john.jpg'
    },
    {
      firstname: 'Hannes',
      lastname: 'Moser',
      description: 'Yrb maintainer',
      imageSrc: '/hannes.png'
    },
    {
      firstname: 'Kevin',
      lastname: 'Jahns',
      description: 'Creator of Yjs',
      imageSrc: '/kevin.jpg'
    },
    {
      firstname: 'Bartosz',
      lastname: 'Sypytkowski',
      description: 'Author of Yrs',
      imageSrc: '/bartosz.jpg'
    },
    {
      firstname: 'Aidar',
      lastname: 'Nugmanoff',
      description: 'Yswift maintainer',
      imageSrc: '/aidar.jpeg'
    },
    {
      firstname: 'Joseph',
      lastname: 'Heck',
      description: 'Yswift maintainer',
      imageSrc: '/joe.png'
    }
  ];
  return (
    <div className="container grid grid-cols-2 gap-y-6 sm:grid-cols-3 xl:grid-cols-6">
      {members.map((member) => {
        return <MemberCard member={member} key={member.name} />;
      })}
    </div>
  );
}
