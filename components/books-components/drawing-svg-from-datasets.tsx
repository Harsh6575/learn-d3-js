import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "../component-heading";
import { ComponentWrapper } from "../component-wapper";

export const DrawingSvgFromDatasets = () => {
  const id = "drawing-svg-from-datasets";

  let dataset = [5, 10, 15, 20, 25];

  useEffect(() => {
    let w = 500;
    let h = 200;
    let svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    let circles = svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle");

    circles
      .attr("cx", function (d, i) {
        return i * 50 + 25;
      })
      .attr("cy", h / 2)
      .attr("r", function (d) {
        return d;
      });

    circles
      .attr("fill", "yellow")
      .attr("stroke", "orange")
      .attr("stroke-width", function (d) {
        return d / 2;
      });
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
