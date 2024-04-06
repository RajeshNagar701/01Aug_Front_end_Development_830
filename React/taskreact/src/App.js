import React_Bootstrap from "./Bootstrap/React_Bootstrap";
import CSS from "./CSS/CSS";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import JSX from "./JSX/JSX";
import Layout from "./Layout/Layout";
import Main_lazy from "./Lazy_suspense/Main_lazy";
import Class_lefe from "./Lifecycle/Class/Class_lefe";
import Func_life from "./Lifecycle/Func/Func_life";
import MUI from "./MUI/MUI";
import Module_css from "./Module_css/Module_css";
import Class_props from "./Props/Class_props/Class_props";
import Func_props from "./Props/Func_props/Func_props";
import App_routing from "./Routing/App_routing";
import Sass from "./Sass/Sass";
import Class_state from "./State/Class_state/Class_state";
import Func_state from "./State/Func_state/Func_state";
import Styled_component from "./Styled-component/Styled_component";

function App() {
  return (
    <div className="App">
      {
       
        //<h1>Hi i am app.js component</h1>  
      
       // componet type
       //<Func_compo/>
      //<Class_compo/>

      // layout
      //<Layout/> 
      
      // jsx    
      //<JSX/>


      // css  & module css  & sass
      //<CSS/>  
      //<Module_css/>  
      <Sass/>  



      // Props

      //<Func_props/>
      //<Class_props/>  
      
      // STATE 
      //<Func_state/>  
      //<Class_state/>  
       
      // React boostrap &  mui & Styled-compopnent
      
      //<React_Bootstrap/>
      //<MUI/>
      //<Styled_component/>  

      //<App_routing/>

      // life cycle
      
      //<Class_lefe/>
      //<Func_life/> 

      // lazy loading
       // <Main_lazy/>

      }
      
      
        


    </div>
  );
}

export default App;
