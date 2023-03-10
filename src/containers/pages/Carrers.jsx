import Logos from "components/about/Logos"
import Feature from "components/carrers/Feature"
import Header from "components/carrers/Headers"
import PositionsList from "components/carrers/PositionsList"
import StackledList from "components/carrers/StackledList"
import Testimonial from "components/carrers/Testimonial"
import Footer from "components/navegation/Footer"
import Navbar from "components/navegation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from 'react'

function Careers() {

    useEffect (() => {

        window.scrollTo(0, 0)
    },[])

    return (
        <Layout>
            <Navbar />
            <div className="pt-28">

                < Header/>
                < Testimonial/>
                < Logos/>
                <Feature/>
                < PositionsList/>
                < StackledList/>



            </div>
                <Footer />
        </Layout>



    )
}
export default Careers