import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  const blogTitle = blogData.name
 
  return (
    <div className="App">

    <Header  title={blogTitle}/>

    <About image = {blogData.image} about={blogData.about}/>

    <ArticleList posts = {blogData.posts}/>
      
    </div>
  );
}

export default App;
