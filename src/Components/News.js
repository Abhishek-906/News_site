
//original 

// import React, { Component } from "react";
// import NewsItem from "./NewsItem.js";
// import Spinner from "./spinner.js";
// import PropTypes from "prop-types";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSze: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSze: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

//   constructor(props) {
//     super(props);
//     console.log("ye ho rha h");
   
//     this.state = {
//       article: [],
//       loading: true,
//       page: 1,  
//     };
//     document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
//   }

//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page}&pageSize=${this.props.pageSze}`;
// //  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page}&pageSize=${this.props.pageSze}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       article: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   gotonext = async () => {
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   gotoprev = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };
//   render() {
//     return (
//       <div className="container">
//         <h2 className="text-center">NewsMonkey Top headlines</h2>
//         <p className="text-center" id="categry" style={{ fontWeight: "bold" }}>
//           Category: {this.capitalizeFirstLetter(this.props.category)}
//         </p> 
//         {this.state.loading && <Spinner />}
//         <div className="row">
//           {!this.state.loading &&
//             this.state.article.map((element) => {
//               return (
//                 <div className="col-md-4">
//                   <NewsItem
//                     className="col-md-4"
//                     pageSze="15"
//                     key={element.url}
//                     link={element.url}
//                     imageurl={element.urlToImage}
//                     title={
//                       !element.title ? "Go to Site" : element.title.slice(0, 45)}
//                     date={element.publishedAt}
//                     author={!element.author ? "UnKnown" : element.author}
//                     discreption={
//                       !element.description
//                         ? "Click on Go Somewhere"
//                         : element.description.slice(0, 88)
//                     }
//                   />
//                 </div>
//               );
//             })}
//         </div>
//         <div className="d-flex justify-content-between">
//           <button
//             type="button"
//             disabled={this.state.page <= 1}
//             className="btn btn-dark mx-3"
//             onClick={this.gotoprev}
//           >
//             {" "}
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSze)
//             }
//             className="btn btn-dark mx-3"
//             onClick={this.gotonext}
//           >
//             {" "}
//             Next &rarr;{" "}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default News;
 








//working

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

//     constructor(){
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page:1
//         }
//     }

//     async componentDidMount(){ 
//         // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=64c5dc514892418fb6824b2e192cc749&page=1pageSize=20";
//          let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=64c5dc514892418fb6824b2e192cc749&pageSize=20";
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData); 
//         this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
//     }

//      handlePrevClick = async ()=>{
//         console.log("Previous");
//         // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page - 1}&pageSize=20`;
//         let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page - 1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);  
//         this.setState({
//             page: this.state.page - 1,
//             articles: parsedData.articles
//         })

//     }
    
//      handleNextClick = async ()=>{
//         console.log("Next"); 
//         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

//         }
//         else{
//             // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page + 1}&pageSize=20`;
//             let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=64c5dc514892418fb6824b2e192cc749&page=${this.state.page + 1}&pageSize=20`;
//             let data = await fetch(url);
//             let parsedData = await data.json()
//             console.log(parsedData);  
//             this.setState({
//                 page: this.state.page + 1,
//                 articles: parsedData.articles
//             })
//     }
//     }

//     render() { 
//         return (
//             <div className="container my-3">
//                 <h1>NewsMonkey - Top Headlines</h1> 
//                 <div className="row"> 
//                 {this.state.articles.map((element)=>{
//                     return <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                     </div> 
//                 })} 
//                 </div> 
//                 <div className="container d-flex justify-content-between">
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                 <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News



// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

//     constructor(){
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page:1
//         }
//     }

//     async componentDidMount(){ 
//         let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=20";
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData); 
//         this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
//     }

//      handlePrevClick = async ()=>{
//         console.log("Previous");
//         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);  
//         this.setState({
//             page: this.state.page - 1,
//             articles: parsedData.articles
//         })

//     }
    
//      handleNextClick = async ()=>{
//         console.log("Next"); 
//         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

//         }
//         else{
//             let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
//             let data = await fetch(url);
//             let parsedData = await data.json()
//             console.log(parsedData);  
//             this.setState({
//                 page: this.state.page + 1,
//                 articles: parsedData.articles
//             })
//     }
//     }

//     render() { 
//         return (
//             <div className="container my-3">
//                 <h1>NewsMonkey - Top Headlines</h1> 
//                 <div className="row"> 
//                 {this.state.articles.map((element)=>{
//                     return <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                     </div> 
//                 })} 
//                 </div> 
//                 <div className="container d-flex justify-content-between">
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                 <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News





import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af22babf885c4368896ffbd93c0962d4`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false})
    }

     handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af22babf885c4368896ffbd93c0962d4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af22babf885c4368896ffbd93c0962d4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json() 
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
    }
        }

        render() { 
            return (
                <div className="container my-3">
                    <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h1>
                    {this.state.loading && <Spinner/>}
                    <div className="row"> 
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div> 
                    })} 
                    </div> 
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            )
    }
}

export default News

// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './spinner';
// import PropTypes from 'prop-types';

// export class News extends Component {
//     static defaultProps = {
//         country: 'us',
//         pageSize: 8,
//     };

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//     };

//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0,
//         };
//     }

//     async fetchNews(page = 1) {
//         // Using your provided API URL
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=af22babf885c4368896ffbd93c0962d4&page=${page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });

//         try {
//             let data = await fetch(url);
//             let parsedData = await data.json();
//             console.log("API Response:", parsedData);

//             if (parsedData.status !== 'ok') {
//                 throw new Error(parsedData.message || 'Failed to fetch news.');
//             }

//             this.setState({
//                 articles: parsedData.articles,
//                 totalResults: parsedData.totalResults,
//                 loading: false,
//                 page: page,
//             });
//         } catch (error) {
//             console.error("Error fetching news:", error);
//             this.setState({ loading: false });
//         }
//     }

//     async componentDidMount() {
//         this.fetchNews(this.state.page);
//     }

//     handlePrevClick = async () => {
//         if (this.state.page > 1) {
//             this.fetchNews(this.state.page - 1);
//         }
//     };

//     handleNextClick = async () => {
//         if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//             this.fetchNews(this.state.page + 1);
//         }
//     };

//     render() {
//         return (
//             <div className="container my-3">
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>
//                     NewsMonkey - Top Headlines
//                 </h1>
//                 {this.state.loading && <Spinner />}
//                 <div className="row">
//                     {!this.state.loading &&
//                         this.state.articles.map((element) => {
//                             return (
//                                 <div className="col-md-4" key={element.url}>
//                                     <NewsItem
//                                         title={element.title ? element.title : ''}
//                                         description={element.description ? element.description : ''}
//                                         imageUrl={element.urlToImage}
//                                         newsUrl={element.url}
//                                     />
//                                 </div>
//                             );
//                         })}
//                 </div>
//                 <div className="container d-flex justify-content-between">
//                     <button
//                         disabled={this.state.page <= 1}
//                         type="button"
//                         className="btn btn-dark"
//                         onClick={this.handlePrevClick}
//                     >
//                         &larr; Previous
//                     </button>
//                     <button
//                         disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
//                         type="button"
//                         className="btn btn-dark"
//                         onClick={this.handleNextClick}
//                     >
//                         Next &rarr;
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default News;
