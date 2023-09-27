import Link from "next/link";
import React from "react";

const Sns = () => {
  return (
    <>
      <div className="w-full py-10 px-2">
        <ul className="list-disc text-gray-700">
          <li>
            <Link href="https://twitter.com/sandaga_">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/sandaga_/">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/sandaga.official">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UC4m5B3K9Z7v2n8vX7Nl1k2g">
              YouTube
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sns;
