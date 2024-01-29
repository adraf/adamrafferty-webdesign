import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function About() {
  return (
    // display-flex - row
    <section className='about-page'>
      <section className='img-section'>
        <div className='profile-img-container'></div>
        <h3>Web Developer</h3>
      </section>
      {/* display flex column */}
      <section className='about-info-container'>
        <h2>About</h2>
        <article>
          <p>My background is in sales and customer service, in tech and tech education, and I have always found ways to make processes easier and more productive for the teams I&apos;ve been involved with.</p>
          <p>My journey into coding began when I established a website for my T-shirt and greetings card designs. While initially self-taught, I decided to deepen my coding expertise, leading me to enrol in courses with General Assembly. I really enjoy the blend of problem-solving, logical thinking, and creativity it entails. There&apos;s something special about having skills that can help shape the future of tech.</p>
          <p>I&apos;m eager to bring my coding skills to a collaborative team environment where I can both contribute my expertise and learn from others. I thrive on being part of business growth, and I look forward to tackling challenges that make you want to do a little dance around the room.</p>
        </article>
        {/* display flex row */}
        <div className='social-links-container'>
          {/* GitHub */}
          <a className='social-icons' href='https://github.com/adraf' target="_blank" rel="noopener noreferrer">
            <svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' fill='currentColor' className='social-img bi bi-github' viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'/>
            </svg>
          </a>
          {/* Linkedin */}
          <a className='social-icons' href='https://www.linkedin.com/in/adamrafferty/' target="_blank" rel="noopener noreferrer">
            <svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' fill='currentColor' className='social-img bi bi-linkedin' viewBox='0 0 16 16'>
              <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'/>
            </svg>
          </a>
          {/* Email */}
          <a className='social-icons' href='mailto:contact@adamraffertywebdesign.com?subject=Website%20Request%20From%20adamraffertywebdesign.com' target="_blank" rel="noopener noreferrer">
            <svg xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' fill='currentColor' className='social-img bi bi-envelope' viewBox='0 0 16 16'>
              <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z'/>
            </svg>
          </a>
        </div>
        {/* flex wrap */}
        <div className='skills-badge-container'>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="m3 2l1.6 17.8L12 22l7.5-2.2L21 2zm14 6H9l.2 2H17l-.6 6.6l-4.2 1.4l-4.3-1.4l-.3-3h2l.2 1.4l2.4.8l2.3-.7l.3-3H7.4L7 6h10.4z" />
            </svg>
            &nbsp;<span className='skill-badge-span'>HTML</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="m3 2l1.6 17.8L12 22l7.5-2.2L21 2zm13.3 14.7L12 18l-4.3-1.2l-.3-3.1h2.1l.2 1.5l2.3.6l2.3-.6l.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z" />
            </svg>
            &nbsp;<span className='skill-badge-span'>CSS</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179z" />
            </svg>
            &nbsp;<span className='skill-badge-span'>JavaScript</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
            </svg>
            &nbsp;<span className='skill-badge-span'>React</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22c-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38M12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48" />
            </svg>
            &nbsp;<span className='skill-badge-span'>MongoDB</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957a6.272 6.272 0 0 1-7.306-.933a6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
            &nbsp;<span className='skill-badge-span'>Express</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 23.956c-.342 0-.66-.089-.957-.243l-3.029-1.738c-.455-.242-.227-.33-.09-.374c.614-.198.728-.242 1.366-.595c.068-.044.16-.022.228.022l2.323 1.343c.09.044.205.044.273 0l9.087-5.084c.09-.044.136-.132.136-.242V6.899c0-.11-.045-.198-.136-.242l-9.087-5.061c-.091-.044-.205-.044-.273 0L2.754 6.657c-.091.044-.137.154-.137.242v10.146c0 .088.046.198.137.242l2.482 1.387c1.344.66 2.186-.11 2.186-.88V7.78c0-.132.114-.264.274-.264h1.161c.137 0 .273.11.273.264v10.013c0 1.739-.979 2.751-2.687 2.751c-.524 0-.934 0-2.095-.55l-2.391-1.32A1.847 1.847 0 0 1 1 17.067V6.921c0-.66.364-1.276.957-1.606L11.044.23a2.095 2.095 0 0 1 1.912 0l9.088 5.084c.592.33.956.946.956 1.606v10.146c0 .66-.364 1.276-.956 1.607l-9.087 5.083a2.4 2.4 0 0 1-.957.198m2.801-6.977c-3.985 0-4.805-1.76-4.805-3.257c0-.132.114-.264.273-.264h1.184c.137 0 .25.088.25.22c.183 1.166.707 1.738 3.121 1.738c1.913 0 2.733-.418 2.733-1.408c0-.572-.228-.99-3.211-1.276c-2.483-.243-4.031-.77-4.031-2.685c0-1.783 1.548-2.84 4.145-2.84c2.915 0 4.35.969 4.532 3.082a.347.347 0 0 1-.069.198c-.045.044-.113.088-.182.088h-1.184a.265.265 0 0 1-.25-.198c-.274-1.21-.98-1.607-2.847-1.607c-2.096 0-2.346.704-2.346 1.233c0 .638.296.836 3.12 1.188c2.801.352 4.122.858 4.122 2.75c-.023 1.938-1.662 3.038-4.555 3.038" />
            </svg>
            &nbsp;<span className='skill-badge-span'>Node.js</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
              <path fill="currentColor" d="M127.452 34.272c-169.936 97.97-169.936 345.463 0 443.432C297.39 575.673 512 451.956 512 255.988C512 109.013 391.281 2.678 257.166.002c-44.779-.18-88.557 10.544-129.714 34.27m267.827 107.49c28.84 106.822-12.553 207.36-109.503 229.069c75.788-57.075 61.787-161.174 22.898-209.064c-52.618-65.755-135.38-45.601-180.33 2.461c-67.501 78.114-50.141 213.822 10.902 289.25c-149.083-90.652-151.481-307.363.856-395.186c97.904-59.405 212.154-37.902 255.177 83.47m19.423 150.344c31.355-79.34 10.607-179.454-46.635-237.62c68.994 38.409 117.659 111.381 118.606 201.502c1.589 151.218-191.4 297.129-303.397 190.716C71.17 340.187 100.496 158.268 225.804 142.2c-92.96 78.878-51.162 218.174 29.027 243.668c72.458 23.037 137.556-37.298 159.871-93.763M254.543 150.882c82.91 40.65 77.58 173.012-2.21 209.868c-82.206-56.1-63.282-170.22 2.21-209.868" />
            </svg>
            &nbsp;<span className='skill-badge-span'>JSON</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
              <path fill="currentColor" d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
            </svg>
            &nbsp;<span className='skill-badge-span'>Git</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
            &nbsp;<span className='skill-badge-span'>GitHub</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91" />
            </svg>
            &nbsp;<span className='skill-badge-span'>Bootstrap</span></Badge>
          <Badge className='skills-badge'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-2 13.33c.16.54.14 1.04 0 1.5c0 .05-.04.1-.06.17c-.02 0-.04.07-.07.12c-.11.24-.27.47-.46.67c-.58.64-1.41.88-1.74.68c-.38-.22-.17-1.12.49-1.83c.72-.76 1.76-1.26 1.76-1.26zm8.27-9.05c-.45-1.78-3.4-2.36-6.18-1.37c-1.66.59-3.46 1.51-4.75 2.72c-1.53 1.44-1.78 2.69-1.68 3.21c.34 1.84 2.88 3.05 3.92 3.94v.01c-.3.15-2.54 1.28-3.08 2.44c-.54 1.22.1 2.1.5 2.22c1.34.36 2.69-.29 3.41-1.38c.7-1.04.65-2.39.34-3.07c.42-.1.91-.15 1.53-.08c1.76.21 2.1 1.3 2.03 1.76c-.06.46-.43.71-.55.79c-.12.07-.16.1-.15.16c.01.08.07.08.17.06c.15-.03.93-.37.96-1.22c.04-1.08-.99-2.28-2.81-2.25c-.75.02-1.22.09-1.56.22l-.08-.09c-1.13-1.2-3.21-2.05-3.12-3.67c.03-.59.23-2.13 4-4.01c3.08-1.54 5.55-1.12 5.98-.17c.61 1.33-1.32 3.82-4.52 4.18c-1.22.14-1.87-.34-2.03-.51c-.17-.17-.19-.2-.25-.17c-.11.07-.04.23 0 .33c.09.25.49.67 1.15.91c.59.19 2.03.3 3.76-.37c1.94-.75 3.46-2.84 3.01-4.59" />
            </svg>
            &nbsp;<span className='skill-badge-span'>Sass</span></Badge>
        </div>
        <div className='interests-div'>
          <Tab.Container>
            <Row  id="interests-tab-container">
              <Row>
                <Nav>
                  <Nav.Item>
                    <Nav.Link eventKey="dog">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73c-1.13.49-2.67-.39-3.46-1.96C1.62 9.75 1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72c-.79 1.57-2.33 2.45-3.46 1.96c-1.13-.49-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88c-1.99 0-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="film">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="plane">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0z" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="lego">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h18V6Z" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="drawing">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5L13.5 4.793L14.793 3.5L12.5 1.207zm1.586 3L10.5 3.207L4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175l-.106.106l-1.528 3.821l3.821-1.528l.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="music">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 4.1c-.9-.8-2-1.3-3.2-1.6c-.3-.1-2.2-.5-3.6-.5h-.4c-1.4 0-3.4.4-3.7.5c-1.1.3-2.2.8-3.1 1.6C3 5.9 3 8.7 4 11c1 2.5 2.1 4.7 3.6 6.9C8.8 19.6 10.1 22 12 22c1.9 0 3.2-2.4 4.5-4.1c1.5-2.1 2.6-4.4 3.6-6.9c.9-2.3.9-5.1-1.1-6.9" />
                      </svg>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="dog">Enjoy visiting new places in and around Devon to walk our rescue chihuahua/miniature pinscher cross, Lucky.</Tab.Pane>
                  <Tab.Pane eventKey="film"><span className='interest-tab-title'>Film/TV nerd</span><br></br>I would happily rewatch Wayne&apos;s World, Back to the Future, the Mission Impossible&apos;s and Spaced on repeat. Big Simpsons fan.</Tab.Pane>
                  <Tab.Pane eventKey="plane">Exploring whenever possible!<br></br>With family in the US to visit, we also make a point to discover different parts of Europe.<br></br>Our honeymoon in Hawaii has been an incredible highlight.</Tab.Pane>
                  <Tab.Pane eventKey="lego"><span className='interest-tab-title'>Lego builder</span><br></br>I have The Office set waiting to be built when I finish this portfolio.</Tab.Pane>
                  <Tab.Pane eventKey="drawing"><span className='interest-tab-title'>Avid doodler</span><br></br>Love design, cartoons and doodles.</Tab.Pane>
                  <Tab.Pane eventKey="music"><span className='interest-tab-title'>Pop punk fan</span><br></br>I most recently saw Blink-182 on their reunion tour at the O2.</Tab.Pane>
                </Tab.Content>
              </Row>
            </Row>
          </Tab.Container>
        </div>
      </section>
    </section>
  )
}