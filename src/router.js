import {createBrowserRouter} from "react-router-dom";
import VideoList from "./components/VideoList";
import Root from "./routes/Root";

// 라우터 설계
/*
GET     /demo/vide/list             추천 영상 목록 페이지
GET     /demo/video/search          검색 영상 목록 페이지

GET     /demo/book/list             추천 도서 목록 페이지
GET     /demo/book/search           검색 도서 목록 페이지
GET     /demo/book/search/{:isbn}   검색 도서 상세 페이지
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/sample",
                element: <>
                    <p>자식이다.</p>
                </>
            }
        ]
    },
    {
        path: "/video",
        element: <VideoList />,
        children: [

        ]
    },
    {
        path: "/video/search",
        element: <Root />,
        children: [

        ]
    },
    {
        path: "/book",
        element: <Root />,
        children: [
            
        ]
    }
], {
    basename: "/demo"
});

export default router;