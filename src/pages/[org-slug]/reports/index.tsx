import BottomNav from "../../../components/BottomNav";
import Modal from "../../../components/Modal";
import useModal from "../../../../src/hooks/UseModal";
import ReportModal from "../../../components/ReportModal";
import ReportLayout from "../../../components/ReportsLayout";

export default function Reports() {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={toggle}>Open Modal </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ReportModal />
      </Modal>
      <ReportLayout />  
      <BottomNav />
    </>
  );
}
