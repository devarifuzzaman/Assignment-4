import React from 'react';
import { Link } from "react-router-dom";

const CommonHeroSec = ({props}) => {
	return (
		<>
			<div className="tc-innerHeader-st1">
				<div className="container">
					<div className="title col-lg-7">
						<h1 className="fsz-50 text-capitalize">{props.headingText}</h1>
					</div>
					<div className="info mt-30">
						<div className="row">
							<div className="col-lg-3">
								<div className="shap">
									<img src="./assets/img/vec6.svg" alt="" />
								</div>
							</div>
							<div className="col-lg-5">
								<div className="text fsz-16 cr-777 mt-50">
									{props.paraText}
								</div>
							</div>
							<div className="col-lg-4">
								<Link to="https://www.youtube.com/" data-lity="video" className="rotate-box mb-2 mt-5 mt-lg-0 text-black hover-orange1" data-speed="1" data-lag="0.4">
									<div className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
										<svg className="textcircle" viewBox="0 0 500 500">
											<defs>
												<path id="textcircle"
												      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
												</path>
											</defs>
											<text>
												<textPath href="#textcircle" textLength="900">
													the creative process is Be Creative
												</textPath>
											</text>
										</svg>
									</div>
									<span className="icon"> <i className="fas fa-play"></i> </span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<span className="lg-txt sub-font">{props.pageTitle}</span>
				<img src="./assets/img/header_shaps2.png" alt="" className="header-shaps" />
			</div>
		</>
	);
};

export default CommonHeroSec;
