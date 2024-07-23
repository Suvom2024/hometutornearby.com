interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Home",
      link: "/",
   },
   {
      id: 2,
      has_dropdown: true,
      title: "Courses",
      link: "/course",
   },
   // {
   //    id: 3,
   //    has_dropdown: true,
   //    title: "Pages",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/about", title: "About Us" },
   //       { link: "/event", title: "Event" },
   //       { link: "/event-details", title: "Event Details" },
   //       { link: "/team", title: "Instructor" },
   //       { link: "/team-details", title: "Instructor Details" },
   //       { link: "/pricing", title: "Pricing" },
   //       { link: "/gallery", title: "Gallery" },
   //       { link: "/signin", title: "Sign In" },
   //       { link: "/signup", title: "Sign Up" },
   //    ],
   // },
   {
      id: 3,
      has_dropdown: true,
      title: "Pricing",
      link: "/pricing",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "About us",
      link: "/about",
   },
];

export default menu_data;
