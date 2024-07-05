import React from 'react'
const NewsItem = (props) => {
  let { title, description, ImageUrl, NewsUrl, author, date, Source } = props;
  return (
    <div className="my-3" data-aos="fade-left"  data-aos-duration="1000">
      <div className='card' style={{
        display: 'flex',
        position: 'absolute',
        justifyContent: 'flex-end'
      }}>
        <span className=" badge rounded-pill bg-danger">
          {Source} </span></div>
      <img src={!ImageUrl ? "https://img.freepik.com/free-photo/stack-newspapers-isolated-white-background-3d-render-illustration_1057-46268.jpg?t=st=1719209558~exp=1719213158~hmac=a69f30ce26ad32086e042865bfe61a10bb61338759d2592e6d1320cc0b096c3f&w=740" : ImageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small>By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
        <a href={NewsUrl} className="btn btn-primary">Read More</a>
      </div> </div >
  )
}
export default NewsItem