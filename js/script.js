/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community
/*** 
 * `quotes` array 
***/
const quotes=[{quote:"When you can’t find someone to follow, you have to find a way to lead by example.",source:"Roxane Gay",citation:"Bad Feminist",year:2014,tag:"leadership"},
{quote:"She decided long ago that life was a long journey. She would be strong, and she would be weak, and both would be okay.", source:"Tahereh Mafi",citation:"Furthermore",year:2017,tag:"female empowerment"},
{quote:"It is only with the heart that one can see rightly; what is essential is invisible to the eye.", source:"Antoine de Saint-Exupéry",citation:"The Little Prince",year:2000,tag:"classics"},
{quote:"We all require devotion to something more than ourselves for our lives to be endurable.", source:"Atul Gawande",citation:"Being Mortal",year:2017,tag:"motivational"},
{quote:"There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.", source:"Sarah Dessen",citation:"The Truth About Forever",year:2006,tag:"love"}
]


/**
 * Chooses a random quote from the array by generating a random array index
 * @returns randomly, one of the quotes stored in the quotes array
 */
function getRandomQuote(){
  return quotes[Math.floor(Math.random()*quotes.length)];
}


/**
 * Prints the quote to the page by generating the HTML structure and making it the content of the quote-box element
 */
function printQuote(){
  let chosenquote=getRandomQuote();
  let finalquote="";
  if(chosenquote.tag){
    finalquote=`<div class="tag">${chosenquote.tag}</div>`;
  }

  finalquote+=`<p class="quote">${chosenquote.quote}</p>
  <p class="source">${chosenquote.source}`;
  if(chosenquote.citation){
    finalquote += `<span class="citation">${chosenquote.citation}</span>`;
  }
  if(chosenquote.year){
    finalquote += `<span class="year">${chosenquote.year}</span>`;
  }
  finalquote += `</p>`;

  document.getElementById('quote-box').innerHTML = finalquote;

}


/**
 * Generate a random pastel color (thus why we start from values at least 127)
 * @returns a string representing an RGB color (comma-separated)
 */
function getRandomColor(){
  let color=[];
  for(let i=0; i<3; i++){
    color.push(Math.floor((Math.random() * 127) + 127));
  }
  return color.join(",");
}

/**
 * Change the color of the body element to a random, pastel one
 */
function printRandomColor(){
  let rgbvals=getRandomColor();
  document.body.style.backgroundColor = `rgb(${rgbvals})`;
}

/**
 * Execute the functions to change the quote and background color every 4 seconds
 */
setInterval(printQuote, 4000);
setInterval(printRandomColor, 4000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", printRandomColor, false);
