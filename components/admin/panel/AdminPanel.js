import React from 'react'
import PanelLink from './PanelLink'
import addProduct from '../../../assets/imgs/adminPanel/add-product.jpg';
import messages from '../../../assets/imgs/adminPanel/messages2.jpg'

export default function AdminPanel() {
  return (
    <div>
      <PanelLink dir='/admin/add-product' img={addProduct} text={'AGREGAR PRODUCTO'}/>

      <PanelLink dir='/admin/messages' img={messages} text={'VER MENSAJES Y CONSULTAS'}/>

      <style jsx>{
      `
        div {
          width: 85%;
          height: 100vh;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `
        }</style>
    </div>
  )
}
