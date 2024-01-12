import { BsFillInfoSquareFill } from 'react-icons/bs'
import { FaServicestack } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { AiOutlineLogin } from 'react-icons/ai'
import { GiArchiveRegister } from 'react-icons/gi';

export interface I_NavIcon {
    fontSize?: number;
    color?: string;
    style?: any
}

export const navigationModel = [
    {
        path: "/",
        label: "View Menu",
        icon: (props: I_NavIcon) => <GoHome {...props} />
    },
    {
        path: "/",
        label: "How it works",
        icon: (props: I_NavIcon) => <BsFillInfoSquareFill {...props} />
    },
    {
        path: "/",
        label: "Shop",
        icon: (props: I_NavIcon) => <FaServicestack {...props} />
    },
    {
        path: "/",
        label: "Customer Care",
        icon: (props: I_NavIcon) => <FaServicestack {...props} />
    },
    {
        path: "/",
        label: "Login",
        icon: (props: I_NavIcon) => <AiOutlineLogin {...props} />
    },
    {
        path: "/",
        label: "Get started",
        icon: (props: I_NavIcon) => <GiArchiveRegister {...props} />
    }
]