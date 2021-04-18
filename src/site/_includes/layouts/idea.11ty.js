const layout = require("./base.11ty.js");


module.exports = (data) => { 

  
  const page = `
  <div class="container">
  ${ data.description }
  </div>
  <p>${data.name}</p>
  `;


  const pageData = {
    title: data.title || "Idea resting in peace",
    content: page
  }

  return layout(pageData);
}