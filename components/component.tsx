/* eslint-disable react-hooks/exhaustive-deps */
import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "./component-heading";
import { ComponentWrapper } from "./component-wapper";

export const Name = () => {
  const id = "name";

  useEffect(() => {}, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
