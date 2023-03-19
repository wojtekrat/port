import React, { FC, useState } from 'react';
import { urlFor } from '../../lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface ExperienceProps {
  experience: {
    company: string;
    duties: string;
    date: string;
    icon: string;
    jobtitle: string;
    link: string;
  };
}

const Experience: FC<ExperienceProps> = ({ experience: { company, duties, date, icon, jobtitle, link } }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const d = duties.split('.');

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="border-[1px] border-gray-500 m-[20px] p-[10px] w-[95%] rounded-xl flex flex-col flex-wrap hover:border-gray-400">
      <div className="flex flex-col items-center sm:flex-row sm:items-start ">
        <div className="min-w-[100px] h-[100px] p-[5px]">
          <Image
            src={urlFor(icon).url()}
            width={50}
            height={50}
            alt="company logo"
            className="rounded-full w-[80px] h-[80px]"
          />
        </div>
        <div className="ml-[20px]">
          <p className="text-[17px]">{jobtitle.toUpperCase()}</p>
          <p className="text-[16px] font-medium">{company}</p>
          {isExpanded ? (
            <div className="mt-[5px] flex flex-col items-start text-[15px] font-thin flex-wrap">
              {d.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
              <button
                className="text-[12px] mt-[10px] font-semibold underline cursor-pointer"
                onClick={toggleExpand}
              >
                show less
              </button>
            </div>
          ) : (
            <div className="mt-[5px] flex flex-col items-start text-[15px] font-thin flex-wrap">
              {d.length >= 1 && (
                <button
                  className="text-[12px] mt-[10px] font-semibold underline cursor-pointer"
                  onClick={toggleExpand}
                >
                  show more
                </button>
              )}
            </div>
          )}
          <div className="flex flex-row relative mt-[5px]">
            <div className="text-[15px] text-gray-300">{date}</div>
            <Link
              href={link}
              className="text-[12px] bg-green-700 rounded-lg cursor-pointer p-[5px] ml-[30px] mb-[5px] font-semibold hover:bg-green-500 "
            >
              COMPANY WEBSITE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
