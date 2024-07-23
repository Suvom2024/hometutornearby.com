"use client";
import React, { useState, CSSProperties } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import UseProducts from "@/hooks/UseProducts";
import { useSelector } from "react-redux";
import { selectProducts } from "@/redux/features/productSlice";
import course_data, { CourseType } from "@/data/CourseData";

const CourseArea = () => {
   const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
   const [selectedCategory, setSelectedCategory] = useState('All Category');
   const [priceSelected, setPriceSelected] = useState('All Price');
   const [levelSelected, setLevelSelected] = useState('All Level');
   const [tagSelected, setTagSelected] = useState<string | undefined>();
   const [searchTerm, setSearchTerm] = useState('');

   const { products, setProducts } = UseProducts();
   const allProducts = useSelector(selectProducts);

   const productCategory = useSelector(selectProducts).map(product => product.category);
   const priceCategory = useSelector(selectProducts).map(product => product.course_filter);
   const levelCategory = useSelector(selectProducts).map(product => product.level);
   const tags = useSelector(selectProducts).map(product => product.tag);

   const allCategory = ['All Category', ...new Set(productCategory)];
   const allPrice = ['All Price', ...new Set(priceCategory)];
   const allLevel = ['All Level', ...new Set(levelCategory)];
   const allTags = [...new Set(tags)];

   const handleCategory = (category: string) => {
      setSelectedCategory(category);
      if (category === 'All Category') {
         setProducts(allProducts);
      } else {
         const filteredCourses = course_data.filter(course => course.category === category);
         setProducts(filteredCourses);
      }
   };

   const handlePrice = (price: string) => {
      setPriceSelected(price);
      if (price === 'All Price') {
         setProducts(allProducts);
      } else {
         const filteredCourses = allProducts.filter(course => course.course_filter === price);
         setProducts(filteredCourses);
      }
   };

   const handleLevel = (level: string) => {
      setLevelSelected(level);
      if (level === 'All Level') {
         setProducts(allProducts);
      } else {
         const filteredCourses = allProducts.filter(course => course.level === level);
         setProducts(filteredCourses);
      }
   };

   const handleTag = (tag: string) => {
      setTagSelected(tag);
      const filteredCourses = allProducts.filter(course => course.tag === tag);
      setProducts(filteredCourses);
   };

   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      const filteredCourses = allProducts.filter(course =>
         course.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProducts(filteredCourses);
   };

   const courseBoxStyle: CSSProperties = {
      overflow: 'hidden',
      position: 'relative',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      marginBottom: '20px', // Adjusted for spacing between courses
      width: '100%', // Make sure each course box takes full width
   };

   const courseBoxHoverStyle: CSSProperties = {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
   };

   const imageStyle: CSSProperties = {
      width: '100%',
      height: 'auto',
      transition: 'transform 0.3s ease-in-out',
   };

   const imageHoverStyle: CSSProperties = {
      transform: 'scale(1.1)',
   };

   const crissCrossBoxStyle: CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
      padding: '20px',
      boxSizing: 'border-box',
   };

   const crissCrossBoxHoverStyle: CSSProperties = {
      opacity: 1,
   };

   // Pagination variables
   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const filteredProducts = products.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(products.length / itemsPerPage);

   const handlePageClick = (event: any) => {
      const newOffset = event.selected * itemsPerPage;
      setItemOffset(newOffset);
   };

   return (
      <div className="course-area pd-top-80 pd-bottom-80" style={{ marginLeft: '1cm', marginRight: '1cm' }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-12">
                  <div className="td-sidebar mt-5 mt-lg-0">
                     <div className="widget widget_search">
                        <h4 className="widget-title">Search</h4>
                        <form>
                           <input
                              type="text"
                              placeholder="Search courses..."
                              value={searchTerm}
                              onChange={handleSearch}
                              className="form-control"
                           />
                        </form>
                     </div>
                     <div className="widget widget_catagory">
                        <h4 className="widget-title">Category</h4>
                        <ul className="catagory-items">
                           {allCategory.map((category, index) => (
                              <li key={index} className={selectedCategory === category ? 'active' : ''}>
                                 <a
                                    onClick={() => handleCategory(category)}
                                    style={{
                                       cursor: 'pointer',
                                       textDecoration: 'none',
                                       color: selectedCategory === category ? '#333333' : '#333333',
                                       backgroundColor: 'transparent',
                                       padding: '1px 12px',
                                       borderRadius: '4px',
                                       display: 'block',
                                       marginBottom: '4px',
                                       textAlign: 'center',
                                    }}
                                 >
                                    {category}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-9 col-md-12">
                  <div className="tab-content" id="myTabContent">
                     <div className={`tab-pane fade show active`}>
                        <div className="row">
                           {filteredProducts.map(course => (
                              <div key={course.id} className="col-lg-5 col-md-6">
                                 <div
                                    className="single-course-inner animated-card"
                                    style={hoveredCourse === course.id ? { ...courseBoxStyle, ...courseBoxHoverStyle } : courseBoxStyle}
                                    onMouseEnter={() => setHoveredCourse(course.id)}
                                    onMouseLeave={() => setHoveredCourse(null)}
                                 >
                                    <div className="image" >
                                       <img
                                          src={course.imageUrl}
                                          alt={course.title}
                                          style={hoveredCourse === course.id ? { ...imageStyle, ...imageHoverStyle } : imageStyle}
                                       />
                                       <div
                                          className="criss-cross-box"
                                          style={hoveredCourse === course.id ? { ...crissCrossBoxStyle, ...crissCrossBoxHoverStyle } : crissCrossBoxStyle}
                                       >
                                          {course.title}
                                       </div>
                                    </div>
                                    <div className="details">
                                       <div className="details-inner">
                                          <h6>{course.title}</h6>
                                          <p>{course.description}</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Pagination */}
            <div className="pagination-area">
               <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center"}
                  activeClassName={"active"}
                  previousClassName={"page-item"}
                  nextClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextLinkClassName={"page-link"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  disabledClassName={"disabled"}
               />
            </div>
            {/* End Pagination */}
         </div>
      </div>
   );
}
export default CourseArea;
