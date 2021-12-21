import React from "react";
import "./Popup.css";

const Popup = (props) => {
    return (

		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body" style={{"overflowX": "scroll"}}>
						{props.content}
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
        // <div className="popup-box">
        //     <div className="box">
        //         <span className="close-icon" onClick={props.handleClose}>
        //             x
        //         </span>
        //         {props.content}
        //     </div>
        // </div>
    );
}

export default Popup;
