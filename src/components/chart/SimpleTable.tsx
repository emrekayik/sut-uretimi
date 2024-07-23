'use client';


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


interface TableProps {
  data: Record<string, any>[]; // Allow any data structure
  caption?: string; // Optional caption
}

const SimpleTable: React.FC<TableProps> = ({ data, caption }) => {
  if (data.length === 0) {
    return <p>Veri bulunamadı.</p>; // Handle empty data case
  }

  const headers = Object.keys(data[0]); // Extract headers from the first data object
  return (
    <Table className='table-auto max-h-96 overflow-y-scroll'>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header) => (
              <TableCell key={header}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default SimpleTable;
