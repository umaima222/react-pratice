import React from "react";
import { logo, profileimg } from "../Constant/Img";

const Header = () => {
	return (
		<>
			<header className="">
				<div className="container">
					<div className="flex justify-between nav ">
						<div className="grid grid-cols-12 gap-4 w-full items-center md:justify-between">
							<div className="logo-box  col-span-2 md:col-span-4">
								<img src={logo} alt="" className="w-[120px] md:w-[200px]" />
							</div>
							<div className="all-nav-item w-full  col-span-6  md:hidden">
								<ul className="w-full flex justify-center ">
									<li className="inline p-2 ">
										<a href="#" className="font-serif capitalize">Home</a>
									</li>
									<li className="inline p-2">
										<a href="#" className="font-serif capitalize">About us </a>
									</li>
									<li className="inline p-2">
										<a href="#" className="font-serif capitalize">services</a>
									</li>
									<li className="inline p-2">
										<a href="#" className="font-serif capitalize">book now </a>
									</li>
									<li className="inline p-2">
										<a href="#" className="font-serif capitalize">contact us</a>
									</li>
								</ul>
							</div>
							<div className="contact flex gap-4 items-center   col-span-4 md:hidden">
							<div className="phone-call flex gap-2 items-center   ">
								<div className="phone-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="28"
										height="28"
										viewBox="0 0 29 29"
										class="__web-inspector-hide-shortcut__"
									>
										<g
											id="Group_4"
											data-name="Group 4"
											transform="translate(-1462 -22)"
										>
											<circle
												id="Ellipse_1"
												data-name="Ellipse 1"
												cx="14.5"
												cy="14.5"
												r="14.5"
												transform="translate(1462 22)"
												fill="#fa00a7"
											></circle>
											<path
												id="Icon_ionic-ios-call"
												data-name="Icon ionic-ios-call"
												d="M19.8,16.848A13.244,13.244,0,0,0,17.036,15c-.829-.4-1.133-.39-1.72.033-.488.353-.8.681-1.367.558A8.154,8.154,0,0,1,11.2,13.556,8.1,8.1,0,0,1,9.171,10.81c-.119-.566.209-.878.558-1.367.423-.587.435-.891.033-1.72A12.982,12.982,0,0,0,7.911,4.957c-.6-.6-.739-.472-1.071-.353a6.1,6.1,0,0,0-.981.521A2.959,2.959,0,0,0,4.681,6.369c-.234.5-.5,1.445.874,3.9a21.758,21.758,0,0,0,3.826,5.1h0l0,0,0,0h0a21.843,21.843,0,0,0,5.1,3.826c2.455,1.379,3.395,1.108,3.9.874A2.909,2.909,0,0,0,19.634,18.9a6.1,6.1,0,0,0,.521-.981C20.274,17.587,20.41,17.451,19.8,16.848Z"
												transform="translate(1464.51 24.498)"
												fill="#fff"
											></path>
										</g>
									</svg>
								</div>
                                <div className="phone-num">
                                    <h3 className="font-serif capitalize">Call Us Anytime</h3>
                                    <p className="m-0">800-987-65-43</p>
                                </div>
							</div>
							<div className="phone-call flex gap-2 items-center  ">
								<div className="phone-icon">
									<img src={profileimg} alt="" />
								</div>
                                <div className="phone-num">
                                    <h3 className="font-serif capitalize" >john dom</h3>
                                    {/* <p>800-987-65-43</p> */}
                                </div>
							</div>
							</div>
							<div className="canvas-icon md:block col-span-4">
							<i className="fa fa-bars"></i>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
