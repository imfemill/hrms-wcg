import {
  BanknotesIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Team", href: "/team", icon: UsersIcon, current: false },
  {
    name: "Leaves",
    href: "/leaves",
    icon: CalendarDaysIcon,
    current: false,
    children: [
      {
        name: "My Leaves",
        href: "/leaves",
        icon: CalendarDaysIcon,
        current: false,
      },
      {
        name: "Create Leave",
        href: "/leaves/create",
        icon: CalendarDaysIcon,
        current: false,
      },
    ],
  },
  { name: "Calendar", href: "/calender", icon: CalendarIcon, current: false },
  {
    name: "My Investments",
    href: "/my-investments",
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "/reports", icon: ChartPieIcon, current: false },
  {
    name: "Company Policy",
    href: "/company-policy",
    icon: ComputerDesktopIcon,
    current: false,
  },
];
