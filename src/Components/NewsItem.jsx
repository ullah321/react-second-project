
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card mb-4 bg-dark text-light d-inline-block px-2 py-2 mx-2 my-2" style={{maxWidth: '405px'}}>
        <img src={src} className="card-img-top" alt="..." style={{width: '380px', height: '200px'}} />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description ? description.slice(0,90) : 'Ahmad Ullah Ashraf'}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  );
}

export default NewsItem
