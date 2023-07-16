// import { Modal } from "flowbite";
import BottomNav from "../../../components/BottomNav";
import SettingsLayout from "../../../components/SettingsLayout";
import TaskModal from "../../../components/taskModal";

export default function Dashboard() {
  return (
    <>
      <TaskModal />
      <SettingsLayout />
      <BottomNav />
    </>
  );
}
