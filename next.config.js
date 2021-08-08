module.exports = {
  reactStrictMode: true,
  webpack: (cfg, options) => {
    // console.log('[options.defaultLoaders]', options.defaultLoaders)
    // cfg.module.rules.push({
    //   test: /\.md$/,
    //   use: [
    //     options.defaultLoaders.babel,{
    //     loader:"frontmatter-markdown-loader",
    //     options: { mode: ["react-component"] }
    //   }],
    //   // options: { mode: ["react-component"] }
    // });
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
