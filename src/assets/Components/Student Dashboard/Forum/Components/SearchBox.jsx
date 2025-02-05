import React from 'react'

const SearchBox = () => {
  return (
    <span id='searchBox' className='w-[100%] flex '>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9616 1.26001C12.7295 1.26001 14.425 1.95606 15.6751 3.19504C16.9253 4.43402 17.6276 6.11443 17.6276 7.86661C17.6276 15.2124 20.3313 16.66 21.0616 16.66H0.861572C1.60742 16.66 4.29557 15.197 4.29557 7.86661C4.29557 6.11443 4.99788 4.43402 6.248 3.19504C7.49812 1.95606 9.19364 1.26001 10.9616 1.26001V1.26001Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.63074 19.4781C8.76505 19.9895 9.06675 20.4422 9.48854 20.7653C9.91034 21.0885 10.4284 21.2638 10.9615 21.2638C11.4946 21.2638 12.0127 21.0885 12.4345 20.7653C12.8563 20.4422 13.158 19.9895 13.2923 19.4781" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='w-[80%]'>Search</p>
            </span>
  )
}

export default SearchBox