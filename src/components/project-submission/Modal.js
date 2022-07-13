import "../../styles/project-submission/modal.css";

export default function Modal({ closeModal, name, submission }) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-image">
                        <img src={submission} alt="" />
                    </div>
                    <div className="modal-footer">{name}'S PROJECT</div>
                    <button
                        className="modal-close"
                        onClick={() => closeModal(false)}
                    >
                        {" "}
                        close{" "}
                    </button>
                </div>
            </div>
        </>
    );
}
