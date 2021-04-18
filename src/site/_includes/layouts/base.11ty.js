module.exports = (data) => { 

  return `<html>
    <head>
      <title>${data.title}</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <header>
        <p>
          <a href="/">Home</a> |
        </p>
        <h1>${data.title}</h1>
      </header>
        ${data.content}
      <footer>
        <a href="/api/latest">latest</a>
        <p>
          Page generated as part of <a href="https://app.netlify.com/sites/ideas-rip/deploys/${site.DEPLOY_ID}">deploy ${site.DEPLOY_ID}</a>
        </p>
      </footer>
    </body>
    </html>`;
}