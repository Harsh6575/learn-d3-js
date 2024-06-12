import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "@/components/component-heading";
import { ComponentWrapper } from "@/components/component-wapper";

export interface DateData {
  Date: Date | null;
  Amount: number;
}

export const TimeAxes = () => {
  const id = "time-axes";

  useEffect(() => {
    //Width and height
    let w = 500;
    let h = 300;
    let padding = 40;

    //@ts-ignore
    let dataset, xScale, yScale, xAxis, yAxis; //Empty, for now

    //For converting strings to Dates
    let parseTime = d3.timeParse("%m/%d/%y");

    //For converting Dates to strings
    let formatTime = d3.timeFormat("%b %e");

    //Function for converting CSV values from strings to Dates and numbers
    let rowConverter = function (d: any): DateData {
      return {
        Date: parseTime(d.Date),
        Amount: parseInt(d.Amount),
      };
    };

    //Load in the data
    d3.csv("datasets/time_scale_data.csv", rowConverter)
      .then((data) => {
        //Copy data into global dataset
        dataset = data;

        //Create scale functions
        xScale = d3
          .scaleTime()
          .domain([
            d3.min(dataset, function (d) {
              return d.Date;
            }) ?? 0,
            d3.max(dataset, function (d) {
              return d.Date;
            }) ?? 0,
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

        //Define X axis
        xAxis = d3.axisBottom(xScale).ticks(5);

        //Define Y axis
        yAxis = d3.axisLeft(yScale).ticks(5);

        //Create SVG element
        let svg = d3
          .select(`#${id}`)
          .append("svg")
          .attr("width", w)
          .attr("height", h)
          .style("margin-left", 100);

        //Generate date labels first, so they are in back
        svg
          .selectAll("text")
          .data(dataset)
          .enter()
          .append("text")
          .text(function (d) {
            // @ts-ignore
            return formatTime(d.Date);
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

        //Create X axis
        svg
          .append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0," + (h - padding) + ")")
          .call(xAxis);

        //Create Y axis
        svg
          .append("g")
          .attr("class", "axisw")
          .attr("transform", "translate(" + padding + ",0)")
          .call(yAxis);
      })
      .catch((error) => {
        console.log(`Error in ${id} ` + error.message);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ComponentWrapper id={id}>
      <ComponentHeading id={id} />
    </ComponentWrapper>
  );
};
