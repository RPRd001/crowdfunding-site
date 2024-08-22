import logo from "./assets/images/logo.svg"

const App = () => {

  const linkClasses = "hover:underline hover:cursor-pointer"

  return (
    <>
      <header className="pt-11 flex flex-row justify-around bg-image-hero-desktop max-h-[400px] h-[400px] bg-no-repeat bg-center bg-cover">
        <img src={logo} alt="crowdfund" className="w-34 h-6"/>

        <nav>
          <ul className="flex flex-row gap-6 text-white">
            <li><a className={linkClasses} href="#discover">Discover</a></li>
            <li><a className={linkClasses} href="#getStarted">Get Started</a></li>
            <li><a className={linkClasses} href="#about">About</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App