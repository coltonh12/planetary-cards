// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

let coltonstring = 'test'
let coltonnumber = 1234;
function alertcolton() {
  alert(coltonstring);
}

