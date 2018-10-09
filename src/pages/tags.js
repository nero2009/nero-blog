// import React from "react"
// import PropTypes from "prop-types"

// // Utilities
// import kebabCase from "lodash/kebabCase"

// // Components
// import Helmet from "react-helmet"
// import { Link, graphql } from "gatsby"

// export const Tagspage =(
//     {
//         data: {
//             allContentfulBlog: { group },
//           site: {
//             siteMetadata: { title },
//           },
//         },
//       }
// )=>{
//     return(

//         <div>
//             <Helmet title={title}/>
//             <div>
//                 <h1>Tags</h1>
//                 <ul>
//                     {
//                         group.map(tag =>(
//                             <li>
//                             <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
//                                 {tag.fieldValue} {tag.totalCount}
//                             </Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export const pageQuery = graphql`
//     query{
//         site{
//             siteMetadata{
//                 title
//             }
//         }
//         allContentfulBlog(
//             limit: 2000
            
//           ) {
            
//           }
          
//     }
// `