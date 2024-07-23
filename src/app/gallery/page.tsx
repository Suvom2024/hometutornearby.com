import Gallery from "@/components/inner-pages/gallery";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Gallery Edumint - A Tutor Webiste",
};
const page = () => {
   return (
      <Wrapper>
         <Gallery />
      </Wrapper>
   )
}

export default page