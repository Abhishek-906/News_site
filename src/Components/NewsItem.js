//original

// import React, {Component} from 'react'


// export class NewsItem extends Component {
//     render(){
//         let {discreption, imageurl, link , author, date} = this.props

//         return(
//             <div className='my-3'>
//             <div class="card">
//          <img src={!imageurl?"https://tse2.mm.bing.net/th?id=OIP.mylHZojRhbCHbosCBamX-AHaFA&pid=Api&P=0&h=180&page=3":imageurl} class="card-img-top" alt=".." style={{ height:"250px"}}/>
//         <div class="card-body">
//            <h5 class="card-title">{this.props.title}...</h5>
//            <p class="card-text">{discreption}...</p>
//            <p class="card-text"style={{color: "red"}} ><small class="text-muted" >By {author} on {new Date(date).toGMTString()} </small></p>
//             <a href={link} rel="noreferrer" target="_blank" class="btn btn-dark">Go somewhere</a>           
//         </div>
//         </div>
//         </div>
//         )
//     }
//     }
// export default NewsItem 

     







//working


// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let {title, description, imageUrl, newsUrl} = this.props;
//         return (
//             <div className="my-3">
//                 <div className="card" >
//                     <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem