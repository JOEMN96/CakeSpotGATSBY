// create Pages programatically

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const res = await graphql(`
    query MyQuery {
      allStrapiBlogs {
        nodes {
          slug: heading
        }
      }
    }
  `);

  res.data.allStrapiBlogs.nodes.forEach((val) => {
    createPage({
      path: `/Blogs/${val.slug}`,
      component: path.resolve(`src/components/homePage/BlogSingleTemplate.js`),
      context: {
        slug: val.slug,
      },
    })
  });
};
