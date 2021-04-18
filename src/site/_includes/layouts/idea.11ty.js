const layout = require("./base.11ty.js");


module.exports = (data) => { 

  const page = `
  <div class="container">
  ${ data.description }
  </div>
  <p>${data.user}</p>
  `;

  const pageData = {
    title: data.title || "Idea resting in peace",
    content: page,
  }

  return layout(pageData);

}

