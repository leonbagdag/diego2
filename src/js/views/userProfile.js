/*import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import { UserCard } from "../component/UserCard";*/
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";

export const UserProfile = () => {
	return (
		<div className="container py-4 my-2">
			<div className="row">
				<div className="col-md-4 pr-md-5">
					<img
						className="w-100 rounded border"
						src="https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
					/>
					<div className="pt-4 mt-2">
						<section className="mb-5 mb-md-0">
							<h3 className="h6 font-weight-light text-secondary text-uppercase">Mis Habilidades</h3>
							<div className="skills pt-1 row">
								<div className="col-4 mb-2">
									<div className="chart" data-percent="95" data-scale-color="#fff">
										<span>PHP</span>
									</div>
								</div>
								<div className="col-4 mb-2">
									<div className="chart" data-percent="85" data-scale-color="#fff">
										<span>Ruby</span>
									</div>
								</div>
								<div className="col-4 mb-2">
									<div className="chart" data-percent="90" data-scale-color="#fff">
										<span>Java</span>
									</div>
								</div>
								<div className="col-4 mb-2">
									<div className="chart" data-percent="82" data-scale-color="#fff">
										<span>Python</span>
									</div>
								</div>
								<div className="col-4 mb-2">
									<div className="chart" data-percent="70" data-scale-color="#fff">
										<span>C++</span>
									</div>
								</div>
								<div className="col-4 mb-2">
									<div className="chart" data-percent="60" data-scale-color="#fff">
										<span>ASP</span>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className="col-md-8">
					<div className="d-flex align-items-center">
						<h2 className="font-weight-bold m-0">Diego Rojas T.</h2>
					</div>
					<p className="lead mt-4">
						All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
						making this the first true generator on the Internet.
					</p>
					<section className="mt-5">
						<h3 className="h6 font-weight-light text-secondary text-uppercase">Rankings</h3>
						<div className="d-flex align-items-center">
							<strong className="h1 font-weight-bold m-0 mr-3">4.85</strong>
							<div>
								<input
									data-filled="fa fa-2x fa-star mr-1 text-warning"
									data-empty="fa fa-2x fa-star-o mr-1 text-light"
									value="5"
									type="hidden"
									className="rating"
									data-readonly
								/>
							</div>
						</div>
					</section>
					<section className="d-flex mt-5">
						<button className="btn btn-light bg-transparent mr-3 mb-3">
							<i className="fa fa-comments"></i>
							Private Message
						</button>
						<button className="btn btn-light bg-transparent mr-3 mb-3">
							<i className="fa fa-warning"></i>
							Report User
						</button>
						<button className="btn btn-primary mb-3">
							<i className="fa fa-check"></i>
							Hire Me
						</button>
					</section>
					<section className="mt-4">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true">
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false">
									Reviews
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="contact-tab"
									data-toggle="tab"
									href="#contact"
									role="tab"
									aria-controls="contact"
									aria-selected="false">
									Recent Projects
								</a>
							</li>
						</ul>
						<div className="tab-content py-4" id="myTabContent">
							<div
								className="tab-pane py-3 fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab">
								<h6 className="text-uppercase font-weight-light text-secondary">Contact Information</h6>
								<dl className="row mt-4 mb-4 pb-3">
									<dt className="col-sm-3">Phone</dt>
									<dd className="col-sm-9">+1 123 456 78900</dd>

									<dt className="col-sm-3">Home address</dt>
									<dd className="col-sm-9">
										<address className="mb-0">
											2983 Heavner Court
											<br />
											Garden City, NY 11530
										</address>
									</dd>

									<dt className="col-sm-3">Email address</dt>
									<dd className="col-sm-9">
										<a href="mailto:aang.is.kefy@gmail.com">aang.is.kefy@gmail.com</a>
									</dd>
								</dl>

								<h6 className="text-uppercase font-weight-light text-secondary">Basic Information</h6>
								<dl className="row mt-4 mb-4 pb-3">
									<dt className="col-sm-3">Birthday</dt>
									<dd className="col-sm-9">January 21, 1991</dd>

									<dt className="col-sm-3">Gender</dt>
									<dd className="col-sm-9">Male</dd>
								</dl>
							</div>
							<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								...
							</div>
							<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
								...
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};
