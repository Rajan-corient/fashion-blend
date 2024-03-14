import React from "react";

const Page = ({ params, searchParams }) => {
  return (
    <div>
      My Post: {params.slug} {searchParams.name}
    </div>
  );
};

export default Page;
