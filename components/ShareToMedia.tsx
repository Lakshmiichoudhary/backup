"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string | null;
}

const ShareToMedia = ({ className }: Props) => {
  const [pageUrl, setPageUrl] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      setPageUrl(encodeURIComponent(window.location.href));
      setPageTitle(encodeURIComponent("Check this out!"));
    }
  }, []);

  return (
    <div className={"flex gap-2 items-center h-6 " + (className || "")}>
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          width={22}
          height={22}
          src="/images/faceBookShare.svg"
          alt="Facebook Share"
          className="h-full w-auto"
        />
      </a>

      {/* Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          width={22}
          height={22}
          src="/images/twitterShare.svg"
          alt="Twitter Share"
          className="h-full w-auto"
        />
      </a>

      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          width={22}
          height={22}
          src="/images/linkedInShare.svg"
          alt="LinkedIn Share"
          className="h-full w-auto"
        />
      </a>

      {/* Email Share */}
      <a
        href={`mailto:?subject=${pageTitle}&body=${pageUrl}`}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          width={22}
          height={22}
          src="/images/emailShare.svg"
          alt="Email Share"
          className="h-full w-auto"
        />
      </a>
    </div>
  );
};

export default ShareToMedia;
