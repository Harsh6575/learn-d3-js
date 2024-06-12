import * as d3 from "d3";
import { useEffect, useState } from "react";
import { ComponentHeading } from "../component-heading";
import { ComponentWrapper } from "../component-wapper";

export interface FoodData {
  Food: string;
  Deliciousness: number;
}

export const DataFromCsv = () => {
  const id = "data-from-csv";
  const [csvData, setCsvData] = useState<FoodData[]>([]);

  useEffect(() => {
    const rowConverter = (d: any): FoodData => ({
      Food: d.Food,
      Deliciousness: parseFloat(d.Deliciousness),
    });

    d3.csv<FoodData>("datasets/food.csv", rowConverter)
      .then((data) => {
        setCsvData(data);
      })
      .catch((error) => {
        console.error("Error loading the data" + error.message);
      });
  }, []);

  d3.select(`#${id}`)
    .selectAll("p")
    .data(csvData)
    .enter()
    .append("p")
    .text(function (d: FoodData) {
      return d.Food + " is " + d.Deliciousness + " delicious";
    })
    .style("margin-left", 100);

  return (
    <ComponentWrapper id={id}>
    <ComponentHeading id={id} />
  </ComponentWrapper>
  );
};
