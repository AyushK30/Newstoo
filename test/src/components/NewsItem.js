import React from 'react'

const NewsItem = (props) =>{
     let {title, description, imageUrl, newsUrl, author, date,source} = props;
    return (
      <div className="my-3">
            <div className="card" style={{width: "18rem;"}}>
            <span className="position-absolute top-0  start-100 translate-middle badge rounded-pill bg-danger" style={{right:'5%', zIndex:'1'}}>{source}
            </span>
                <img src={!imageUrl?"https://media.istockphoto.com/id/1440979913/photo/view-of-stacked-newspapers-on-blurred-background.jpg?b=1&s=170667a&w=0&k=20&c=6Kn30RmS2WQthvlh9sTX1BKbaXMYtMQw57_h3zJ5RzM=":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-success">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Visit Site</a>
                </div>
             </div>
      </div>
    )
  } 
export default NewsItem
