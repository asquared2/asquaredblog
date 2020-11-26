/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { jsx } from 'emotion'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    return (
        <>
            <Link to={url}>
                <div className="card is-shadowless">
                    <div className="card-image">
                        <img src={post.feature_image} />
                    </div>
                    <div className="card-content">
                    <div className='' css={{display: "flex", marginBottom: "-10px"}}>
                                {post.tags && (
                                    <div className="title has-text-link mr-3 is-uppercase" css={{fontSize: "12px", marginBottom: "20px"}}>
                                        <Tags
                                            post={post}
                                            visibility="public"
                                            autolink={false}
                                        />
                                    </div>
                                )}
                                {post.featured && (
                                    <div className="title mb-4 has-text-primary is-uppercase" css={{fontSize: "12px"}}>
                                        Featured
                                    </div>
                                )}
                            </div>
                        <h4 className="title mb-1 has-text-black is-capitalized" css={{fontSize: "22px"}}>{post.title}</h4>
                        <p className='card-subtitle has-text-grey-darker'>{post.custom_excerpt}</p>
                    </div>
                    <div className='media mt-5'>
                        <div className='media-content ml-0'>
                            <p className="is-uppercase content" css={{fontSize: ".8rem"}}>{post.published_at_pretty}  •  {readingTime}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
