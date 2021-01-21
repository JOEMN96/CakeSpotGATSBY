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

  const resP = await graphql(`
    query name {
      allStrapiCakes {
        nodes {
          slug: name
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
    });
  });

  resP.data.allStrapiCakes.nodes.forEach((item) => {
    createPage({
      path: `/allCakes/${item.slug}`,
      component: path.resolve(`src/components/cakesPage/CakePageTemplate.js`),
      context: {
        slug: item.slug,
      },
    });
  });
};
