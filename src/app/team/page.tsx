import Team from "@/components/inner-pages/teams/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Team Edumint - A Tutor Webiste",
};
const page = () => {
   return (
      <Wrapper>
         <Team />
      </Wrapper>
   )
}

export default page