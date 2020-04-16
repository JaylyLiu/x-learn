import React, { useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import WhiteArrow from './WhiteArrow';
import './Modal.scss';

const ModalHead = props => {
  return (
    <div className={`m-head ${props.className || ""}`} style={props.style}>
      {!!props.children && props.children}
    </div>
  );
};
ModalHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

const ModalBody = props => {
  return (
    <div className={`m-body ${props.className || ""}`} style={props.style}>
      {!!props.children && props.children}
    </div>
  );
};
ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

const ModalFooter = props => {
  return (
    <div className={`m-footer ${props.className || ""}`} style={props.style}>
      {!!props.children && props.children}
    </div>
  );
};
// ModalFooter.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.oneOfType[(PropTypes.string, PropTypes.object)],
//   style: PropTypes.object
// };
let modalWrapper, modalContainer;
function Modal(props) {
  /**
   * when the non-content section be clicked, close the Modal
   */
  const {
    show,
    callBackFun,
    maskClosable,
    onClose,
    children,
    className,
    id
  } = props;
  const bodyNode = document.body;

  const [overflow, setOverflow] = useState(["", ""]);
  modalContainer = document.querySelector("#" + id);
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.setAttribute("id", id);
    bodyNode.appendChild(modalContainer);
  }

  if (!modalWrapper) {
    modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "modal-wrapper");
  }

  if (!!modalContainer && !!modalWrapper) {
    // modalContainer.appendChild(modalWrapper);
  }

  const [showModal, setShowModal] = useState(show);
  const closeModal = () => {
    !!callBackFun && callBackFun();
    onClose();
    modalContainer.removeChild(modalWrapper);
  };

  useEffect(() => {
    if (show) {
      setOverflow([
        document.body.style.overflowX,
        document.body.style.overflowY
      ]);
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
      if (!!modalContainer && !!modalWrapper) {
        modalContainer.appendChild(modalWrapper);
      }

      setShowModal(true);
      modalWrapper.setAttribute("class", "modal-wrapper-active");
    }

    return () => {
      if (document.querySelector("#modal-container")) {
        document.querySelector("#modal-container").innerHTML = "";
      }
      document.body.style.overflowX = overflow[0];
      document.body.style.overflowY = overflow[1];
    };
  }, [show]);

  const overlayClicked = event => {
    if (maskClosable && event.target === event.currentTarget) {
      // onClose(event);
      setShowModal(false);
    }
  };

  if (show && modalWrapper) {
    return createPortal(
      <CSSTransition
        in={showModal}
        onExited={closeModal}
        timeout={200}
        classNames="modal-css-wrapper modal-css"
      >
        <div className={`modal-wrapper ${className || ""}`}>
          <div className="m-box bg-white">
            <span
              className="icon-close icon m-close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <WhiteArrow />
            </span>
            {React.Children.map(children, (item, key) => {
              if (item)
                return React.cloneElement(item, {
                  key,
                  onClose
                });
            })}
          </div>
        </div>
      </CSSTransition>,
      modalWrapper
    );
  } else return null;
}

Modal.defaultProps = {
  maskClosable: true,
  show: true,
  id: "modal-container"
};

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  productImgs: PropTypes.array,
  productData: PropTypes.object,
  /**
   * control when the non-content section be clicked will close the Modal or not
   */
  maskClosable: PropTypes.bool,
  id: PropTypes.string
};

Modal.Head = ModalHead;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
