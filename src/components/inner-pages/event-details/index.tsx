import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import EventDetailsArea from "./EventDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const EventDetails = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <EventDetailsArea />
         <FooterOne />
      </>
   )
}

export default EventDetails
