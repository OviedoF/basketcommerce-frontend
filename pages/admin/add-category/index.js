import React from 'react'
import AddCategoryForm from '../../../components/admin/categorys/AddCategoryForm'

export default function AddCategoryPage() {
  return (
    <main>
        <AddCategoryForm />
        
        <style jsx>{`
            main{
                display: flex;
                align-items: center;
                justify-content: center;
            }    
        `}</style>
    </main>
  )
}
