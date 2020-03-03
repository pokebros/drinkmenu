module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("fonts");
    return {
        dir: {
            input: ".",
            output: "docs"
        }
    };
  };