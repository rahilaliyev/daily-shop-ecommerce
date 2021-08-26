import React from "react";
import Modal from "react-modal";
import "./Modal.scss";
import LoginPaper from "./LoginPaper";
import Logo from "../../assets/Logo.png";

Modal.setAppElement("#root");
const ModalButtonLogin = (props) => {
  let { ModalOpenLogin, setModalOpenFunc } = props;
  return (
    <div>
      <Modal
        isOpen={ModalOpenLogin}
        onRequestClose={setModalOpenFunc}
        style={{
          overlay: {
            width: "100%",
          },
          content: {
            width: "30%",
            left: "35%",
            top: "20%",
            height: "50%",
            boxShadow: "0px 0px 8px rgba(16, 30, 115, 0.12)",
          },
        }}
      >
        <div className="logoModal">
          <img src={Logo} alt="Logo"></img>
        </div>
        <LoginPaper setModalOpenFunc={setModalOpenFunc} />
      </Modal>
    </div>
  );
};

export default ModalButtonLogin;
