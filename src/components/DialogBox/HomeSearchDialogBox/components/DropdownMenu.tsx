import { Link } from "@/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownMenuProps {
    /**
     * The current search type.
     */
    type: "breed" | "adopt" | "breeder" | "group" | "event";
    /**
     * Function to get the button text based on the search type.
     */
    getButtonText: (
        // eslint-disable-next-line no-unused-vars
        type: "breed" | "adopt" | "breeder" | "group" | "event"
    ) => string;
}

interface MenuItemType {
    path: "/" | "/adopts" | "/breeders" | "/groups" | "/events";
    label: string;
    type: "breed" | "adopt" | "breeder" | "group" | "event";
}

/**
 * DropdownMenu Component
 *
 * Renders a dropdown menu for selecting different search types.
 *
 * @param {DropdownMenuProps} props - The props for the DropdownMenu component.
 * @returns {JSX.Element} The rendered DropdownMenu component.
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({ type, getButtonText }) => {
    const t = useTranslations();

    const menuItems: MenuItemType[] = [
        { type: "breed", label: t("tabs.breedButton"), path: "/" },
        { type: "adopt", label: t("tabs.shelters"), path: "/adopts" },
        { type: "breeder", label: t("tabs.breeders"), path: "/breeders" },
        { type: "group", label: t("tabs.groups"), path: "/groups" },
        { type: "event", label: t("tabs.events"), path: "/events" },
    ];

    return (
        <div className='absolute right-1 top-1/2 -translate-y-1/2 md:hidden'>
            <Menu>
                <MenuButton className='z-50 flex items-center gap-x-2 rounded-lg bg-gray-200 px-2.5 py-2 capitalize text-gray-500 transition-all duration-300 ease-in-out hover:bg-primary-100 hover:text-white md:py-1 md:text-xl'>
                    {getButtonText(type)}
                    <IoMdArrowDropdown size={18} />
                </MenuButton>

                <MenuItems
                    transition
                    anchor='bottom end'
                    className='z-[999] w-48 origin-top-right rounded-xl border border-gray-300 bg-white p-1 text-lg text-black shadow-2xl transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 md:w-32'
                >
                    {menuItems
                        .filter((item) => item.type !== type)
                        .map((item) => (
                            <MenuItem key={item.path}>
                                <Link
                                    href={item.path}
                                    className='group flex w-full items-center gap-2 rounded-lg px-3 py-1 capitalize data-[focus]:bg-primary-100/15'
                                >
                                    {item.label}
                                </Link>
                            </MenuItem>
                        ))}
                </MenuItems>
            </Menu>
        </div>
    );
};

export default DropdownMenu;
