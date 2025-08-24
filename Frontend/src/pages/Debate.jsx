import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";

const Debate = () => {
	const location = useLocation();
	const { debate } = location.state || {};

	const [favour, setFavour] = useState([]);
	const [against, setAgainst] = useState([]);

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
			<div className="flex flex-col gap-5 border border-gray-400 p-5 rounded-lg">
				<div className="flex gap-5 w-full">
					<div className="flex flex-col w-[50%] justify-center text-center gap-5  rounded-lg">
						<h2 className="relative font-bold text-2xl font-vachya">
							<div className="absolute h-px w-full bottom-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
							Favour / Pro
						</h2>
						<div className="flex flex-col justify-center gap-1 p-5 rounded-lg border border-gray-400 h-100 overflow-y-hidden scrollbar-hover">
							{favour.map((fa) => {
								return <div></div>;
							})}
						</div>
					</div>
					<div className="flex flex-col w-[50%] justify-centre text-center gap-5  rounded-md">
						<h2 className="relative font-bold text-2xl font-vachya">
							<div className="absolute h-px w-full bottom-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
							Against / Con
						</h2>
						<div className="flex flex-col justify-center gap-1 p-5 rounded-md border border-gray-400 h-100 overflow-y-hidden scrollbar-hover">
							{against.map((ag)=>{
								return(
									<div></div>
								)
							})}
						</div>
					</div>
				</div>
				<div className="flex gap-5 justify-between items-center font-medium text-white">
					<button className="text-center w-[50%] bg-gray-800 p-2 rounded-lg cursor-pointer">
						Argue in Favour
					</button>
					<button className="text-center w-[50%] bg-gray-800 p-2 rounded-lg cursor-pointer">
						Argue in Against
					</button>
				</div>
				<div className="flex gap-5 flex-1 items-center">
					<input
						type="text"
						placeholder="Enter your argument..."
						className="bg-gray-100 h-10 border p-2 flex-1 border-gray-400 rounded-md"
					/><button className="bg-gray-800 text-white font-medium px-4 py-2 rounded-md cursor-pointer">Send</button>
				</div>
			</div>
		</div>
	);
};

export default Debate;
