import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

type Props = {
  type: "in" | "out";
  total: string;
  data: { date: string; time: number }[];
};

function MainChartTwo({ type, total, data }: Props) {
  return (
    <Card
      className="col-span-1 flex flex-col justify-between "
      x-chunk="charts-01-chunk-7"
    >
      <CardHeader className="space-y-0  pb-0">
        <CardDescription>
          Total {type === "in" ? "income" : "spent"} last 5 days
        </CardDescription>
        <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
          {total}{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            $ARS
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 ">
        <ChartContainer
          className=" "
          config={{
            time: {
              label: "Last 5 days",
              color:
                type === "in" ? "hsl(var(--primary))" : "hsl(var(--chart-1))",
            },
          }}
        >
          <AreaChart
            accessibilityLayer
            className="h-full "
            data={data}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" hide />
            <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />

            <defs>
              <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="time"
              type="natural"
              fill="url(#fillTime)"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-1))"
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              formatter={(value) => (
                <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                  Total
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      $ARS
                    </span>
                  </div>
                </div>
              )}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default MainChartTwo;
