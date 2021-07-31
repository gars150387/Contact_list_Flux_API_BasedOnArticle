import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
		showModal: false
	});
	// let id = props.match.params.id;
	const { store, actions } = useContext(Context);
	console.log("Storeeeeee", store.contacts);

	return (
		<div className="container">
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src="data:image/png;base64,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"
							alt=""
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<Link to={"/edit/" + props.e.id + "/" + props.index}>
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
							</Link>
							<button className="btn" onClick={() => setState({ showModal: true })}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{props.e.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-seondary">{props.e.address}</span>
						<br />
						<i className="fa fa-phone fa-fw text-muted mr-3" />
						<span className="text-secondary small">{props.e.phone}</span>
						<br />
						<i
							className="fa fa-envelope fa-fw text-secondary mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-secondary small text-truncate">{props.e.email}</span>
					</div>
				</div>
			</li>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={props.e.id} />
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	onDelete: PropTypes.func,
	e: PropTypes.object,
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
