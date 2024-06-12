import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "@/components/component-heading";
import { ComponentWrapper } from "@/components/component-wapper";

export const AxesBottom = () => {
  const id = "axes-bottom";

  useEffect(() => {
    let w = 500;
    let h = 300;
    let padding = 20;

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
      [600, 150],
    ];

    //Create scale functions
    let xScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataset, function (d) {
          return d[0];
        }) ?? 0,
      ])
      .range([padding, w - padding * 2]);

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataset, function (d) {
          return d[1];
        }) ?? 0,
      ])
      .range([h - padding, padding]);

    let aScale = d3
      .scaleSqrt()
      .domain([
        0,
        d3.max(dataset, function (d) {
          return d[1];
        }) ?? 0,
      ])
      .range([0, 10]);

    //Define X axis
    let xAxis = d3.axisBottom(xScale);

    //Create SVG element
    let svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

    //Create circles
    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", function (d) {
        return aScale(d[1]);
      });

    //Create labels
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d[0] + "," + d[1];
      })
      .attr("x", function (d) {
        return xScale(d[0]);
      })
      .attr("y", function (d) {
        return yScale(d[1]);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red");

    //Create X axis
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
