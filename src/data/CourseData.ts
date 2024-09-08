export interface CourseType {
   id: number;
   category: string;
   title: string;
   description: string;
   imageUrl: string;
   page: string; // Add page property
}

const course_data: CourseType[] = [
   {
      id: 1,
      category: "International Students",
      title: "Programming",
      description: "Study of coding languages and techniques for software development.",
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      page: "home_1",
   },
   {
      id: 2,
      category: "International Students",
      title: "Algorithms",
      description: "Analysis of procedures for solving problems and optimizing performance.",
      imageUrl: "https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.jpg?s=612x612&w=0&k=20&c=m5CzwqrVWCfTfYE7klKKth7CJ98uy0CBEiQGIKp-_X0=",
      page: "home_1",
   },
   {
      id: 3,
      category: "National Students",
      title: "English",
      description: "Detailed study of language, literature, and effective communication skills.",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?w=996&t=st=1725729878~exp=1725730478~hmac=df283de5853e426bfcf35bf9af44df467e6db2c8fbe056b38fdf7ec3b638cce4",
      page: "home_1",
   },
   {
      id: 4,
      category: "National Students",
      title: "Maths",
      description: "Comprehensive exploration of numbers, shapes, patterns, and problem-solving techniques.",
      imageUrl: "https://t4.ftcdn.net/jpg/01/04/62/51/240_F_104625113_AzmZmfzdyCVilhaxaa9Fc3KaqqT2jBcj.jpg",
      page: "home_1",
   },
   {
      id: 5,
      category: "International Students",
      title: "Database Systems",
      description: "Examination of systems for managing and retrieving data.",
      imageUrl: "https://media.istockphoto.com/id/1480239160/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=Zng3q0-BD8rEl0r6ZYZY0fbt2AWO9q_gC8lSrwCIgdk=",
      page: "home_1",
   },
   {
      id: 6,
      category: "International Students",
      title: "Computer Networks",
      description: "Study of communication systems for data exchange between devices.",
      imageUrl: "https://media.istockphoto.com/id/2086323995/photo/global-communication-east-asia.jpg?s=612x612&w=0&k=20&c=2Lo0Br8BQedMvfHPeq7F1Nayz9xlnHQCSXnJeZBIrOw=",
      page: "home_1",
   },
   {
      id: 7,
      category: "International Students",
      title: "Data Structures",
      description: "An introduction to data organization and manipulation in computing.",
      imageUrl: "https://i.ibb.co/cgDHKD9/e61b30d9330d6e959bc6ca7b4efe5e16.jpg",
      page: "home_1",
   },
   {
      id: 8,
      category: "National Students",
      title: "Physics",
      description: "In-depth analysis of matter, energy, and fundamental forces governing natural phenomena.",
      imageUrl: "https://st4.depositphotos.com/1062624/20452/i/380/depositphotos_204524744-stock-photo-globe-and-symbols-of-the.jpg",
      page: "home_2",
   },
   {
      id: 9,
      category: "National Students",
      title: "Chemistry",
      description: "Detailed examination of substances, their properties, and chemical reactions.",
      imageUrl: "https://t3.ftcdn.net/jpg/02/44/68/90/240_F_244689072_asRU04RVriiofoSDOh5sn9Tn6TitLJ5l.jpg",
      page: "home_2",
   },
   {
      id: 10,
      category: "National Students",
      title: "Biology",
      description: "Extensive study of living organisms, their interactions, and ecosystems.",
      imageUrl: "https://t3.ftcdn.net/jpg/04/30/13/70/240_F_430137076_BTK7PgzSQo9lVdSnDFyPy7HW2H6b42k6.jpg",
      page: "home_2",
   },
   {
      id: 11,
      category: "International Students",
      title: "Artificial Intelligence",
      description: "Exploration of techniques for creating intelligent systems and machine learning.",
      imageUrl: "https://media.istockphoto.com/id/1628291798/photo/artificial-intelligence-and-machine-learning-concept.jpg?s=612x612&w=0&k=20&c=7HuC-jduWch3dDGzcw5Rx4JTFJIEiHSx4bsUzBiQAJI=",
      page: "home_2",
   },
   {
      id: 12,
      category: "National Students",
      title: "Geography",
      description: "Detailed study of Earth's landscapes, environments, and the relationships between people and their surroundings.",
      imageUrl: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=600",
      page: "home_2",
   },
];

export default course_data;
