type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
      <dialog
        className={`modal backdrop:bg-black/50 ${
          props.isOpen ? "fixed" : "hidden"
        } w-full h-full z-10 flex justify-center items-center`}
        onClick={props.onClose}
      >
        <div className="w-1/2 p-5 bg-slate-500">{props.children}</div>
      </dialog>
  );
};
export default Modal;
