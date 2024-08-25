import Image from "next/image";
import { Inter } from "next/font/google";
import MainChart from "@/components/MainChart";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
import { useQuery } from "@tanstack/react-query";
import { fetchEndpoint } from "@/helpers/connect";
import { TriangleAlert } from "lucide-react";
import {
  amountLastFive,
  amountLastFiveOut,
  lastfive,
  lastfiveout,
} from "@/assets/chart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["endpointRPC"],
    queryFn: fetchEndpoint,
  });

  if (isLoading)
    return (
      <section
        className={`flex w-full max-w-[1024px] min-h-screen  flex-col items-center justify-center gap-4 px-4 xl:px-0 py-4 ${inter.className}`}
      >
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </section>
    );

  if (error)
    return (
      <section
        className={`flex w-full max-w-[1024px] min-h-screen flex-col items-center justify-center gap-4 px-4 xl:px-0 py-4 ${inter.className}`}
      >
        <h1>Something went wrong, try again 😢.</h1>
      </section>
    );

  return (
    <section
      className={`flex w-full max-w-[1024px]  flex-col items-center justify-start gap-4 px-4 xl:px-0 py-4 ${inter.className}`}
    >
      <Alert variant={"destructive"}>
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Disclaimer!</AlertTitle>
        <AlertDescription>
          {
            "The withdrawal (outs) details displayed are mock data for demonstration purposes only and do not represent real transactions."
          }{" "}
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-4  w-full md:h-[200px] items-stretch justify-stretch">
        <Card className="col-span-2 flex flex-col justify-center">
          <CardHeader className="pb-3">
            <CardTitle>Campaign: #TodoRojo 👹⚽️🏆</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Auditable campaign thanks to OpenFlow in September 2023 using
              zero-knowledge proofs.
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
              1.192.484,17{" "}
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
          total={amountLastFive.toLocaleString()}
          data={lastfive}
        />
        <MainChartTwo
          key={"2002"}
          total={amountLastFiveOut.toLocaleString()}
          type="out"
          data={lastfiveout}
        />
      </div>
      <div className="flex flex-col w-full">
        {data && <MainTable data={data} />}
      </div>
    </section>
  );
}
