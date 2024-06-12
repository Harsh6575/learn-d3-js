import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "../component-heading";
import { ComponentWrapper } from "../component-wapper";

export const ChartFromDiv = () => {
  const id = "chart-from-div";

  let dataset = [];

  for (let i = 0; i < 25; i++) {
    let newNumber = Math.floor(Math.random() * 30);
    dataset.push(newNumber);
  }

  useEffect(() => {
    d3.select(`#${id}`)
      .selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function (d) {
        return d * 5 + "px";
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
