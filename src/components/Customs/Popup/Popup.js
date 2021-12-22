import React from "react";
import "./Popup.css";

const Popup = (props) => {
    return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-xl modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body" style={{"overflowX": "scroll"}}>
						<div className="container">
							{props.content}
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Popup;
