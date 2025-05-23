'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Preview from '../UI/Card/Preview';
import ScrollNav from '../UI/Button/ScrollNav';


function Blogs({
    blogs = [],
    className = "",
    heading = {
        title: "More to /s read \\s",
        description: "We have a few blogs post you might like to read about travelling, travelling tips, and more."
    },
    ...props
}){
    const blogsRef = useRef(null);

    if (!blogs || blogs.length === 0 || !blogsRef) {
        return null;
    }
    
    return ( 
        <section className={styles.featuredBlogs}>
            <div className={styles.blogsBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.blogsTitle}
                    variant='center'
                />

                <div className={styles.blogsContent}  >

                    <div className={styles.blogs} ref={blogsRef}>

                            {
                                
                                blogs.map((blog, index) => (
                                    <Preview
                                        key={index}
                                        url={`/blogs/${blog.slug}`}
                                        title={blog.title}
                                        description={blog.description}
                                        imgUrl={blog.imgUrl}
                                        className={styles.blogItem}
                                        btn="Read more"
                                    />)
                                )
                            }
                    </div>

                    <ScrollNav
                        scrollRef={blogsRef}
                        className={styles.scrollNav}
                    />
                    
                </div>
            </div>
        </section>
    );
}

export default Blogs;