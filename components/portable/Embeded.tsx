import React from "react";

type Props = {
  value: {
    url: string;
  };
};

const Embed = (props: Props) => {
  return (
    <iframe
      src={props.value.url}
      className="w-full border rounded-md aspect-video border-red-300"
      frameBorder="0"
    ></iframe>
  );
};
export { Embed };
