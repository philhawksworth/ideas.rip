
module.exports = (data) => { 

  return `<html>
    <head>
      <title>${data.title}</title>
      <link rel="stylesheet" href="/css/main.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    </head>
    <body>

      <header>
       <div class="container">
        <h1 class="site-title">
          Ideas.rip
        </h1>
        <p>
          We all have big ideas. It's why we register so many domains, and daydream about making that perfect thing that everyone will love.
        </p>
        <p>
          But let's be honest, not all of our ideas are winners. And even so, it can be hard to put them down and move on. Now's your chance. 
        </p>
        </div>
        <p>
          Share your idea and recover some much needed head space.
        </p>
        </div>
      </header>
      <main>
        <div class="container">
        ${data.content}
        </div>
      </main>
      <footer>

      <div class="container">
        <a href="/api/latest">latest</a>
        <a href="/api/lucky-dip">Lucky dip</a>
      </div>
      </footer>
    </body>
    </html>`;
}