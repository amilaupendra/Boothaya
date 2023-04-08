import React from 'react'
import { AiFillSetting } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';
import { GiSwapBag } from 'react-icons/gi';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { AiFillNotification} from 'react-icons/ai';


export const SidebarData = [
    {
        title: 'Farmer Control',
        path: '/farmercontrol',
        icon: <AiFillSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Distribution',
        path: '/distribution',
        icon: <MdPayments/>,
        cName: 'nav-text'
    },
    {
        title: 'Fertilizer',
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
    {
        title: 'Notice',
        path: '/notice',
        icon: <AiFillNotification/>,
        cName: 'nav-text'
    },
];