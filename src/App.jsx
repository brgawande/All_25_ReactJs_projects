import AccordianProject from "./components/1_Accordian_Projects/AccordianProject";
import { sidebarmenu } from "./components/6_Tree_View_Menu_UI/TreeviewConstants";
import TreeViewMenuUi from "./components/6_Tree_View_Menu_UI/TreeViewMenuUi";

function App() {
  return (
    <div>
      <AccordianProject />
      {/* <TreeViewMenuUi menu={sidebarmenu} /> */}
    </div>
  );
}

export default App;
