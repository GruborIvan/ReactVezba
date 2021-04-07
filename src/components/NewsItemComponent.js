import React from "react";

const imgStyle = {
  hight: "auto",
  width: "80%",
  border: "4px solid RebeccaPurple ",
  borderRadius: "5%",
};

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
};

const NewsItemComponent = ({news}) => {

  const renderContent = () => {

    if (!news) {
      return <div> </div>;
    } else {
      return (
        <article style={articleStyle}>
          <div>
            <h1> {news.title} </h1>
            <img style={imgStyle} src={news.urlToImage} alt="Nema slike batoooo" />
            <h4>{news.description}</h4>
          </div>
        </article>
      );
    }
  };

  return renderContent();
};

export default NewsItemComponent;
