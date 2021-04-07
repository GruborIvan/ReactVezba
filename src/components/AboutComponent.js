import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import LoadingComponent from "./LoadingComponent";
import NewsItemComponent from "./NewsItemComponent";
import { useSelector } from "react-redux";

const AboutComponent = () => {
  const news = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(0);

  const onNextPageClick = () => {
    if (currentPage === 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPreviousPageClick = () => {
    if (currentPage === 0) {
      setCurrentPage(9);
    }
    else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ButtonComponent onNextClick={onNextPageClick} onPreviousClick={onPreviousPageClick} />
      <br />
      <LoadingComponent />
      <NewsItemComponent news={news[currentPage]} />
    </div>
  );
};

export default AboutComponent;
