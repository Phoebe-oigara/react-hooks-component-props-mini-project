import Article from "./Article"

function ArticleList({posts}) {
      
    return (
       <main>
        {posts.map((post) => {
            return (
                <Article
                title={post.title}
                date={post.date}
                preview={post.preview}
                />
            )
        })}

       
       </main>

      
    )
}



export default ArticleList