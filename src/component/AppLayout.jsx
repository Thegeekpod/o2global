import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import '../App.css'

const AppLayout = () => {
    return (
        <>


	<div id="canvas">
		<div id="box_wrapper">

			<Header/>

            <Outlet/>


			
            <Footer/>

		</div>
	</div>

	





        </>
    )
}

export default AppLayout