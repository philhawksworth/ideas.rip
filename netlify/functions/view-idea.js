require('dotenv').config();

const { builder } = require("@netlify/functions");
const pageTemplate = require('../../src/site/_includes/layouts/base.11ty.js');
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;



const handler = async event => {

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // Fetch the idea at the specified path
  const path = event.path.split("idea/")[1];
  let { data: ideas, error } = await supabase
    .from('ideas')
    .select('*')
    .eq('path', path);
  
  // render the data into the template
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(ideas[0]),
  }
}


exports.handler = builder(handler);