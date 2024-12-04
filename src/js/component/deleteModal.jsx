import React, { useContext } from "react";
import { Context } from "../store/appContext";

const DeleteModal = props => {
    const { actions } = useContext(Context);

    return (
        <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModal">Delete Contact</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        If you continue, the contact will be permanently deleted.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={e => actions.deleteContact(props.id)} 
                            data-bs-dismiss="modal"
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;