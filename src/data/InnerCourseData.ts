export interface CourseType {
   id: number;
   category: string;
   title: string;
   description: string;
   imageUrl: string; // Added imageUrl
}

const course_data: CourseType[] = [
   {
      id: 1,
      category: "International Students",
      title: "Advanced Economics",
      description: "An in-depth look into macroeconomic theories and practices.",
      imageUrl: "https://i.ibb.co/xH5dpcH/wp3134788.jpg",
   },
   {
      id: 2,
      category: "International Students",
      title: "Thermodynamics",
      description: "Study of heat, energy, and their transformations.",
      imageUrl: "https://i.ibb.co/DQSJKrx/20-extraordinary-facts-about-thermodynamics-1693642571.png",
   },
   {
      id: 3,
      category: "National Students",
      title: "Constitutional Law",
      description: "Detailed study of the constitutional framework and its practical implications.",
      imageUrl: "https://i.ibb.co/xhdvhSz/e8f89da7c31f1e2c17f2ccb0a6ed9b77.jpg",
   },
   {
      id: 4,
      category: "National Students",
      title: "Algebra I",
      description: "Fundamentals of algebra focusing on equations and inequalities.",
      imageUrl: "https://i.ibb.co/R67tm6K/c40273fd17667460f923f887c2b3d74f.jpg",
   },
   {
      id: 5,
      category: "International Students",
      title: "Quantum Physics",
      description: "Exploring the fundamentals and applications of quantum mechanics.",
      imageUrl: "https://i.ibb.co/F4NsqVT/physics-7854063-1280.jpg",
   },
   {
      id: 6,
      category: "International Students",
      title: "Calculus II",
      description: "Advanced integration techniques, series, and sequences.",
      imageUrl: "https://i.ibb.co/DL759hs/Screenshot-2024-07-07-143419.png",
   },
   {
      id: 7,
      category: "International Students",
      title: "Data Structures",
      description: "An introduction to data organization and manipulation in computing.",
      imageUrl: "https://i.ibb.co/cgDHKD9/e61b30d9330d6e959bc6ca7b4efe5e16.jpg>",
   },
   {
      id: 8,
      category: "National Students",
      title: "Mechanics",
      description: "Principles of forces, energy, and motion with practical examples.",
      imageUrl: "https://i.ibb.co/yhthV7s/6c8dacd6839be5dedb63ac1f0051e119.jpg",
   },
   {
      id: 9,
      category: "National Students",
      title: "Local Business Operations",
      description: "Understanding the nuances of operating businesses at a national level.",
      imageUrl: "https://i.ibb.co/M6TRvrm/c3a6d7c4cbccabe5e649456d7dd6dcb8-1.jpg",
   },
   {
      id: 10,
      category: "National Students",
      title: "Introduction to Programming",
      description: "Fundamentals of computer programming using Python.",
      imageUrl: "https://i.ibb.co/TmL6S4Q/90844577268.png",
   },
   {
      id: 11,
      category: "International Students",
      title: "Global Marketing Strategies",
      description: "Exploring marketing strategies in a global context.",
      imageUrl: "https://i.ibb.co/W5w1Zzn/Screenshot-2024-07-07-142222.png",
   },
   {
      id: 12,
      category: "National Students",
      title: "Geometry",
      description: "Exploring geometric figures and theorems in a two-dimensional space.",
      imageUrl: "https://i.ibb.co/tXCWtnq/c8de7ab272f71e35449b79d14572a368.jpg",
   },
];

export default course_data;