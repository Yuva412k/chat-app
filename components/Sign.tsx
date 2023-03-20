import React from "react";
import { signIn } from "next-auth/react";

import { AiOutlineDownload } from "react-icons/ai";

type SignProps = {};

const Sign: React.FC<SignProps> = () => {
  return (
    // <div className="bg-discord_blue pb-8 md:pb-0">
    //   <div className="p-7 py-9 h-screen md:h-[83vh] md:flex relative overflow-x-hidden">
    //     <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center ">
    //       <h1 className="text-5xl text-white font-bold">IMAGINE A PLACE...</h1>
    //       <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full z-50">
    //         {`...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.`}
    //       </h2>
    //       <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
    //         <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
    //           <AiOutlineDownload className="w-6 mr-2" />
    //           Download for Mac
    //         </button>
    //         <button
    //           className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out"
    //           onClick={() => signIn()}
    //         >
    //           Open Discord in your browser
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex-grow">
    //       <img
    //         src="https://drive.google.com/uc?export=download&id=1rAb-Vh1ViLa_mANwo4EjFoJEYi5VraU8"
    //         alt=""
    //         className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
    //       />
    //       <img
    //         src="https://drive.google.com/uc?export=download&id=1mXmUwiczchFZK0af4DCPgDsD4HIcRYWI"
    //         alt=""
    //         className="hidden md:inline absolute"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Chat App </h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Log In</h2>
					</div>
					<div className="row">
						<form className="form-group">
							<div className="row">
								<button type="submit" value="Submit" className="btn" onClick={() => signIn()}></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};
export default Sign;
