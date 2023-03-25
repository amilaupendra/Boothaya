import React from 'react'
import { AiFillSetting } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';
import { GiSwapBag } from 'react-icons/gi';
import { BsFillCalculatorFill } from 'react-icons/bs';





export const SidebarData = [
    {
        title: 'Farmer Control',
        path: '/',
        icon: <AiFillSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Payments',
        path: '/payments',
        icon: <MdPayments/>,
        cName: 'nav-text'
    },
    {
        title: 'Fertilizer Distribution',
        path: '/fertilizer',
        icon: <GiSwapBag/>,
        cName: 'nav-text'
    },
    {
        title: 'Calculator',
        path: '/calculator',
        icon: <BsFillCalculatorFill/>,
        cName: 'nav-text'
    },
];