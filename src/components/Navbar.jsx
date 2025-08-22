import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
	const icons = [
		{
			icon: <FaRegBell />,
			href: "/notifications",
		},
		{
			icon: <IoMdTrendingUp />,
			href: "/trending",
		},
		{
			icon: <BsPerson />,
			href: "/profile",
		},
		{
			icon: <MdExitToApp />,
			href: "/exit",
		},
	];

	return (
		<div className="fixed top-0 flex justify-between px-10 py-4 items-center border-b border-neutral-200 inset-x-0 backdrop-blur-md z-20 h-20">
			<div>
				<h1 className="font-vachya font-bold text-4xl">Vachya</h1>
			</div>
			<div className="w-md ">
				<input
					type="text"
					placeholder="Search debates..."
					className="border border-gray-200 rounded-md w-full h-9 placeholder:p-4 bg-gray-100/50"
				/>
			</div>
			<div className="flex justify-between gap-5 ">
				{icons.map((icon) => {
					return (
						<Link
							key={icon.href}
							className=" bg-gray-100 size-8 p-2 rounded-full hover:rounded-md transition duration-300 ease-in-out hover:bg-blue-200"
							to={icon.href}>
							{icon.icon}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
