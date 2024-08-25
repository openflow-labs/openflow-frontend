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

type Props = {};

function MainTable({}: Props) {
  return (
    <Table>
      <TableCaption>A list of the latest transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tx ID</TableHead>
          <TableHead>Sent</TableHead>
          <TableHead>Date</TableHead>

          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Proof</TableHead>
        </TableRow>
      </TableHeader>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
        return <MainTableBody key={x} type={x % 2 === 0 ? "in" : "out"} />;
      })}
      <MainTableBody type="in" />
    </Table>
  );
}

export default MainTable;

const MainTableBody = ({ type }: { type: "in" | "out" }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>10-1-23</TableCell>
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
        <TableCell>$250.00</TableCell>
        <TableCell className="text-right">
          <ViewMoreDialog>
            <Button variant={"link"}>view more</Button>
          </ViewMoreDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
