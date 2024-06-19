import React from 'react'

function Leftslider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href = "https://web.facebook.com/">
                        {" "}
                        <i class="ri-facebook-circle-fill text-gray-500 text-xl"></i>

                    </a>
                    <a href = "https://www.instagram.com/">
                        {" "}
                        <i class="ri-instagram-fill text-gray-500 text-xl"></i>

                    </a>
                
                    <a href = "https://www.gmail.com/">
                        {" "}
                        <i class="ri-mail-fill text-gray-500 text-xl"></i>

                    </a>
                    <a href = "https://www.linkedin.com/">
                        {" "}
                        <i class="ri-linkedin-box-fill text-gray-500 text-xl"></i>

                    </a>
                    <a href = "https://www.github.com/">
                        {" "}
                        <i class="ri-github-fill text-gray-500 text-xl"></i>
                    </a>
                    
                    
                </div>
                <div className='w-[1px] h-32 bg-gray-500 sm:hidden'>

                </div>
            </div>
        </div>
    );
}

export default Leftslider