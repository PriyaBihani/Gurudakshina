import React from "react";
import "./css/homeContent.css";
const HomeContent = props => {
  console.log(props);
  const { data } = props;
  return (
    <div className="container-xl">
      {data &&
        data.map(item => {
          return (
            <div key={item.id}>
              <h3 style={{ color: "#D81159" }} className="header">
                {item.header}
              </h3>
              <p className="content" style={{ color: "#345995" }}>
                {item.context}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default HomeContent;
