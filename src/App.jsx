import StopWatch_Timer from "./components/0_StopWatch_timer/StopWatch_Timer";
import CustomeTabs from "./components/10_Custom_tabs/CustomeTabs";
import ModalPopUp from "./components/11_Modal_Popup/ModalPopUp";
import AccordianProject from "./components/1_Accordian_Projects/AccordianProject";
import GenerateRandomColors from "./components/2_Generate_random_colors/GenerateRandomColors";
import StarRating from "./components/3_Star_Rating/StarRating";
import { sidebarmenu } from "./components/6_Tree_View_Menu_UI/TreeviewConstants";
import TreeViewMenuUi from "./components/6_Tree_View_Menu_UI/TreeViewMenuUi";
import QrGenerator from "./components/7_Qr_Code_Generator/QrGenerator";
import LightandDarkMode from "./components/8_Light_And_Dark_Mode/LightandDarkMode";
import CustomScrollIndicator from "./components/9_Custome_scroll_indicator/CustomScrollIndicator";

function App() {
  return (
    <div>
      {/* <AccordianProject /> */}
      {/* <TreeViewMenuUi menu={sidebarmenu} /> */}
      {/* <GenerateRandomColors /> */}
      {/* <StarRating starsNumbers={10} /> */}
      {/* <QrGenerator /> */}
      {/* <LightandDarkMode /> */}
      {/* <CustomScrollIndicator /> */}
      {/* <StopWatch_Timer /> */}
      {/* <CustomeTabs /> */}
      <ModalPopUp />
    </div>
  );
}

export default App;
