require('dotenv').config();

const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


exports.handler = async event => {

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // Fetch the idea at the specified path
  const path = event.queryStringParameters.idea;
  let { data: ideas, error } = await supabase
    .from('ideas')
    .select('*')
    .eq('path', path);
  
  console.log(ideas, error);
  
;
  return {
    statusCode: 200,
    body: JSON.stringify(ideas),
  }
}