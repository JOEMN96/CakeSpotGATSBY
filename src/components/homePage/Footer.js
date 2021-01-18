import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import Image from "gatsby-image";
import { FiFacebook } from "react-icons/Fi";
import { AiOutlineYoutube } from "react-icons/Ai";
import { AiOutlineGoogle } from "react-icons/Ai";
import { AiOutlineTwitter } from "react-icons/Ai";
import { AiOutlineMail } from "react-icons/Ai";
import { FiPhone } from "react-icons/Fi";
import { Link } from "gatsby";

function Footer() {
  let logo = useSelector((state) => state);
  return (
    <section className="footer">
      <Grid container>
        <Grid item xs={12} md={4} lg={4}>
          <div className="footer__logo">
            <Image fluid={logo.logo} />
          </div>
          <p>
            The Cakespot Homebake serves varieties of freshly baked cakes like
            Real fruit cakes, Fresh cream cakes, Fondant cakes, Customized
            cakes, and more...
          </p>
          <div className="socialMediaLinks">
            <div className="socialSingle">
              <Link to="/">
                <FiFacebook />
              </Link>
            </div>
            <div className="socialSingle">
              <Link to="/">
                <AiOutlineYoutube />
              </Link>
            </div>
            <div className="socialSingle">
              <Link to="/">
                <AiOutlineGoogle />
              </Link>
            </div>
            <div className="socialSingle">
              <Link to="/">
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className="socialSingle">
              <Link to="/">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="socialSingle">
              <Link to="/">
                <FiPhone />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <h2>Contact</h2>
          <div className="col1">
            <h4>Address</h4>
            <p>17-8j Chunkankadai, Nagercoil -629003</p>
          </div>
          <div className="col2">
            <h4>Hotline</h4>
            <p>
              <a href="tel:+918148187715">+918148187715</a>
            </p>
          </div>
          <div className="col3">
            <h4>Email</h4>
            <p>
              <a href="mailto:thecakepot@mail.com">thecakepot@mail.com</a>
            </p>
          </div>
        </Grid>
        <Grid className="pagesLinksfoot" item xs={12} md={4} lg={4}>
          <h2>Pages</h2>
          <Link to="/">Home</Link>
          <Link to="">About</Link>
          <Link to="/cakes">Cakes</Link>
          <Link to="/surpricePacks">Surprise Packs</Link>
        </Grid>
      </Grid>
      <p className="copyrightParent">
        © 2020 All Rights Reserved. Designed with ❤ by{" "}
        <a target="_blank" rel="noopener" href="https://twitter.com/aruljoe37">
          Joe Mn
        </a>
      </p>
    </section>
  );
}

export default Footer;
