// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};


function addHoverEffect(element) {
  element.style.backgroundColor = "lightblue"; // Change background color on hover
  element.style.color = "white"; // Change text color on hover
}

function removeHoverEffect(element) {
  element.style.backgroundColor = ""; // Revert background color when not hovered
  element.style.color = ""; // Revert text color when not hovered
}


