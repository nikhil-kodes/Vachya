import React from "react";

const Rightsidebar = () => {
	const trendingQuestions = [
		{
			Question: "Latest Tech Queries",
			Date: "Today",
			Description: "Discuss Now",
		},
		{
			Question: "Vote is the Topic",
			Date: "Today",
			Description: "Share your views",
		},
		{
			Question: "Debate on Culture",
			Date: "Today",
			Description: "Join the Discussion",
		},
		{
			Question: "Stand on Comedy Opinions",
			Date: "Today",
			Description: "Share Your Thoughts",
		},
		{
			Question: "Community Q&A",
			Date: "Today",
			Description: "Get Involved",
		},
	];

	const people = [
		"Aarav Sharma",
		"Ishita Verma",
		"Rohan Iyer",
		"Meera Kapoor",
		"Aditya Nair",
		"Priya Reddy",
		"Kunal Bhatia",
		"Sneha Joshi",
		"Arjun Singh",
		"Kavya Deshmukh",
	];

	return (
		<div className=" m-5 flex flex-col gap-5">
			<div className="flex flex-col border border-gray-200 rounded-lg p-5 gap-3">
				<h4 className="text-xl font-medium">Explore Trending Questions</h4>
				{trendingQuestions.map((q) => {
					return (
						<div className="flex flex-col rounded-md hover:bg-gray-50 px-3 py-1 cursor-pointer">
							<h6 className="font-medium text-md">{q.Question}</h6>
							<div className="text-sm flex items-center gap-1 text-gray-600">
								{q.Date} <div className="size-1 bg-gray-400 rounded-full"></div>
								{q.Description}
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col border border-gray-200 rounded-lg p-5 gap-3">
				<h4 className="text-xl font-medium">Connect with Others</h4>
				{people.map((p) => {
					return (
						<div className="flex justify-between items-center text-sm font-medium">
							<div className="flex gap-2 items-center">
								<div className="rounded-full bg-gray-300 size-8 items-center flex justify-center">
									{p[0]}
								</div>
								<p>{p}</p>
							</div>
							<button className="border border-gray-200 px-3 py-1 rounded-md cursor-pointer">
								Connect
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Rightsidebar;
