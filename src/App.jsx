import AccordianProject from "./components/1_Accordian_Projects/AccordianProject";
import GenerateRandomColors from "./components/2_Generate_random_colors/GenerateRandomColors";
import { sidebarmenu } from "./components/6_Tree_View_Menu_UI/TreeviewConstants";
import TreeViewMenuUi from "./components/6_Tree_View_Menu_UI/TreeViewMenuUi";

function App() {
  return (
    <div>
      {/* <AccordianProject /> */}
      {/* <TreeViewMenuUi menu={sidebarmenu} /> */}
      <GenerateRandomColors />
    </div>
  );
}

export default App;
