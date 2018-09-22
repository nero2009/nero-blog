const path = require('path')
const _ = require('lodash')

exports.createPages = ({graphql, actions}) =>{
    const {createPage} = actions
    return new Promise((resolve, reject)=>{
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        const tagTemplate = path.resolve('src/templates/tags.js')
        resolve(
            graphql(`
                {
                    allContentfulBlogpost (limit:100){
                        edges{
                            node{
                                id
                                slug
                                tags
                            }
                        }
                    }
                }
            `).then((result)=>{
                if (result.errors){
                    reject(result.errors)
                }
                const posts = result.data.allContentfulBlogpost.edges;

                posts.forEach((edge)=>{
                    createPage ({
                        path:edge.node.slug,
                        component: blogPostTemplate,
                        context:{
                            slug:edge.node.slug
                        }
                    })
                })

                let tags =[];
                _.each(posts, edge =>{
                    if(_.get(edge, "node.tags")){
                        tags = tags.concat(edge.node.tags)
                    }
                })

                tags = _.uniq(tags)

                tags.forEach(tag => {
                    createPage({
                        path: `/tags/${tag}`,
                        component: tagTemplate,
                        context:{
                            tag
                        }
                    })
                })
                return
            })
        )
    })
}