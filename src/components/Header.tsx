
const Header = () => {
  return (
    <div className = "font-semibold border-1 rounded-lg shadow-lg border-stone-300 lg:h-130 h-230 relative">
          <h1 className='px-5 text-8xl leading-23 absolute left-0 top-25 text-stone-900 text-left'> View The 
            <span className='text-blue-600'> Weather </span> For <span className='text-blue-600'> Any </span> City
          </h1>
        <h2 className='px-5 text-5xl font-light absolute lg:left-0 lg:bottom-45 bottom-100 text-stone-900 text-left'> Instantly.</h2>
        <img src="./countryside.jpg" className ="w-120 absolute lg:right-25 lg:top-25 bottom-5 max-lg:left-1 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" alt="countryImage"></img>
    </div>
  )
}

export default Header
