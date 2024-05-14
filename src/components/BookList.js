import { Heading } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@chakra-ui/react'

const BookList = () => {
    // const [count,setCount] = useState(1);

    // useState는 화면 랜더링에 반영됨
    const [bookList, setBookList] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('강아지똥');
    // useRef 는 화면 랜더링 반영되지 않는 참조값
    const pageCount = useRef(1);


    const fetchBooks = async () => {
        const response = await fetch(
            `https://dapi.kakao.com/v2/search/vclip?query=${search}&page=${page}`,
            {
                method: "GET",
                headers: {
                    Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
                }
            }
        );
        const data = await response.json();
        console.log(data);

        pageCount.current = data.meta.pageable_count % 10 > 0
            ? data.meta.pageable_count / 10 + 1
            : data.meta.pageable_count / 10;
        pageCount.current = Math.floor(pageCount.current);
        pageCount.current = pageCount.current > 15 ? 15 : pageCount.current;
        console.log(pageCount);


        setBookList(data.documents);
    };

    const changeSearch = e => {
        // if(e.keyCode==13){
        //     // let searchValue = document.getElementById('search-value').value;
        //     // document.getElementById('search-value').value = '';
        //     setSearch(e.target.value);
        //     e.taget.value = '';
        // }

        if (e.target.value.length > 1) {
            setSearch(e.target.value);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [search, page])

    return (
        <>
            <Heading>동영상 검색 목록</Heading>
            <Box>
                <Input type='text' placeholder='검색할 내용' id='search-value' onChange={changeSearch} size='lg' variant='flushed'>
                </Input>
                {bookList.map(book => (
                    <>
                        <p>{book.title}</p>
                    </>
                ))}
            </Box>
            <ul>
                {Array.from({ length: pageCount.current }, (_, index) => (
                    <>
                        <li onClick={e => { setPage(index + 1) }}>{index + 1}</li >
                    </>
                ))}
            </ul >
        </>
    );
};

export default BookList;