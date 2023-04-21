import Article from "./Article"

function ArticleList({posts}) {
      
    return (
       <main>
        {posts.map((post) => {
            return (
                <Article
                title={post.title}
                date={post.date}
                minutes={post.minutes}
                preview={post.preview}
                />
            )
        })}

       
       </main>

      
    )
}



export default ArticleList