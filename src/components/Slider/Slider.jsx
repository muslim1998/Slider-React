import React, { useEffect, useState } from "react";


export const Slider = () => {

    const [data, setData] = useState([])
    //Сохранить порядковый номер слайдера
    const [index, setIndex] = useState(0)
    
    const next = () => {
        if (index < data.length - 1)
            setIndex(index + 1)
    }
    
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const close = () => {
        setIndex(0)
        
    }

    //Функция хук
    //
    //2 - параметра
    //1.Функция
    //2. Зависимость
    useEffect(() => {
        alert('Сайт загружен')
        const image = [
            {
                id: 1,
                title: 'LCH',
                source: "/image/1.jpg",
            },
            {
                id: 2,
                title: 'Kubok',
                source: "/image/2.jpg",
            },
            {
                id: 3,
                title: 'Inter',
                source: "/image/3.jpg",
            }
        ]
        setData(image)
    }, [])

    return data?.length > 0 ?(
        <div>
            <div>
                <div>Index: {index}</div>
                <div>Picture: {data[index].title}</div>
                <div>ID: {data[index].id}</div>
            </div>
            <div className="slider_image">
                <img src={data[index].source} alt="" />
            </div>
            <div>
                <button onClick={prev}>Артка</button>
                <button onClick={next}>Алга</button>
                <button onClick={close}>Сброс</button>
            </div> 
            </div>
            ):(
            <div>No picture</div>
            )
}


