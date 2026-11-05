class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="/html/project.html">Projects</a></li>
          <li><a href="#!">About Me</a></li>
          <li><a href="#!">Contact Me</a></li>
        </ul>
      </nav>
    `;
  }
}
