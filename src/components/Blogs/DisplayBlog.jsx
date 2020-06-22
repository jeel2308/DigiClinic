import React, { Component } from "react";
import "./DisplayBlog.css";
import Head from "../header";
import PostBlog from "./PostBlog";

class DisplayBlog extends Component {
  state = {
    postBlog: false,
  };

  PostBlog() {
    this.setState({
      postBlog: true,
    });
  }
  render() {
    return (
      <div>
        <Head />
        <header class="masthead Hearder">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                  <h1>Dr. Ankit's Blog</h1>
                  <span class="subheading">
                    A Blog Theme by Start Bootstrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content  */}

        <button
          className="btn btn-danger"
          style={{ marginLeft: "5%" }}
          onClick={() => (window.location.href = "/PostBlog")}
        >
          Add Post
        </button>

        <div className="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="post-preview">
                <a href="post.html">
                  <h2 class="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 class="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a>
                <p class="post-meta">
                  Posted by
                  <a href="#">Start Bootstrap</a>
                  on September 24, 2019
                </p>
              </div>
              <hr />
              <div class="post-preview">
                <a href="post.html">
                  <h2 class="post-title">
                    I believe every human has a finite number of heartbeats. I
                    don't intend to waste any of mine.
                  </h2>
                </a>
                <p class="post-meta">
                  Posted by
                  <a href="#">Start Bootstrap</a>
                  on September 18, 2019
                </p>
              </div>
              <hr />
              <div class="post-preview">
                <a href="post.html">
                  <h2 class="post-title">
                    Science has not yet mastered prophecy
                  </h2>
                  <h3 class="post-subtitle">
                    We predict too much for the next year and yet far too little
                    for the next ten.
                  </h3>
                </a>
                <p class="post-meta">
                  Posted by
                  <a href="#">Start Bootstrap</a>
                  on August 24, 2019
                </p>
              </div>
              <hr />
              <div class="post-preview">
                <a href="post.html">
                  <h2 class="post-title">Failure is not an option</h2>
                  <h3 class="post-subtitle">
                    Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations.
                  </h3>
                </a>
                <p class="post-meta">
                  Posted by
                  <a href="#">Start Bootstrap</a>
                  on July 8, 2019
                </p>
              </div>
              <hr />
              {/* Pager  */}
              <div class="clearfix">
                <a class="btn btn-primary float-right" href="#">
                  Older Posts &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/*  Footer */}
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <ul class="list-inline text-center">
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <p class="copyright text-muted">
                  Copyright &copy; Your Website 2020
                </p>
              </div>
            </div>
          </div>
        </footer>
        {this.state.postBlog && (
          <PostBlog
            Back={() =>
              this.setState({
                postBlog: false,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default DisplayBlog;