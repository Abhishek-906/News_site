import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import mockData from '../mockData.json'; // Import the mock JSON data

const News = ({ country, pageSize, category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchMockData = (page) => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedArticles = mockData.articles.slice(startIndex, endIndex);

        setArticles(paginatedArticles);
        setTotalResults(mockData.articles.length);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchMockData(page);
    }, [page]);

    const handlePrevClick = () => {
        setPage(page - 1);
        setLoading(true);
    };

    const handleNextClick = () => {
        setPage(page + 1);
        setLoading(true);
    };

    return (
        <div className="container my-3">
            {/* Notification Banner */}
            <div
                className="alert alert-info text-center"
                style={{
                    fontSize: '16px',
                    margin: '10px 0',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                <strong>Note:</strong> 
                Real-time data is displayed on the development site using an API. For the production site, dummy data is used.
            </div>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>
                News - Top Headlines
            </h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading &&
                    articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title || ''}
                                description={element.description || ''}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
            </div>
            <div className="container d-flex justify-content-between">
                <button
                    disabled={page <= 1}
                    type="button"
                    className="btn btn-dark"
                    onClick={handlePrevClick}
                >
                    &larr; Previous
                </button>
                <button
                    disabled={page + 1 > Math.ceil(totalResults / pageSize)}
                    type="button"
                    className="btn btn-dark"
                    onClick={handleNextClick}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

export default News;

















// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './spinner';
// import PropTypes from 'prop-types';
// import mockData from '../mockData.json'; // Import the mock JSON data

// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general',
//     };

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     };

//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//         };
//     }

//     fetchMockData(page) {
//         const startIndex = (page - 1) * this.props.pageSize;
//         const endIndex = startIndex + this.props.pageSize;
//         const paginatedArticles = mockData.articles.slice(startIndex, endIndex);

//         this.setState({
//             articles: paginatedArticles,
//             totalResults: mockData.articles.length,
//             loading: false,
//         });
//     }

//     componentDidMount() {
//         this.setState({ loading: true }, () => {
//             this.fetchMockData(this.state.page);
//         });
//     }

//     handlePrevClick = () => {
//         const newPage = this.state.page - 1;
//         this.setState({ page: newPage, loading: true }, () => {
//             this.fetchMockData(newPage);
//         });
//     };

//     handleNextClick = () => {
//         const newPage = this.state.page + 1;
//         this.setState({ page: newPage, loading: true }, () => {
//             this.fetchMockData(newPage);
//         });
//     };

//     render() {
//         return (
//             <div className="container my-3">
//                 {/* Notification Banner */}
//                 <div
//                     className="alert alert-info text-center"
//                     style={{
//                         fontSize: '16px',
//                         margin: '10px 0',
//                         padding: '10px',
//                         borderRadius: '5px',
//                     }}
//                 >
//                    <strong>Note:</strong> 
//                    Real-time data is displayed on the development site using an API. For the production site, dummy data is used.
//                 </div>
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>
//                     News - Top Headlines
//                 </h1>
//                 {this.state.loading && <Spinner />}
//                 <div className="row">
//                     {!this.state.loading &&
//                         this.state.articles.map((element) => (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItem
//                                     title={element.title || ''}
//                                     description={element.description || ''}
//                                     imageUrl={element.urlToImage}
//                                     newsUrl={element.url}
//                                 />
//                             </div>
//                         ))}
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
//                         disabled={
//                             this.state.page + 1 >
//                             Math.ceil(this.state.totalResults / this.props.pageSize)
//                         }
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





// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './spinner';
// import PropTypes from 'prop-types';

// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general',
//     };

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     };

//     constructor() {
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//         };
//     }

//     async fetchNews(page) {
//         const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Use the API key from .env file
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${page}&pageSize=${this.props.pageSize}`;

//         try {
//             this.setState({ loading: true });
//             const response = await fetch(url);

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const parsedData = await response.json();
//             this.setState({
//                 articles: parsedData.articles || [],
//                 totalResults: parsedData.totalResults || 0,
//                 loading: false,
//             });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             this.setState({ loading: false });
//         }
//     }

//     async componentDidMount() {
//         await this.fetchNews(this.state.page);
//     }

//     handlePrevClick = async () => {
//         const newPage = this.state.page - 1;
//         await this.fetchNews(newPage);
//         this.setState({ page: newPage });
//     };

//     handleNextClick = async () => {
//         const newPage = this.state.page + 1;
//         await this.fetchNews(newPage);
//         this.setState({ page: newPage });
//     };

//     render() {
//         return (
//             <div className="container my-3">
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>
//                     News - Top Headlines
//                 </h1>
//                 {this.state.loading && <Spinner />}
//                 <div className="row">
//                     {!this.state.loading &&
//                         this.state.articles.map((element) => (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItem
//                                     title={element.title ? element.title : ''}
//                                     description={
//                                         element.description ? element.description : ''
//                                     }
//                                     imageUrl={element.urlToImage}
//                                     newsUrl={element.url}
//                                 />
//                             </div>
//                         ))}
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
//                         disabled={
//                             this.state.page + 1 >
//                             Math.ceil(this.state.totalResults / this.props.pageSize)
//                         }
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
