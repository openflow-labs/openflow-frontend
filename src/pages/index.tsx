import Image from "next/image";
import { Inter } from "next/font/google";
import MainChart from "@/components/MainChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MainBarChart } from "@/components/MainBarChart";
import MainTable from "@/components/MainTable";
import MainChartTwo from "@/components/MainChartTwo";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section
      className={`flex w-full max-w-[1024px]  flex-col items-center justify-start gap-4 px-4 xl:px-0 py-4 ${inter.className}`}
    >
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-4  w-full md:h-[200px] items-stretch justify-stretch">
        <Card className="col-span-2 flex flex-col justify-center">
          <CardHeader className="pb-3">
            <CardTitle>Welcome to OpenFlow! 🔍👌</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              A privacy-preserving solution for transparent transaction auditing
              using zero-knowledge proofs.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href={
                "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/68b87064-6a16-4dbd-b721-a82850412666/review/?source=link&preference-id=437679105-9e1f0001-0d06-4cdd-9c31-bdf9832d1403&router-request-id=b574b04c-1b36-458f-953e-3efb7ab88f69&p=08fe8e94e9fab3194a269e69d356c0ea"
              }
              target="_blank"
            >
              <Button>Contribute now! 🤝</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="col-span-2 md:col-span-1 flex flex-col justify-center">
          <CardHeader className="pb-2">
            <CardDescription>Total Balance 💰</CardDescription>
            <CardTitle className="text-4xl">
              1.000.000{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                $ARS
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              Total available reserves.{" "}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid  grid-cols-1 gap-4  w-full  items-stretch justify-stretch">
        <MainBarChart />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4  w-full  items-stretch justify-stretch">
        <MainChart
          type="in"
          total="250.000"
          data={[
            {
              date: "2024-01-01",
              time: 10000,
            },
            {
              date: "2024-01-02",
              time: 100000,
            },
            {
              date: "2024-01-03",
              time: 110000,
            },
            {
              date: "2024-01-04",
              time: 200000,
            },
            {
              date: "2024-01-05",
              time: 250000,
            },
          ]}
        />
        <MainChartTwo
          key={"2002"}
          total="50.000"
          type="out"
          data={[
            {
              date: "2024-01-01",
              time: 10000,
            },
            {
              date: "2024-01-02",
              time: 20000,
            },
            {
              date: "2024-01-03",
              time: 0,
            },
            {
              date: "2024-01-04",
              time: 1000,
            },
            {
              date: "2024-01-05",
              time: 14000,
            },
          ]}
        />
      </div>
      <div className="flex flex-col w-full">
        <MainTable />
      </div>
    </section>
  );
}
