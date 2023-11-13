import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostsTable from './Posts-Table';
import postsListData from './data';
// import postsListData from './data';

const PostsOverview = () => {

    const [posts, setPosts] = useState([]);
    const [tableDataLoading, setTableDataLoading] = useState(false);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        setPosts([]);
        setTableDataLoading(true);
        axios.get('https://course-api.com/react-tabs-project')
            .then((resp) => {
                // console.log(resp.data);
                // setTimeout(() => {
                    // setPosts(postsListData);
                    setPosts(resp.data);
                    setTableDataLoading(false);
                // }, 2000)
            })
            .catch((err) => {
                console.log(err);
                setTableDataLoading(false);
            });
    }

    const checkPosts = () => {
        return (
            posts.length > 0 ? <div><PostsTable tableData={posts} /></div> : <div>No Records Found...</div>
        )
    }

    return (
        <div className="main">
            { tableDataLoading ? <div>Loading...</div> : checkPosts()}
        </div>
    )
}

export default PostsOverview;