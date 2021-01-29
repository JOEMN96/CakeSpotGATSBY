import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  {
    female: file(name: { eq: "abtfemale" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    male: file(name: { eq: "abtmale" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

function About() {
  const { female, male } = useStaticQuery(query);
  console.log(female);
  return (
    <Layout>
      <section className="aboutPage">
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <div className="about_us">
              <h1>About US </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt recusandae delectus facilis consequatur perspiciatis
                eligendi voluptates dolorum culpa, id nisi, est impedit cumque
                illum?eligendi voluptates dolorum culpa, id nisi, est impedit
                cumque illum?
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, quae minus non rem eum autem facere repellat fugit
                dignissimos eaque? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus nesciunt ipsam deserunt et sit
                sint quo aliquid provident itaque unde, earum eaque corporis
                nostrum distinctio, officia, aspernatur placeat porro dolores!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="femaleSection">
              <Image fluid={female.childImageSharp.fluid} />
            </div>
          </Grid>
          <Grid className="femaleSectionText" item xs={12} md={6} lg={6}>
            <div>
              <h1>Meet Emily</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quasi blanditiis, hic commodi explicabo inventore earum
                voluptate modi asperiores distinctio?
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <div className="about_us"></div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="femaleSection">
              <Image fluid={male.childImageSharp.fluid} />
            </div>
          </Grid>
          <Grid className="femaleSectionText" item xs={12} md={6} lg={6}>
            <div>
              <h1>Meet Jack</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quasi blanditiis, hic commodi explicabo inventore earum
                voluptate modi asperiores distinctio?
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid className="ourStory" container>
          <Grid xs={12} lg={6} md={6} item>
            <h1>Our Story</h1>
          </Grid>
          <Grid xs={12} lg={6} md={6} item>
            <p>
              Website.com began in 2005. After years in the web hosting
              industry, we realized that it was near impossible for the average
              Jane or Joe to create their own website. Traditional web hosting
              services were simply too complicated, time consuming, and
              expensive to manage.
            </p>
            <p>
              We created the Website.com Site Builder with the user's
              perspective in mind. We wanted to offer a platform that would
              require no coding skills or design experience. We keep it simple,
              so users can focus on creating an amazing
            </p>

            <p>
              After seeing an increased need for ecommerce solutions, we
              developed one of the only fully-featured, free and commission-free
              online store builders, allowing business owners to launch their
              online business.
            </p>
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
}

export default About;
