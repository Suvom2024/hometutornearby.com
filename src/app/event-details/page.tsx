import EventDetails from "@/components/inner-pages/event-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Event Details Edumint - A Tutor Webiste",
};
const page = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default page