import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./components/Not-Found";
import Debate from "./pages/Debate";
import Maincontent from "./components/Maincontent";
import Rightsidebar from "./components/Rightsidebar";
import LeftSideBar from "./components/LeftSideBar";

const App = () => {
	return (
		<Router>
			<div className="h-screen flex flex-col gap-5">
				<Navbar />
				<div className="flex mt-20 gap-5">
					<div className="w-[20%] sticky top-20 self-start">
						<LeftSideBar />
					</div>
			
						<Routes>
							<Route
								path="/"
								element={
									<>
										<div className="w-[70%] overflow-y-auto">
											<Maincontent />
										</div>

										<div className="w-[25%] sticky top-20 self-start">
											<Rightsidebar />
										</div>
									</>
								}
							/>
							<Route path="/debate" element={<Debate />}/>
							<Route
								path="*"
								element={<NotFound />}
							/>
						</Routes>
					</div>
				</div>

		</Router>
	);
};

export default App;
