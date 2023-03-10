import { connect } from 'react-redux'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { DotLoader } from 'react-spinners'


function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)
    


    return (
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="  px-4  sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img
                            src={'https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png'}
                            width={160}
                            height={160}
                            className=""
                        />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
                        <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                        <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                        <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</NavLink>
                        <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                        <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>

                        <NavLink to='/contacto'
                            type="button"
                            className="inline-flex ml-12 items-center rounded-md border border-transparent bg-purple-button px-8 py-2 text-base font-medium text-white-600 shadow-sm hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Contacto
                            <DotLoader src={loading} className='w-1 h-1 mt- ml-3' size={20} />
                        </NavLink>
                        



                    </div>
                </div>
            </div>
        </nav>

    )
}

const mapStateToProps = state => ({


})
export default connect(mapStateToProps, {


})(Navbar)