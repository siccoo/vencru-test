import { tableBodyData, tableHeadData } from "../../utils/dummyData";
import { formatCurrency } from "../../utils/helpers";
import { ArrowDown, Download } from "../Icons";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { CheckBox } from "../checkbox/Checkbox";

export const Table = () => {
  return (
    <div className="overflow-auto rounded-lg shadow-form bg-white">
      <table className=" w-full">
        <thead className="bg-gray-50 border-y whitespace-nowrap  overflow-x-auto py-3 px-2 border-solid border-gray-200">
          <tr className="px-6 ">
            <th className="">
              <CheckBox />
            </th>

            {tableHeadData?.map(item => (
              <th
                scope="col"
                className={`text-xs text-left font-medium  py-4 text-gray-500 ${
                  !["Amount", "Invoice"].includes(item.name) &&
                  "hidden md:table-cell "
                }`}
                key={item.id}
              >
                {item.name === "Invoice" ? (
                  <div className="flex items-center gap-2">
                    {item.name}
                    <ArrowDown fill="none" stroke="#667085" />
                  </div>
                ) : (
                  item.name
                )}{" "}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableBodyData?.map(item => (
            <tr className="px-6" key={item.id}>
              <td className="px-1 text-center ">
                <CheckBox />
              </td>
              <td className=" py-5 font-medium text-sm text-gray-900  tracking-wider  whitespace-nowrap">
                {item.invoice}{" "}
              </td>
              <td className=" py-5 font-medium  text-sm text-gray-500 tracking-wider    whitespace-nowrap ">
                USD {formatCurrency(item.amount)}{" "}
              </td>
              <td className=" py-5 font-medium text-sm text-gray-500 hidden md:table-cell   tracking-wider  whitespace-nowrap">
                {item.date}{" "}
              </td>
              <td className="hidden md:table-cell  ">
                <Badge text={item.status} />{" "}
              </td>
              <td className=" font-medium text-sm text-gray-900 hidden md:table-cell    whitespace-nowrap py-5">
                <Avatar />
              </td>
              <td className=" font-medium text-sm text-gray-900 hidden md:table-cell   whitespace-nowrap py-5">
                <Button variant="ghost">
                  <Download fontSize={"20px"} fill="none" stroke="#667085" />{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
