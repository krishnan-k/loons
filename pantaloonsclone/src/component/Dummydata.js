import React, { useEffect, useState } from 'react'

const Dummydata = () => {
    const [data, getData] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/posts";

    // useEffect(() => {
    //     fetch(`http://localhost:5000/chapterview/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setchapterUpdate(data))
    // })
    useEffect(()=>{
        dataFetch()
    },[])
    const dataFetch = () =>{
        fetch(URL)
        .then((res) => res.json())
        .then((data) => getData(data));
    }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = () => {
    //     fetch(URL)
    //         .then((res) => res.json())

    //         .then((response) => {
    //             console.log(response);
    //             getData(response);
    //         });
    // };
    return (
        <div>
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    )
}

export default Dummydata
