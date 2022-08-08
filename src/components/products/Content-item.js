import React from "react";
import Modal from "../modal/modal";
import Portal from "../portal";

const ContentItem = ({ imgSrc, title, price }) => {
  const [isModal, setModal] = React.useState(false);
  return (
    <div className="card">
      <img src={imgSrc} alt="Image" />
      <h1 className="title">{title}</h1>
      <p className="price">{price}</p>
      <button className="btn" onClick={() => setModal(true)}>
        Buy
      </button>
      <Portal>
        <Modal
          isVisible={isModal}
          title="Modal Title"
          content={<p>Add your content here</p>}
          footer={<button>To send</button>}
          onClose={() => setModal(false)}
        />
      </Portal>
    </div>
  );
};

export default ContentItem;
