import React from "react";
import Link from "next/link";

export default function Page(props: { params: { id: string } }) {
  return (
    <div className="mb-2 mt-24 text-lg font-bold">
      <Link href="/">← Back to home</Link>
    </div>
  );
}
