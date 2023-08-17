import React, { useState, useEffect } from 'react';
import MessagesBox from './MessagesBox';
import MessagesForm from './MessagesForm';
import { useApiUrl } from '../../hooks/useApiUrl';
import {
    Container,
    Grid,
    Pagination,
  } from '@mui/material';

function MainComponent(props) {
    const [messages, setMessages] = useState([]);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const apiUrl = useApiUrl();


    const fetchMessages = async (page) => {
        try {
            const queryParm = "?page=" + page;
            const response = await fetch(apiUrl + queryParm);
            const data = await response.json();

            setMessages(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const createMessage = async (newMessage, callBack) => {
        try {
          if (newMessage.trim() === '') {
            return;
          }
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "content": newMessage }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          console.log('POST Response:', response);
      
          if (!response.ok) {
            console.log('Response not ok:', response);
            throw new Error('Network response was not ok');
          }
      
          callBack();
          fetchMessages(currentPage);
        } catch (error) {
          console.error('Error creating message:', error);
        }
    };

    const handlePageChange = (event, pageNumber) => {
        console.log(pageNumber)
        console.log("pageNumber")
        setCurrentPage(pageNumber - 1);
    };

    useEffect(() => {
        fetchMessages(currentPage);
        console.log(currentPage)
    }, [currentPage]);

    return (
        <>
        <Container className='App'>
            <Grid container spacing={2}>
                <MessagesForm createMessage={createMessage}/>
                <MessagesBox messages={messages}/>
            </Grid>
        </Container>
        <Pagination
                count={totalPages}
                page={currentPage + 1}
                onChange={handlePageChange}
                variant="outlined"
                color="primary" 
        />
        </>
    );
}

export default MainComponent;
