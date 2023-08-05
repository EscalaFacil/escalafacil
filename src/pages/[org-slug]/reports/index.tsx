import Navbar from "@components/Navbar";
import useModal from "../../../../src/hooks/UseModal";
import ReportLayout from "@components/ReportsLayout";

export default function Reports() {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <Navbar />
      <ReportLayout />
    </>
  );
}
