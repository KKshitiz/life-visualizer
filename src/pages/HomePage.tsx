import { useState } from "react";
import Boxes from "../components/Boxes";
import Button from "../components/Button";
import Footer from "../components/Footer";
import ConfigInput from "../components/Home/ConfigInput";
import EventsSelector from "../components/Home/EventsSelector";
import TutorialButton from "../components/Home/TutorialButton";
import Modal from "../components/Modal";

const HomePage = () => {
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isTutorialOpen} onClose={() => setIsTutorialOpen(false)}>
        Introduction
        <div>
          <Button>Skip</Button>
        </div>
      </Modal>
      <div className="flex flex-col flex-grow items-center">
        <h1>Life visualizer</h1>
        <div className="py-5">
          <ConfigInput />
          <EventsSelector />
        </div>
        <Boxes />
      </div>
      <TutorialButton />
      <Footer />
    </>
  );
};
export default HomePage;
