import React, { useContext, memo } from 'react';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import { Space, LinkText, NavContainer, LinksItems, LogOut } from './style';
import { Colors } from '../../styles/Global';
import useCookies from '../../hooks/useCookies';
import AuthContext from '../../context/AuthContext';

// Assets
import ConfigIcon from '../../assets/HomeIcons/configIcon.svg';
import ConfigIconWhite from '../../assets/HomeIcons/configIconWhite.svg';

import DashboardIcon from '../../assets/HomeIcons/dashboardIcon.svg';
import DashboardIconWhite from '../../assets/HomeIcons/dashboardIconWhite.svg'

import ReportesIcon from '../../assets/HomeIcons/reportesIcon.svg';
import ReportesIconWhite from '../../assets/HomeIcons/reportesIconWhite.svg'

import UsuariosIconWhite from '../../assets/HomeIcons/usuariosIconWhite.svg'
import UsuariosIcon from '../../assets/HomeIcons/usuariosIcon.svg';


const LeftBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { setToken } = useContext(AuthContext);
    const { deleteCookie } = useCookies();

    const activeSections = (path) => {
        return {
            backgroundColor: location.pathname == path ? Colors.C_2 : Colors.White_2,
            marginLeft: location.pathname == path ? '12px' : '0px',
            padding: '4px 11px'
        }
    }

    const handleLogout = () => {
        setToken('');
        deleteCookie('userID');
        navigate('/')
    }

    return (
        <NavContainer>
            <div>
                <ul>
                    <Link to='/home2/dashboard' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/dashboard')}>
                            <img src={location.pathname == '/home2/dashboard' ? DashboardIconWhite : DashboardIcon} alt='Ícono del dashboad' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/dashboard' ? Colors.White_2 : Colors.C_2}}>Dashboard</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/reports' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/reports')} >
                            <img src={location.pathname == '/home2/reports' ? ReportesIconWhite : ReportesIcon} alt='Ícono de reportes' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/reports' ? Colors.White_2 : Colors.C_2}}>Reportes</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/certificates' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/certificates')}>
                            <img src={location.pathname == '/home2/certificates' ? UsuariosIconWhite :  UsuariosIcon} alt='Ícono de certificados' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/certificates' ? Colors.White_2 : Colors.C_2}}>Certificados</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/class' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/class')}>
                            <img src={location.pathname == '/home2/class' ? UsuariosIconWhite :  UsuariosIcon} alt='Ícono de clases' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/class' ? Colors.White_2 : Colors.C_2}}>Clases</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/mentoria' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/mentoria')}>
                            <img src={location.pathname == '/home2/mentoria' ? UsuariosIconWhite :  UsuariosIcon} alt='Ícono de home2s' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/mentoria' ? Colors.White_2 : Colors.C_2}}>Mentorías</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/participants' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/participants')}>
                            <img src={location.pathname == '/home2/participants' ? UsuariosIconWhite :  UsuariosIcon} alt='Ícono de participantes' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/participants' ? Colors.White_2 : Colors.C_2}}>Participantes</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home2/configuration' style={{ textDecoration: 'none' }}>
                        <LinksItems style={activeSections('/home2/configuration')}>
                            <img src={location.pathname == '/home2/configuration' ? ConfigIconWhite : ConfigIcon} alt='Ícono de configuración' />
                            <Space />
                            <LinkText 
                            style={{color: location.pathname == '/home2/configuration' ? Colors.White_2 : Colors.C_2}}>Configuración</LinkText>
                        </LinksItems>
                    </Link>
                </ul>
            </div>
            <div style={{textAlign:'center'}}>
                <LogOut onClick={handleLogout}>Cerrar sesión</LogOut>
            </div>
        </NavContainer>
    )
};



export default memo(LeftBar, (prevProps, nextProps) => {
    return prevProps.alt === nextProps.alt;
});