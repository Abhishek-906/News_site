// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './Components/NavBar';
// import PropTypes from 'prop-types'
// import News from './Components/News';
// import Title from './Components/title';
// import {  BrowserRouter, Route, Routes } from "react-router-dom";

// export default class App extends Component {
 
//   render() {
 
//   return (
//     <>
//       {/* <BrowserRouter> */}
      
//         <div className="container my-4" >
//         <NavBar/> 
//         {/* <Title/> */}
//           {/* <Routes>
//           <Route exact path="/Home" element={<Title/>}/>
//             <Route exact path="/general" element={<News key="general" pageSze={3} country={"us"} category="general" />}/>
//             <Route exact path="/business" element={<News key="business" pageSze={3} country={"us"} category="business" />}/>
//             <Route exact path="/entertainment" element={ <News pageSze={3} key="entertainment" country={"us"} category="entertainment"/>} />
//             <Route exact path="/health" element={ <News pageSze={3} key="health" country={"us"} category="health"/>} />
//             <Route exact path="/science" element={ <News pageSze={3} key="science" country={"us"} category="science"/>} />
//             <Route exact path="/sports" element={ <News pageSze={3} key="sports" country={"us"} category="sports"/>} />
//             <Route exact path="/technology" element={ <News pageSze={3} key="technology" country={"us"} category="technology"/>}/>  
//           </Routes> */}
//         <News />
//         </div>
//       {/* </BrowserRouter> */}
//     </>
//   );

// }

// }

















// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './Components/NavBar';
// import PropTypes from 'prop-types'
// import News from './Components/News';
// import Title from './Components/title';
// import {  BrowserRouter, Route, Routes } from "react-router-dom";

// export default class App extends Component {
 
//   render() {
 
//   return (
    
       
       
//     <div>
//       <NavBar/>
//          <News pageSize={5} country="us"  category="sports"/>  
           
//     </div>

    
//   )

// }
// }



// import './App.css';

// // import React, { Component } from 'react'
// // import NavBar from './components/NavBar';
// // import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 5;
//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <Switch>
//           <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }








import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5} country="us" category="science"/>
      </div>
    )
  }
}