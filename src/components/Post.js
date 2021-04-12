import React from "react";

const Post = ({ article }) => {
  console.log(article);
  const { header, image, description } = article.fields;
  return (
    <div className="post">
      <h3 className="title">{header}</h3>
      {image && (
        <img
          className="image"
          src={image.fields.file.url}
          alt={header}
          title={header}
        />
      )}{" "}
      <p className= "titles"> {description}
      </p>
    </div>


  );
};

export default Post;


