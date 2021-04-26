
module.exports = (data) => { 

  return `
  <div class="idea">
    <h2>${data.title}</h2>
    <div class="idea-description">${data.description}</div>
    <div class="idea-submitter">${data.user}</div>
  <div>
  `;
}