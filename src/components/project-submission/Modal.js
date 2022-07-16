import "../../styles/project-submission/modal.css";

export default function Modal({ closeModal, submission }) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <h1
                        className="modal-close"
                        onClick={() => closeModal(false)}
                    >
                        X
                    </h1>
                    <div className="modal-image">
                        <img src={submission} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
