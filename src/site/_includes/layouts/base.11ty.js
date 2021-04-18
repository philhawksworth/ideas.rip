module.exports = (data) => { 

  const title = data.title || "Idea resting in peace";

  
  return `<html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <header>
        <p>
          <a href="/">Home</a> |
        </p>
        <h1>${title}</h1>
      </header>
      <div class="container">
      ${ data.description }
      </div>
      <p>${data.name}</p>
      <footer>
        
      </footer>
    </body>
    </html>`;
}