import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-current sm:text-center dark:text-gray-400">
          Thanks for this amazing portfolio design,{" "}
          <Link href="https://brittanychiang.com/" className="hover:underline">
            Brittany Chiang
          </Link>{" "}
          🙂
        </span>
      </div>
    </footer>
  );
}
