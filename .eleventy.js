module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            output: "docs_11",
            layouts: "_layouts"
        }
    };
  };