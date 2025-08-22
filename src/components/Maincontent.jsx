import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";

const Maincontent = () => {
	const [debates, setDebates] = useState([
		{
			name: "Aarav Sharma",
			question:
				"Should social media platforms be regulated by the government in India?",
			likes: 154,
			expiry: 3,
			topic: "Politics",
		},
		{
			name: "Ishita Verma",
			question:
				"Can Artificial Intelligence ever replace human teachers in schools?",
			likes: 287,
			expiry: 5,
			topic: "Technology",
		},
		{
			name: "Rohan Gupta",
			question:
				"Should India move towards complete electric vehicle adoption by 2035?",
			likes: 198,
			expiry: 2,
			topic: "Environment",
		},
		{
			name: "Ananya Singh",
			question: "Is Bollywood losing its cultural influence to OTT platforms?",
			likes: 132,
			expiry: 6,
			topic: "Entertainment",
		},
		{
			name: "Kabir Mehta",
			question: "Should voting be made compulsory in India?",
			likes: 310,
			expiry: 1,
			topic: "Politics",
		},
		{
			name: "Sanya Kapoor",
			question:
				"Does the Indian education system focus too much on theory instead of practical skills?",
			likes: 422,
			expiry: 7,
			topic: "Education",
		},
		{
			name: "Aditya Iyer",
			question:
				"Should cryptocurrencies be legalized as a mode of payment in India?",
			likes: 265,
			expiry: 4,
			topic: "Finance",
		},
		{
			name: "Priya Nair",
			question:
				"Is work-from-home more productive than working from the office?",
			likes: 173,
			expiry: 3,
			topic: "Work Culture",
		},
		{
			name: "Manav Deshmukh",
			question:
				"Should India prioritize space exploration over poverty eradication?",
			likes: 201,
			expiry: 5,
			topic: "Science",
		},
		{
			name: "Meera Reddy",
			question: "Can India achieve 100% renewable energy by 2050?",
			likes: 390,
			expiry: 2,
			topic: "Environment",
		},
	]);

	const [question, setQuestion] = useState("");
	const [category, setCategory] = useState("");

	const handleChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleSelect = (e) => {
		setCategory(e.target.value);
	};

	function addNewDebate(ques, topic) {
		const newDebate = {
			name: "Anonymous",
			question: ques,
			likes: 0,
			expiry: 3,
			topic: topic,
		};

		setDebates([newDebate, ...debates]);
	}
	return (
		<div className="m-5 max-h-screen flex flex-col gap-5 ">
			<div className="w-full flex gap-5 border border-gray-200 rounded-lg p-5 shadow-sm">
				<Link to="/profile">
					<BsPerson className="rounded-full size-10 p-2 bg-gray-300" />
				</Link>
				<div className="flex flex-col gap-5">
					<textarea
						onChange={handleChange}
						placeholder="What are Your thoughts?"
						className="p-2 bg-gray-50 w-140 h-25 border border-gray-200 focus:ring-1 rounded-md  focus:ring-gray-800"
					/>
					<div className="flex justify-between font-medium">
						<div className="flex gap-2 items-center">
							<label>Category:</label>
							<select
								onChange={handleSelect}
								className="border border-gray-200 rounded-md px-2 py-1 focus:ring-1 focus:ring-gray-700">
								<option value="Tech">Tech</option>
								<option value="Politics">Politics</option>
								<option value="Education">Education</option>
								<option value="Society">Society</option>
								<option value="Environment">Environment</option>
								<option value="Sports">Sports</option>
								<option value="Philosophy">Philosophy</option>
								<option value="Global Issues">Global Issues</option>
								<option value="Health">Health</option>
							</select>
						</div>
						<button
							onClick={() => addNewDebate(question, category)}
							className="px-6 py-2 rounded-3xl text-white bg-gray-800 cursor-pointer ">
							Post
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				{debates.map((debate) => {
					return (
						<div className="flex flex-col gap-4 border border-gray-200 rounded-md px-4 py-2 ">
							<div className="flex gap-3 items-center font-medium">
								<div className="size-10 rounded-full bg-gray-400 flex items-center justify-center ">
									{debate.name[0].toUpperCase()}
								</div>
								<div>{debate.name}</div>
								<div className="size-1 bg-neutral-400 rounded-full "></div>
								<div>
									Ends in {debate.expiry} {debate.expiry > 1 ? "days" : "day"}{" "}
								</div>
							</div>
							<div className="font-medium text-lg">{debate.question}</div>
							<div className="flex mx-10 justify-between items-center">
								<div className="flex gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer border border-transparent hover:border-gray-400 font-medium items-center">
									<BiLike />
									{debate.likes}
								</div>
								<div className="flex font-medium items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer border border-transparent hover:border-gray-400">
									<IoMdShare />
									<p>Share</p>
								</div>
								<Link
									to="/debate"
									state={{ debate }}
									className="flex font-medium items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white cursor-pointer">
									<FaPeopleGroup />
									<p>Join Debate</p>
								</Link>
								<div className="text-sm border rounded-2xl px-2 bg-gray-100 text-gray-600 ">
									{debate.topic}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Maincontent;
