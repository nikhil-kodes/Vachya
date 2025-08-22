import React from "react";
import { useLocation } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";

const Debate = () => {
	const location = useLocation();
	const { debate } = location.state || {};
	console.log(debate);
	return (
		<div className="w-full m-5 flex flex-col gap-5">
			<div className="flex flex-col gap-5 border border-gray-200 p-5 rounded-lg text-gray-800">
				<div className="flex items-center gap-4 font-medium text-lg ">
					<div className="size-8 bg-gray-400 flex items-center justify-center rounded-full font-medium">
						{debate.name[0]}
					</div>
					<h3>{debate.name}</h3>
					<div className="size-2 bg-gray-400 rounded-full "></div>
					<p className="text-sm">
						Ends in {debate.expiry} {debate.expiry > 1 ? "days" : "day"}{" "}
					</p>
				</div>
				<div className=" flex flex-col gap-5 font-medium px-10 ">
					<p className="text-2xl">{debate.question}</p>
					<div className="flex mr-20 justify-between items-center">
						<div className="flex gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-100 cursor-pointer border border-gray-200 hover:border-blue-200 font-medium items-center transition duration-300">
							<BiLike />
							{debate.likes}
						</div>
						<div className="flex gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-100 cursor-pointer border border-gray-200 hover:border-blue-200 font-medium items-center transition duration-300">
							<IoMdShare />
							<p>Share</p>
						</div>
						<div className="text-sm border rounded-2xl px-2 bg-gray-100 text-gray-600 ">
							{debate.topic}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5 border border-gray-200 p-5 rounded-lg">
				<div className="flex gap-5 w-full">
					<div className="flex flex-col w-[50%] gap-5 border border-gray-200 p-5 rounded-lg"></div>
					<div className="flex flex-col w-[50%] gap-5 border border-gray-200 p-5 rounded-lg"></div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Debate;
