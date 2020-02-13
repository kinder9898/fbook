import React, { useState } from 'react'

export default function EditForm({ dispatch }) {
    const [photo, setPhoto] = useState('');
    const [description, setdescription] = useState('');
    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch({type: 'ADD_POST', photo, description});    
    }
    const handleChange = evt => {
        let photo = evt.target.value;
        setPhoto(photo);
    
    }
    const handleChangeDescription=evt=>{
        let description=evt.target.value;
        setdescription(description);
    }
    
    return (
        <>
        <div className="pubText">
                Создать публикацию
        </div>
        <div className='pub'>
            
            <form onSubmit={handleSubmit}>
                <div className="avatar">
                    <img src='https://i.pravatar.cc/150?img=60' alt="" className="ava" />
            
                </div>
                <div className='inp'>
                    <input className="post_input" placeholder='Добавьте фото'
                        type='text'
                        required onChange={handleChange} value={photo}
                    />
                    <input className='descriptionInput' type="text" placeholder='Описание фото' value={description}
                    onChange={handleChangeDescription}
                    />
                </div>
                <button className='publish_btn'>Опубликовать</button>
            </form>
        </div>
        </>
    )
}
