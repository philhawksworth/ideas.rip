require('dotenv').config();

const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


exports.handler = async event => {

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // Fetch the most recent ideas (skipping any flagged ideas)
  let { data: ideas, error } = await supabase
    .from('ideas')
    .select('*')
    .filter('flagged', 'eq', 0)
    .order('created', { ascending: false })
    .range(0,4);
  
  console.log(ideas, error);
  
;
  return {
    statusCode: 200,
    body: JSON.stringify(ideas),
  }
}