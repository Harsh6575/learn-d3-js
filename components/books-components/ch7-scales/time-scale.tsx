/* eslint-disable react-hooks/exhaustive-deps */
import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "@/components/component-heading";
import { ComponentWrapper } from "@/components/component-wapper";

export interface DateData {
  Date: Date | null;
  Amount: number;
}

export const TimeScale = () => {
  const id = "time-scale";

  let w = 500;
  let h = 300;
  let padding = 40;

  //   @ts-ignore
  let datwaset, xScale, yScale;

  useEffect(() => {
    //For converting strings to Dates
    let parseTime = d3.timeParse("%m/%d/%y");

    //For converting Dates to strings
    let formatTime = d3.timeFormat("%b %e");

    //Function for converting CSV values from strings to Dates and numbers
    let rowConverter = (d: any): DateData => ({
      Date: parseTime(d.Date),
      Amount: parseInt(d.Amount),
    });

    //Load in the data
    d3.csv("datasets/time_scale_data.csv", rowConverter)
      .then((data) => {
        let dataset = data;

        //Create scale functions
        xScale = d3
          .scaleTime()
          .domain([
            d3.min(dataset, function (d) {
              return d.Date;
            }) ?? new Date(),
            d3.max(dataset, function (d) {
              return d.Date;
            }) ?? new Date(),
          ])
          .range([padding, w - padding]);

        yScale = d3
          .scaleLinear()
          .domain([
            d3.min(dataset, function (d) {
              return d.Amount;
            }) ?? 0,
            d3.max(dataset, function (d) {
              return d.Amount;
            }) ?? 0,
          ])
          .range([h - padding, padding]);

        //Create SVG element
        let svg = d3
          .select(`#${id}`)
          .append("svg")
          .attr("width", w)
          .attr("height", h);

        //Generate date labels first, so they are in back
        svg
          .selectAll("text")
          .data(dataset)
          .enter()
          .append("text")
          .text(function (d) {
            return formatTime(d.Date!);
          })
          .attr("x", function (d) {
            // @ts-ignore
            return xScale(d.Date) + 4;
          })
          .attr("y", function (d) {
            // @ts-ignore
            return yScale(d.Amount) + 4;
          })
          .attr("font-family", "sans-serif")
          .attr("font-size", "11px")
          .attr("fill", "#bbb");

        //Generate circles last, so they appear in front
        svg
          .selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle")
          .attr("cx", function (d) {
            // @ts-ignore
            return xScale(d.Date);
          })
          .attr("cy", function (d) {
            // @ts-ignore
            return yScale(d.Amount);
          })
          .attr("r", 2);
      })
      .catch((error) => {
        console.error(`Error in ${id} ` + error.message);
      });
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
