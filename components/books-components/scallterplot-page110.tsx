import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "../component-heading";
import { ComponentWrapper } from "../component-wapper";

export const ScatterPlotPage110 = () => {
  const id = "scatter-plot-page110";

  let dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88],
  ];

  let w = 500;
  let h = 100;

  useEffect(() => {
    let svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      //   same radius for all circles
      //   .attr("r", 5);
      //   different radius for each circle
      .attr("r", (d) => Math.sqrt(h - d[1]));

    // adding labels
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) => d[0] + "," + d[1])
      .attr("x", (d) => d[0])
      .attr("y", (d) => d[1])
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
