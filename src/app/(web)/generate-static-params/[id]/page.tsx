import React from "react";

export async function generateStaticParams() {
  const ids = [1, 2, 3];

  return ids.map((id) => {
    return {
      param: id,
    };
  });
}

type Props = {
  params: { id: string };
};

const Page = async ({ params }: Props) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default Page;
