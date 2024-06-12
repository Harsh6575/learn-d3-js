"use client";

import { SunPage57 } from "@/components/books-components/sun-page57";
import { DataFromCsv } from "@/components/books-components/data-from-csv";
import { ChartFromDiv } from "@/components/books-components/chart-from-div";
import { DrawingSvgFromDatasets } from "@/components/books-components/drawing-svg-from-datasets";
import { NewBarChartPage101 } from "@/components/books-components/new-bar-chart-page101";
import { ScatterPlotPage110 } from "@/components/books-components/scallterplot-page110";

import { Scale } from "@/components/books-components/ch7-scales/scale";
import { ScaleInverted } from "@/components/books-components/ch7-scales/scale-inverted";
import { ScaleInvertedPadding } from "@/components/books-components/ch7-scales/scale-inverted-padding";
import { ScaleRadii } from "@/components/books-components/ch7-scales/scale-radii";
import { TimeScale } from "@/components/books-components/ch7-scales/time-scale";
import { Axes } from "@/components/books-components/ch8-axes/axes";
import { AxesBottom } from "@/components/books-components/ch8-axes/axes-bottom";
import { AxesClean } from "@/components/books-components/ch8-axes/axes-clean";
import { AxesY } from "@/components/books-components/ch8-axes/axes-y";
import { AxesRandom } from "@/components/books-components/ch8-axes/axes-random";
import { AxesRandomFormat } from "@/components/books-components/ch8-axes/axes-random-format";
import { TimeAxes } from "@/components/books-components/ch8-axes/time-axes";
import { TimeAxesPretty } from "@/components/books-components/ch8-axes/time-axes-pretty";
import { BarChart } from "@/components/books-components/ch9-updates-transitions-and-motion/bar-chart";
import { BarChartScale } from "@/components/books-components/ch9-updates-transitions-and-motion/bar-chart-scale";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 px-10">
      <h1>Home</h1>
      <SunPage57 />
      <DataFromCsv />
      <ChartFromDiv />
      <DrawingSvgFromDatasets />
      <NewBarChartPage101 />
      <ScatterPlotPage110 />
      <Scale />
      <ScaleInverted />
      <ScaleInvertedPadding />
      <ScaleRadii />
      <TimeScale />
      <Axes />
      <AxesBottom />
      <AxesClean />
      <AxesY />
      <AxesRandom />
      <AxesRandomFormat />
      <TimeAxes />
      <TimeAxesPretty />
      <BarChart />
      <BarChartScale />
    </div>
  );
}
