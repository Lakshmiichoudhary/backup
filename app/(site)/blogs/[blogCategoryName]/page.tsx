import React from "react";

interface props {
  params: Promise<{ blogCategoryName: string }>;
}
export default async function page({ params }: props) {
  const { blogCategoryName } = await params;
  return <div className="min-h-screen">{blogCategoryName}</div>;
}