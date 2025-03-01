import React from 'react'
import "./Header.css"
const SearchBox = () => {
  return (
    <span id='searchBox' className='w-[100%] flex '>
               <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7727 26.7275C15.5723 26.7269 18.2913 25.7456 20.4966 23.9397L27.4303 31.1999L29.6605 28.8646L22.7268 21.6045C24.4524 19.2951 25.3902 16.4475 25.3908 13.5153C25.3908 6.23043 19.73 0.303101 12.7727 0.303101C5.81536 0.303101 0.154541 6.23043 0.154541 13.5153C0.154541 20.8002 5.81536 26.7275 12.7727 26.7275ZM12.7727 3.60615C17.9919 3.60615 22.2363 8.05041 22.2363 13.5153C22.2363 18.9802 17.9919 23.4245 12.7727 23.4245C7.55351 23.4245 3.30908 18.9802 3.30908 13.5153C3.30908 8.05041 7.55351 3.60615 12.7727 3.60615Z" fill="#7C7C7C"/>
</svg>

                <input type='text' placeholder='Search' className='w-[80%] outline-none' autoFocus/>
            </span>
  )
}

export default SearchBox