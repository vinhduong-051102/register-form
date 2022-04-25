import { useContext } from "react";
import { modalContext } from "../../context/modalContext";

const ModalForm = () => {
  const modalData = useContext(modalContext)
  const { handleCloseModal } = modalData
  return (
    <div >
      <div className="modal" id="myModal" style={{ display: "inline", marginTop: "20%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Log in notation</h4>
              <button
                type="button"
                className="btn-close"
                onClick={ handleCloseModal }
              ></button>
            </div>
            <div className="modal-body">Login failed</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={ handleCloseModal }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
