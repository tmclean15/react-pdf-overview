import { View, StyleSheet } from "@react-pdf/renderer";
import {
  Table as PdfTable,
  TableHeader,
  TableCell,
  DataTableCell,
  TableBody,
} from "@david.kucsai/react-pdf-table";

export type TableProps = {
  data: Record<string, unknown>[];
  columns: {
    weighting: number;
    label: string;
    name: string;
  }[];
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
  },
  tableCell: {
    textAlign: "center",
    fontSize: 10,
  },
});

export const Table = ({ data, columns }: TableProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <PdfTable data={data}>
        <TableHeader>
          {columns.map(({ weighting, label }) => (
            <TableCell weighting={weighting} style={styles.tableCell}>
              {label}
            </TableCell>
          ))}
        </TableHeader>
        <TableBody>
          {columns.map(({ weighting, name }) => (
            <DataTableCell
              style={styles.tableCell}
              weighting={weighting}
              getContent={(row) => row[name]}
            />
          ))}
        </TableBody>
      </PdfTable>
    </View>
  );
};
