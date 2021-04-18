require('dotenv').config();
const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;

const { stripHtml } = require("string-strip-html");

exports.handler = async event => {
  
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  // unpack the form submission data
  const querystring = require("querystring");
  const {
    title,
    description,
    name = null
  } = querystring.parse(event.body);

  // generate an (almost certainly) unique path
  const { customAlphabet } = require('nanoid');
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, 12);
  const path = nanoid();

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // save our data to the DB
  const { data, error } = await supabase
    .from('ideas')
    .insert([
      {
        title: stripHtml(title).result,
        description: stripHtml(description).result, 
        user: stripHtml(name).result, 
        path: path
      },
    ]);

  console.log(data, error);
  
  return {
    statusCode: 302,
    headers: {
      Location: `/idea/${path}`,
    },
  }
}

