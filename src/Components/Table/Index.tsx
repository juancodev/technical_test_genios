import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Progress } from "@chakra-ui/react";
import { tableProps } from "@/Types";

export function TableData({
  records,
  selectedOption,
  responseData,
}: tableProps) {
  const [test, setTest] = useState<string[]>([""]);
  useEffect(() => {
    if (selectedOption && records) {
      const filtered = records.filter((record) => {
        const recordAsString = String(record);
        const selectedOptionAsString = String(selectedOption);
        return recordAsString.includes(selectedOptionAsString);
      });
      setTest(filtered);
    }
  }, [selectedOption]);

  return (
    <div className="overflow-x-auto">
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>{records ? records[0][1] : "Texto"}</Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][2] : "Me Gusta"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][3] : "Comentarios"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][4] : "Compartidos"}
          </Table.HeadCell>
          <Table.HeadCell>
            {records ? records[0][5] : "reacciones"}
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {test?.map((data) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {data[1]}
              </Table.Cell>
              <Table.Cell>{data[2]}</Table.Cell>
              <Table.Cell>{data[3]}</Table.Cell>
              <Table.Cell>{data[4]}</Table.Cell>
              <Table.Cell>{data[5]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Table hoverable={true} striped={true} className="mt-4">
        <Table.Head>
          <Table.HeadCell>Etiqueta de Sentimiento</Table.HeadCell>
          <Table.HeadCell>Nivel</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {responseData?.map((data) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data?.label}
              </Table.Cell>
              <Table.Cell>
                {data && (
                  <Progress
                    value={Math.round(data?.score)}
                    size="xs"
                    max={1}
                    min={-1}
                    colorScheme={"cyan"}
                  />
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
