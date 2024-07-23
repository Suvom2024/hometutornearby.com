import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "About Us - Home Town Tutor",
};
const page = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default page