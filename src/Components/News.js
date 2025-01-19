import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            apiUsed: '', // This will store the message for production
        };
    }

    async fetchNews(page) {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Use the API key from .env file
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${page}&pageSize=${this.props.pageSize}`;

        try {
            this.setState({ loading: true });

            // Try fetching data from API
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const parsedData = await response.json();

            // If the API fetch fails or returns no data, load mock data from mockData.json
            if (parsedData.articles && parsedData.articles.length > 0) {
                this.setState({
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false,
                    apiUsed: 'API Data Loaded',
                });
            } else {
                // If no API data, load mock data and set message for production
                this.loadMockData();
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            this.loadMockData(); // Load mock data if the API request fails
        }
    }

    // Load mock data
    async loadMockData() {
        const mockData = await fetch('/mockData.json').then((res) => res.json());
        this.setState({
            articles: mockData.articles || [],
            totalResults: mockData.articles.length || 0,
            loading: false,
            apiUsed: 'Using Dummy Data for Production (API key limit reached)',
        });
    }

    async componentDidMount() {
        await this.fetchNews(this.state.page);
    }

    handlePrevClick = async () => {
        const newPage = this.state.page - 1;
        await this.fetchNews(newPage);
        this.setState({ page: newPage });
    };

    handleNextClick = async () => {
        const newPage = this.state.page + 1;
        await this.fetchNews(newPage);
        this.setState({ page: newPage });
    };

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px' }}>
                    News - Top Headlines
                </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : ''}
                                    description={element.description ? element.description : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        ))}
                </div>
                {this.state.apiUsed && (
                    <div className="alert alert-info">
                        <strong>{this.state.apiUsed}</strong>
                    </div>
                )}
                <div className="container d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Previous
                    </button>
                    <button
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;




















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
