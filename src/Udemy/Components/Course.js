import React, { useContext, useEffect, useState } from 'react'
import { UdemyCartContext } from '../Context/udemy-context'
import angularImage from '../../assets/vue.png';

export default function Course({ course }) {

    const [courseInCart, setCourseInCart] = useState(false);

    const { cartList, updateCartList } = useContext(UdemyCartContext);

    useEffect(() => {
        const cartObj = cartList?.cartItems?.find((cartCourse) => cartCourse?.id === course?.id);
        setCourseInCart(!!cartObj);
    }, []);

    useEffect(() => {
        const cartObj = cartList?.cartItems?.find((cartCourse) => cartCourse?.id === course?.id);
        setCourseInCart(!!cartObj);
    }, [cartList?.cartItems]);


    function addToCart() {
        updateCartList((prevCartItems) => {
            const cartItems = JSON.parse(JSON.stringify(prevCartItems))
            cartItems?.cartItems?.push(course);
            return cartItems;
        });
    };

    return (
        <div className='mar-30 course-container'>
            <img className='course-img' src={angularImage} alt={course.image} width={250} height={145} />
            <div className='course-name'>{course.name}</div>
            <div className='course-instructor-price'>By: {course.instructor}</div>
            <div className='course-instructor-price'>$ {course.price}</div>
            <button disabled={courseInCart} className='fim-btn primary-btn' onClick={addToCart}>{courseInCart ? 'In Cart' : 'Add To Cart'}</button>

        </div>
    );
};
