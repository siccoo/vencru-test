import { useMediaQuery } from "../../hooks/mediaQuery";
import { Transition } from "@headlessui/react";
import { useNavContext } from "../../containers/nav";
import { Fragment, ReactNode } from "react";
import { Button } from "../button/Button";
import { Menu } from "../Icons";
import SideBar from "../sidebar/Sidebar";

import { SettingsTab } from '../../components/settingsTab/SettingsTab';

interface DashboardLayoutProps {
    children: ReactNode;
}
export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const isDesktop = useMediaQuery("(min-width:1060px)");
    const { nav, setNav } = useNavContext();
    return (
        <div className="flex bg-gray-50">
            <Transition
                as={Fragment}
                show={nav || isDesktop}
                enter="transform transition duration-[200ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <SideBar />
            </Transition>
            <>
                <main className={`w-full transition-all duration-[200ms]`}>
                    {!isDesktop && (
                        <div className="px-6 py-4 items-center sticky top-0 bg-white">
                            <header className="flex justify-between">
                                <img
                                    src="/icons/untitled.png"
                                    alt="logo"
                                    width={143}
                                    height={32}
                                />
                                <Button variant="ghost" onClick={() => setNav(!nav)}>
                                    <Menu fill="none" fontSize={"26px"} stroke="#667085" />
                                </Button>
                            </header>
                        </div>
                    )}
                    <div
                        className={` md:px-4 py-5 min-h-full w-full ${nav && !isDesktop ? "hidden" : "block"
                            }`}
                    >
                        {children}{" "}
                        <div>
                            <SettingsTab
                                pageTitle={"Settings"}
                                pageSubTitle={"Manage your team and preferences here."} />
                        </div>
                    </div>
                </main>
            </>
        </div>
    );
};
