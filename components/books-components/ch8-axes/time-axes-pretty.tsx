import * as d3 from "d3";
import { useEffect } from "react";
import { ComponentHeading } from "@/components/component-heading";
import { ComponentWrapper } from "@/components/component-wapper";

export interface DateData {
  Date: Date | null;
  Amount: number;
}

export const TimeAxesPretty = () => {
  const id = "time-axes-pretty";

  useEffect(() => {
    //Width and height
    let w = 500;
    let h = 300;
    let padding = 40;

    //@ts-ignore
    let dataset, xScale, yScale, xAxis, yAxis; //Empty, for now

    //For converting strings to Dates
    var parseTime = d3.timeParse("%m/%d/%y");

    //For converting Dates to strings
    var formatTime = d3.timeFormat("%e");

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

        //Discover start and end dates in dataset
        var startDate = d3.min(dataset, function (d) {
          return d.Date;
        });
        var endDate = d3.max(dataset, function (d) {
          return d.Date;
        });

        //Create scale functions
        xScale = d3
          .scaleTime()
          .domain([
            // @ts-ignore
            d3.timeDay.offset(startDate, -1), //startDate minus one day, for padding
            // @ts-ignore
            d3.timeDay.offset(endDate, 1), //endDate plus one day, for padding
          ])
          .range([padding, w - padding]);

        yScale = d3
          .scaleLinear()
          .domain([
            0, //Because I want a zero baseline
            d3.max(dataset, function (d) {
              return d.Amount;
            }) ?? 0,
          ])
          .range([h - padding, padding]);

        //Define X axis
        //@ts-ignore
        xAxis = d3.axisBottom(xScale).ticks(9).tickFormat(formatTime);

        //Define Y axis
        yAxis = d3.axisLeft(yScale).ticks(10);

        //Create SVG element
        let svg = d3
          .select(`#${id}`)
          .append("svg")
          .attr("width", w)
          .attr("height", h)
          .style("margin-left", 100);

        //Generate guide lines
        svg
          .selectAll("line")
          .data(dataset)
          .enter()
          .append("line")
          .attr("x1", function (d) {
            //@ts-ignore
            return xScale(d.Date);
          })
          .attr("x2", function (d) {
            //@ts-ignore
            return xScale(d.Date);
          })
          .attr("y1", h - padding)
          .attr("y2", function (d) {
            //@ts-ignore
            return yScale(d.Amount);
          })
          .attr("stroke", "#ddd")
          .attr("stroke-width", 1);

        //Generate circles last, so they appear in front
        svg
          .selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle")
          .attr("cx", function (d) {
            //@ts-ignore
            return xScale(d.Date);
          })
          .attr("cy", function (d) {
            //@ts-ignore
            return yScale(d.Amount);
          })
          .attr("r", 2);

        //Create X axis
        svg
          .append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0," + (h - padding) + ")")
          // @ts-ignore
          .call(xAxis);

        //Create Y axis
        svg
          .append("g")
          .attr("class", "axis")
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
