import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import ViewMoreDialog from "./ViewMoreDialog";

type Props = { data: { id: string; date: string; amount: string }[] };

function MainTable({ data }: Props) {
  return (
    <Table>
      <TableCaption>A list of the latest transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tx ID</TableHead>
          <TableHead>Date</TableHead>

          <TableHead>Type</TableHead>
          <TableHead>Amount ($ARS)</TableHead>
          <TableHead className="text-right">Proof</TableHead>
        </TableRow>
      </TableHeader>
      {data.map((info, index) => {
        return (
          <MainTableBody
            key={index + info.id}
            date={info.date}
            amount={info.amount}
            id={info.id}
          />
        );
      })}
    </Table>
  );
}

export default MainTable;

const MainTableBody = ({
  type = "in",
  date,
  amount,
  id,
}: {
  type?: "in" | "out";
  date: string;
  amount: string;
  id: string;
}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">{id}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>
          <Badge
            variant="outline"
            className={cn(
              { "border-primary": type === "in" },
              { "border-chart": type === "out" }
            )}
            color="hsl(var(--primary))"
          >
            {type}
          </Badge>
        </TableCell>
        <TableCell>${amount}</TableCell>
        <TableCell className="text-right">
          <ViewMoreDialog>
            <Button variant={"link"}>view more</Button>
          </ViewMoreDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
