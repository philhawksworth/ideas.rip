const layout = require("./base.11ty.js");
const ideaDetails = require("../idea-details.11ty.js");


module.exports = (data) => { 

  const page = ideaDetails(data);

  const pageData = {
    title: data.title || "Idea resting in peace",
    content: page,
  }

  return layout(pageData);

}

