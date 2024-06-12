import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "../component-heading";
import { ComponentWrapper } from "../component-wapper";

export const NewBarChartPage101 = () => {
  const id = "new-bar-chart-page101";

  let dataset = [
    5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23,
    25,
  ];

  let w = 500;
  let h = 200;
  let barPadding = 1;

  useEffect(() => {
    let svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    // grow down from the top of the svg
    // svg
    //   .selectAll("rect")
    //   .data(dataset)
    //   .enter()
    //   .append("rect")
    //   .attr("x", function (d, i) {
    //     return i * (w / dataset.length);
    //   })
    //   .attr("y", 0)
    //   .attr("width", w / dataset.length - barPadding)
    //   .attr("height", function (d) {
    //     return d * 4;
    //   });

    // grow up from the bottom of the svg
    // svg
    //   .selectAll("rect")
    //   .data(dataset)
    //   .enter()
    //   .append("rect")
    //   .attr("x", function (d, i) {
    //     return i * (w / dataset.length);
    //   })
    //   .attr("y", function (d) {
    //     return h - d * 4;
    //   })
    //   .attr("width", w / dataset.length - barPadding)
    //   .attr("height", function (d) {
    //     return d * 4;
    //   });

    // grow up from the bottom of the svg with color
    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return i * (w / dataset.length);
      })
      .attr("y", function (d) {
        return h - d * 4;
      })
      .attr("width", w / dataset.length - barPadding)
      .attr("height", function (d) {
        return d * 4;
      })
      .attr("fill", function (d) {
        return "rgb(0, 0, " + d * 10 + ")";
      });

    //   add text to the bars
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d;
      })
      .attr("text-anchor", "middle")
      .attr("x", function (d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
      })
      .attr("y", function (d) {
        return h - d * 4 + 14;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
