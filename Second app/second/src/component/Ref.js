import React, { useEffect, useRef } from "react";
import Modal from "./Modal";
import Timer from "./Timer";

const Ref = () => {
  const fileRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    console.log(fileRef);
  }, [fileRef]);

  const handleFileSelect = () => {
    fileRef.current.click();
  };

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  return (
    <div>
      <input type="file" ref={fileRef} style={{ display: "none" }}></input>
      <button onClick={handleFileSelect}>Select File</button>
      {/* <dialog ref={modalRef}>
        <p>Some text</p>
        <button onClick={closeModal}>cancel</button>
      </dialog> */}
      <Modal ref={modalRef}>
        <p>Some text</p>
        <button onClick={closeModal}>cancel</button>
      </Modal>
      <button onClick={openModal}>Show</button>
      <br></br>
      <br></br>
      <Timer />
    </div>
  );
};

export default Ref;
