import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { date: "2024-04-01", in: 222, out: 0 },
  { date: "2024-04-02", in: 97, out: 0 },
  { date: "2024-04-03", in: 167, out: 0 },
  { date: "2024-04-04", in: 242, out: 0 },
  { date: "2024-04-05", in: 373, out: 0 },
  { date: "2024-04-06", in: 301, out: 0 },
  { date: "2024-04-07", in: 245, out: 0 },
  { date: "2024-04-08", in: 409, out: 0 },
  { date: "2024-04-09", in: 59, out: 0 },
  { date: "2024-04-10", in: 261, out: 0 },
  { date: "2024-04-11", in: 327, out: 0 },
  { date: "2024-04-12", in: 292, out: 0 },
  { date: "2024-04-13", in: 342, out: 0 },
  { date: "2024-04-14", in: 137, out: 0 },
  { date: "2024-04-15", in: 120, out: 0 },
  { date: "2024-04-16", in: 138, out: 0 },
  { date: "2024-04-17", in: 446, out: 0 },
  { date: "2024-04-18", in: 364, out: 0 },
  { date: "2024-04-19", in: 243, out: 0 },
  { date: "2024-04-20", in: 89, out: 0 },
  { date: "2024-04-21", in: 137, out: 0 },
  { date: "2024-04-22", in: 224, out: 0 },
  { date: "2024-04-23", in: 138, out: 0 },
  { date: "2024-04-24", in: 387, out: 0 },
  { date: "2024-04-25", in: 215, out: 0 },
  { date: "2024-04-26", in: 75, out: 0 },
  { date: "2024-04-27", in: 383, out: 0 },
  { date: "2024-04-28", in: 122, out: 0 },
  { date: "2024-04-29", in: 315, out: 0 },
  { date: "2024-04-30", in: 454, out: 0 },
  { date: "2024-05-01", in: 165, out: 0 },
  { date: "2024-05-02", in: 293, out: 0 },
  { date: "2024-05-03", in: 247, out: 0 },
  { date: "2024-05-04", in: 385, out: 0 },
  { date: "2024-05-05", in: 481, out: 0 },
  { date: "2024-05-06", in: 498, out: 0 },
  { date: "2024-05-07", in: 388, out: 0 },
  { date: "2024-05-08", in: 149, out: 0 },
  { date: "2024-05-09", in: 227, out: 0 },
  { date: "2024-05-10", in: 293, out: 0 },
  { date: "2024-05-11", in: 335, out: 0 },
  { date: "2024-05-12", in: 197, out: 0 },
  { date: "2024-05-13", in: 197, out: 0 },
  { date: "2024-05-14", in: 448, out: 0 },
  { date: "2024-05-15", in: 473, out: 0 },
  { date: "2024-05-16", in: 338, out: 0 },
  { date: "2024-05-17", in: 499, out: 0 },
  { date: "2024-05-18", in: 315, out: 0 },
  { date: "2024-05-19", in: 235, out: 0 },
  { date: "2024-05-20", in: 177, out: 100 },
  { date: "2024-05-21", in: 82, out: 100 },
  { date: "2024-05-22", in: 81, out: 100 },
  { date: "2024-05-23", in: 252, out: 0 },
  { date: "2024-05-24", in: 294, out: 0 },
  { date: "2024-05-25", in: 201, out: 0 },
  { date: "2024-05-26", in: 213, out: 100 },
  { date: "2024-05-27", in: 420, out: 0 },
  { date: "2024-05-28", in: 233, out: 0 },
  { date: "2024-05-29", in: 78, out: 0 },
  { date: "2024-05-30", in: 340, out: 0 },
  { date: "2024-05-31", in: 178, out: 0 },
  { date: "2024-06-01", in: 178, out: 0 },
  { date: "2024-06-02", in: 470, out: 0 },
  { date: "2024-06-03", in: 103, out: 0 },
  { date: "2024-06-04", in: 439, out: 0 },
  { date: "2024-06-05", in: 88, out: 100 },
  { date: "2024-06-06", in: 294, out: 0 },
  { date: "2024-06-07", in: 323, out: 0 },
  { date: "2024-06-08", in: 385, out: 0 },
  { date: "2024-06-09", in: 438, out: 100 },
  { date: "2024-06-10", in: 155, out: 0 },
  { date: "2024-06-11", in: 92, out: 0 },
  { date: "2024-06-12", in: 492, out: 0 },
  { date: "2024-06-13", in: 81, out: 100 },
  { date: "2024-06-14", in: 426, out: 0 },
  { date: "2024-06-15", in: 307, out: 0 },
  { date: "2024-06-16", in: 371, out: 0 },
  { date: "2024-06-17", in: 475, out: 0 },
  { date: "2024-06-18", in: 107, out: 0 },
  { date: "2024-06-19", in: 341, out: 0 },
  { date: "2024-06-20", in: 408, out: 0 },
  { date: "2024-06-21", in: 169, out: 0 },
  { date: "2024-06-22", in: 317, out: 0 },
  { date: "2024-06-23", in: 480, out: 0 },
  { date: "2024-06-24", in: 132, out: 0 },
  { date: "2024-06-25", in: 141, out: 0 },
  { date: "2024-06-26", in: 434, out: 10 },
  { date: "2024-06-27", in: 448, out: 0 },
  { date: "2024-06-28", in: 149, out: 0 },
  { date: "2024-06-29", in: 103, out: 0 },
  { date: "2024-06-30", in: 446, out: 0 },
];

const chartConfig = {
  views: {
    label: "amount",
  },
  in: {
    label: "in",
    color: "hsl(var(--primary))",
  },
  out: {
    label: "out",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MainBarChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("in");

  const total = React.useMemo(
    () => ({
      in: chartData.reduce((acc, curr) => acc + curr.in, 0),
      out: chartData.reduce((acc, curr) => acc + curr.out, 0),
    }),
    []
  );

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-col md:h-[90px] items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Last 30 days</CardTitle>
          <CardDescription>
            Showing total in and out transactions for the last 30 days{" "}
          </CardDescription>
        </div>
        <div className="flex">
          {["in", "out"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">{key}</span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total]}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-1  sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
