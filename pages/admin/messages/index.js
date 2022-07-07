import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from '../../../src/actions/handleNavActions';

export default function Messages() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( change_icon_nav('messages') );
  }, []);

  return (
    <div>Messages</div>
  )
}
