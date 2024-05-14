import React from 'react';
import Header from "./Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';

const Root = () => {
    return (
        <>
            <Heading>검색 서비스</Heading>

            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/demo'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/demo/video'>Video</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/demo/book'>Book</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    );
}

export default Header;