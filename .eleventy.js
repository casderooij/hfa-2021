module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addWatchTarget('./src/scss/');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
