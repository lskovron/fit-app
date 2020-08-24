import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ReactHtmlParser from 'react-html-parser'; 

import Header from './Header';
import { postsUrl } from './Config';

const LandingPage = ({history}) => {

    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('')

    const fetchContent = () => {
        setLoading(true);
        let url = `${postsUrl}/wp-json/wp/v2/pages/116`;
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json() )
        .then( response => {
            setLoading(false);
            setContent(response.content.rendered);
        })
        .catch( error => {
            setLoading(false);
            console.log(error);
        })
        
    }

    useEffect(()=>{
        fetchContent();
    },[])

    return (
        <>
            <Header />
            {loading ? (
                <div>
                    <h2>Loading</h2>
                    <CircularProgress />
                </div>
            ) : (
                <>  
                    {ReactHtmlParser(content) }
                    <Button variant="contained" onClick={()=>{history.push('/your-info')}}>Begin!</Button>
                </>
            )}
        </>
    )
}

export default withRouter(LandingPage);