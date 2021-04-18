require('dotenv').config();

const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;


exports.handler = async event => {

  // connect to database
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);
  
  // Fetch the most recent 100 ideas (skipping any flagged ideas)
  let { data: ideas, error } = await supabase
    .from('ideas')
    .select('*')
    .filter('flagged', 'eq', 0)
    .order('created', { ascending: false })
    .range(0,99);
  
  // choose 3 items at random from the latest 100
  const jumble = ideas.sort(() => 0.5 - Math.random());
  const dip = jumble.slice(0, 5);

  console.log(dip, error);
  
  return {
    statusCode: 200,
    body: JSON.stringify(dip),
  }
}