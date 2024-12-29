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
//       <BrowserRouter>
      
//         <div className="container my-4" >
//         <NavBar/> 
    
          



//            <Routes>
//           <Route exact path="/Home" element={<Title/>}/>
//             <Route exact path="/general" element={<News key="general" pageSze={3} country={"us"} category="general" />}/>
//             <Route exact path="/business" element={<News key="business" pageSze={3} country={"us"} category="business" />}/>
//             <Route exact path="/entertainment" element={ <News pageSze={3} key="entertainment" country={"us"} category="entertainment"/>} />
//             <Route exact path="/health" element={ <News pageSze={3} key="health" country={"us"} category="health"/>} />
//             <Route exact path="/science" element={ <News pageSze={3} key="science" country={"us"} category="science"/>} />
//             <Route exact path="/sports" element={ <News pageSze={3} key="sports" country={"us"} category="sports"/>} />
//             <Route exact path="/technology" element={ <News pageSze={3} key="technology" country={"us"} category="technology"/>}/>  
//           </Routes> 
//         {/* <News /> */}
//         </div>
//       </BrowserRouter>
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
//     return (
//       <>


//           <BrowserRouter>
//           <div className="container my-4">
//             <NavBar />

//            <Title/>
          
//             <Routes>
//               {/* <Route exact path="/Home" element={<Title />} /> */}
//               <Route exact path="/general" element={<News key="general" pageSize={3} country="us" category="general" />} />
//               <Route exact path="/business" element={<News key="business" pageSize={3} country="us" category="business" />} />
//               <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} country="us" category="entertainment" />} />
//               <Route exact path="/health" element={<News key="health" pageSize={3} country="us" category="health" />} />
//               <Route exact path="/science" element={<News key="science" pageSize={3} country="us" category="science" />} />
//               <Route exact path="/sports" element={<News key="sports" pageSize={3} country="us" category="sports" />} />
//               <Route exact path="/technology" element={<News key="technology" pageSize={3} country="us" category="technology" />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </>
//     );
//   }
// }










import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import Title from './Components/title';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="container my-4">
            <NavBar />
            <Routes>
              {/* Default route to display the Title component */}
              <Route exact path="/" element={<Title />} />
              {/* Other routes */}
              <Route exact path="/general" element={<News key="general" pageSize={3} country="us" category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={3} country="us" category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} country="us" category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={3} country="us" category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={3} country="us" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={3} country="us" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={3} country="us" category="technology" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
