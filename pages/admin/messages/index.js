import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from '../../../src/actions/handleNavActions';
import MessagesContainer from '../../../components/admin/messages/MessagesContainer';
import axios from 'axios';

export default function Messages({comments}) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( change_icon_nav('messages') );
  }, []);

  return (
    <main>
      <MessagesContainer comments={comments}/>

      <style jsx>{`
        main{
          box-sizing: border-box;
        }
      `}</style>
    </main>
  )
}

export async function getServerSideProps(){
  const comments = await axios('https://basket-commerce-api.herokuapp.com/api/comments')
      .then(response => response.data)
      .catch(err => console.log(err));
 
  return {
      props: {
          comments
      }
  };
}

