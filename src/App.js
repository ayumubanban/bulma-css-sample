import React from 'react';

function App() {
  return (
    <div>

      <div className="container">
        <h1 className="title">Bulma</h1>
        <p className="subtitle">
          Modern CSS framework based on{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
    </a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
        <hr/>
        <a href="" className="button">
          button
        </a>
        <a href="" className="button is-info">
          button
        </a>
        <a href="" className="button is-success">
          button
        </a>
        <a href="" className="button is-warning">
          button
        </a>
        <a href="" className="button is-danger">
          button
        </a>
        <a href="" className="button is-primary">
          button
        </a>
        <a href="" className="button is-small">button</a>
        <a href="" className="button is-small">button</a>
        <a href="" className="button is-medium">button</a>
        <a href="" className="button is-large">button</a>
        <a href="" className="button is-large is-primary is-outlined">button</a>
        <a href="" className="button is-loading">button</a>
        <a href="" className="button " disabled>button</a>

        <hr/>

        <div className="columns level">
          <div className="column level-items has-text-centered">
            First column
          </div>
          <div className="column level-items has-text-centered">
            Second column
          </div>
          <div className="column level-items has-text-centered">
            Third column
          </div>
          <div className="column level-items has-text-centered">
            Fourth column
          </div>
        </div>
        <hr/>
        <div className="level">
          <div className="level-items has-text-centered">
            First column
          </div>
          <div className="level-items has-text-centered">
            Second column
          </div>
          <div className="level-items has-text-centered">
            Third column
          </div>
          <div className="level-items has-text-centered">
            Fourth column
          </div>
        </div>
      </div>

      <br/>

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </div>
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input type="text" className="input"/>
              </p>
              <p className="control">
                <button className="button">Search</button>
              </p>
            </div>
          </div>
        </div>
        <div className="level-right">
          <p className="level-item"><strong>All</strong></p>
          <p className="level-item"><a href="">Published</a></p>
          <p className="level-item"><a href="">Drafts</a></p>
          <p className="level-item"><a href="">Deleted</a></p>
          <p className="level-item"><a href="" className="button is-success">New</a></p>
        </div>
      </div>

      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </div>

      <br/>

      <div className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </div>

      <br/>

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>

      <section className="hero is-primary is-bold is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hero title
            </h1>
            <h2 className="subtitle">
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>

      <div className="box">

      </div>

      <br/>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />>
    </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
  </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
      </a>

              <a class="navbar-item">
                Documentation
      </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
        </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
          </a>
                  <a class="navbar-item">
                    Jobs
          </a>
                  <a class="navbar-item">
                    Contact
          </a>
                  <hr class="navbar-divider" />
                    <a class="navbar-item">
                      Report an issue
          </a>
        </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
          </a>
                  </div>
                </div>
              </div>
            </div>
</nav>

      <div className="md:flex bg-white rounded-lg p-6">
        <img src="" alt="" className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto" />
        <h2 className="text-lg">fff</h2>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-5">
        Button
      </button>

      <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />>
  </div>
          <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>

    </div>
  );
}

export default App;
