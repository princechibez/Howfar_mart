import { forwardRef, useImperativeHandle } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import CloseIcon from '@mui/icons-material/Close'


import Logo from '../../assets/logo.png'
// import SideBarImg from '../../assets/landing-page-imgs/home-images/feature-img.png'
import { I_NavIcon } from '../../models/navData';

interface ISidebarDataMapper {
    path: string,
    label?: string,
    icon: React.FC<I_NavIcon>
}

interface ISideBar {
    setOpened?: any,
    data?: Array<ISidebarDataMapper>
}

const SideBar = forwardRef((props: ISideBar, ref) => {
    const navigate = useNavigate()

    const {
        collapseSidebar, toggleSidebar, toggled
    } = useProSidebar();

    const goToAuthPage = (path: string) => {
        return navigate(path)
    }

    const toggleSideBarHandler = () => {
        toggleSidebar();
        if (toggled) {
            collapseSidebar()
            props.setOpened('collapsed')
        } else {
            props.setOpened('toggled')
            collapseSidebar()
        }
    }

    useImperativeHandle(ref, () => ({
        toggleBar() {
            toggleSideBarHandler()
        }
    }))


    return (
        <Sidebar
            width='100%'
            // image={SideBarImg}
            backgroundColor="rgb(0,0,0,.97)"
            defaultCollapsed={true}
            collapsedWidth="0px"
            style={{
                height: "100vh", color: 'white',
                position: 'fixed', zIndex: 100, top: 0, left: 0,
            }}>

            <Menu>
                <MenuItem
                    icon={<CloseIcon fontSize='large' />}
                    onClick={() => toggleSideBarHandler()}
                    style={{ backgroundColor: 'transparent', margin: "12px 0", gap: 50 }}>
                    {" "}
                    <img src={Logo} alt="App logo" />

                </MenuItem>
                {
                    props.data?.map((navItem, i) => (
                        <MenuItem
                            key={i}
                            component={<NavLink to={navItem.path}
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#90A2B2" : "#ccc",
                                        textDecoration: "none",
                                        outline: "none",
                                        position: 'relative',
                                        right: 10,
                                        marginTop: i === 0 ? 18 : 14,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginBottom: 'auto',
                                        borderRadius: 8,
                                        padding: "0px 20px",
                                        width: "80%",
                                        // backgroundColor: isActive ? "rgb(33, 150, 243, .5)" : 'transparent',
                                        transition: "opacity ease-out 4s"
                                    }
                                }} />}
                            icon={<navItem.icon fontSize={30} style={{ marginRight: 10 }} />}
                        >
                            <Typography variant='body1' fontSize={16}>{navItem.label}</Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </Sidebar>
    )
})



export default SideBar