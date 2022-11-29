// import React from "react"
// import "../assets/css/carousel.css"

// export default function IndividualCarousel(props) {
//   const left = props.id * 100
//   return (
//     <div
//       className="carousel-container"
//       style={{
//         left: `${left}%`,
//         transform: `translateX(${props.translateX}%)`,
//         transition: "transform 1s linear",
//       }}
//     >
//       <div className="carousel-flex">
//         <div className="carousel-text-container">
//           <div className="main-heading">
//             <h1 className="main-heading-2">{props.mainHeading1}</h1>
//             <h3 className="main-heading-1">{props.mainHeading2}</h3>
//           </div>
//           <div className="main-description">
//             <div className="carousel-title">
//               <h1>{props.title}</h1>
//             </div>
//             <div className="description">
//               <p>{props.description}</p>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-image-container">
//           <img src={`${props.imageSrc}`} alt={`${props.alt}`} />
//         </div>
//       </div>
//     </div>
//   )
// }
