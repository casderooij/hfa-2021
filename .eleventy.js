module.exports = (eleventyConfig) => {
  eleventyConfig;

  return {
    templateFormats: ['md', 'njk', 'html'],
    dir: {
      input: 'src',
    },
  };
};
