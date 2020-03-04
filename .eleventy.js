module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            layouts: "_layouts"
        }
    };
  };