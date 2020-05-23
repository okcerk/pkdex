import React from "react";
import { Helmet } from "react-helmet";

interface ITitleComponentProps {
  title: string;
}

type TitleComponentProps = Readonly<ITitleComponentProps>;

export const TitleComponent = (props: TitleComponentProps) => {
  const { title } = props;
  var defaultTitle = "Pokédex";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};
