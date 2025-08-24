import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdRssFeed } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";


const LeftSideBar = () => {
	const options = [
		{
			title: {
				icon: <IoHome />,
				body: "Home",
			},
			href: "/",
		},
		{
			title: {
				icon: <FaArrowTrendUp />,
				body: "Trending",
			},
			href: "/trending",
		},
		{
			title: {
				icon: <TbMessageCircleQuestion />,
				body: "Questions",
			},
			href: "/questions",
		},
		{
			title: {
				icon: <MdOutlinePeopleAlt />,
				body: "Discussion",
			},
			href: "/discussion",
		},
		{
			title: {
				icon: <MdRssFeed />,
				body: "Feed",
			},
			href: "/feed",
		},
		{
			title: {
				icon: <FaRegChartBar />,
				body: "Topics",
			},
			href: "/topics",
		},
		{
			title: {
				icon: <FaRegBell />,
				body: "Notification",
			},
			href: "/notifications",
		},
		{
			title: {
				icon: <BsPerson />,
				body: "Profile",
			},
			href: "/profile",
		},
		{
			title: {
				icon: <CiSettings />,
				body: "Settings",
			},
			href: "/settings",
		},
	];

	const groups = [
		{
			title: "Tech Talk",
			href: "/groups/tech-talk",
		},
		{
			title: "Political View",
			href: "/groups/political-view",
		},
		{
			title: "AI insights",
			href: "/groups/ai-insights",
		},
		{
			title: "Debate Club",
			href: "/groups/debate-club",
		},
		{
			title: "War",
			href: "/groups/war",
		},
	];

	return (
		<div className="sticky top-0 overflow-y-hidden h-screen scrollbar-hover border border-neutral-200 md:rounded-lg md:m-5 flex flex-col gap-2 w-full p-4 bg-white shadow-md">
			{options.map((option) => {
				return (
					<NavLink
						className={({ isActive }) =>
							isActive
								? "font-medium p-1 md:px-2 md:py-1 flex items-center gap-2 bg-gray-800 text-white rounded-sm md:rounded-md text-sm md:text-md"
								: "font-medium md:px-2 md:py-1 flex items-center gap-2 w-full rounded-sm md:rounded-md hover:bg-gray-100 transition-all duration-300 text-sm md:text-md"
						}
						key={option.href}
						to={option.href}>
						{option.title.icon}
						<p className="hidden md:flex">{option.title.body}</p>
					</NavLink>
				);
			})}
			<div className="mt-2 ml-1 ">
				<h5 className="font-medium text-xl">Groups</h5>
				{groups.map((group) => {
					return (
						<div
							key={group.href}
							className="p-1">
							<Link
								to={group.href}
								className="flex items-center gap-2 text-sm">
								<div className="rounded-full h-2 w-2 bg-neutral-700"></div>
								{group.title}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LeftSideBar;
