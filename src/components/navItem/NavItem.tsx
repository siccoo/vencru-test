import { SidebarData } from "../../types";
import { useNavContext } from "../../containers/nav";
import { Button } from "../button/Button";

export const NavItem = ({ label, icon, count }: Omit<SidebarData, "id">) => {
  const Icon = icon;
  // const [activeRoute, setActiveRouter] = useState("");
  const isPath =
    // activeRoute?.toLowerCase() ===
    label?.toLowerCase() === "settings";
  // console.log({ isPath });
  const { nav, setNav } = useNavContext();

  const handleClick = () => {
    //  setActiveRouter(route);
    setNav(!nav);
  };
  return (
    <div
      className={`flex justify-between items-center w-full my-5 ${
        isPath ? "bg-gray-50 rounded-md py-2" : ""
      }`}
    >
      <Button
        onClick={handleClick}
        className="flex w-full gap-4 items-center"
        variant="ghost"
      >
        <div>
          <Icon fontSize={"20px"} fill="none" stroke="#667085" />{" "}
        </div>
        <p className="flex gap-3 text-gray-700 font-normal text-base">
          {label}
        </p>
      </Button>
      {count && (
        <div className="rounded-lg bg-[#F2F4F7] text-gray-700 py-1 px-2 font-medium text-sm">
          {count}
        </div>
      )}
    </div>
  );
};
