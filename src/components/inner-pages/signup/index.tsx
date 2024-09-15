import Breadcrumb from '@/components/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import SingupArea from './SingupArea'
import FooterOne from "@/layouts/footers/FooterOne"

const Singup = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <SingupArea style={false} />
         <FooterOne />
      </>
   )
}

export default Singup
