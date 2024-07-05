import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './footer'; 

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedata = await data.json();

      setLoading(false);
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

    setLoading(true);
    try {
      let data = await fetch(url);
      let parsedata = await data.json();

      setLoading(false);
      setArticles(prevArticles => [...prevArticles, ...parsedata.articles]);
      setTotalResults(parsedata.totalResults);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        Read News of {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4><Spinner /></h4>}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  ImageUrl={element.urlToImage}
                  NewsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  Source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      <Footer showFooter={articles.length > 0 && !loading} /> {/* Show footer only if articles are present and not loading */}
    </>
  );
};

// News.defaultProps = {
//   country: 'in',
//   pageSize: 10,
//   category: 'general',
// };

//News.propTypes = {
//   country: propTypes.string,
//   pageSize: propTypes.number,
//   category: propTypes.string,
// };

export default News;
