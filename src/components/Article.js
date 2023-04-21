function Article ({title, date ="January 1, 1970" ,minutes, preview}) {
   
    let readTime = "";
  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    readTime = "☕️".repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    readTime = "🍱".repeat(bentoBoxes);
  }
    
    return( <article key="id">
         <h3>{title}</h3>
         <small>{date}: {minutes}, {readTime}minutes read</small>
         <p>{preview}</p>

     </article>)
 }

 export default Article