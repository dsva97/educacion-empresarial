import React, { useState, useEffect } from 'react';
import { MentoriaContainer } from './style';
import { useParams, useNavigate } from 'react-router-dom';
import Users from '../../api/Users.json';
import useRoutesAuth from '../../hooks/useRoutesAuth';

// Components
import Navbar from '../../components/Navbar';
import LeftBar2 from '../../components/LeftBar2';
import TopSectionBar from '../../components/TopSectionBar';

// Views

const sections = ['dashboard', 'reports', 'certificates', 'class', 'mentorias', 'participants', 'configuration','programs']

const Home2 = ({children}) => {
    const [applicants, setApplicants] = useState([]);
    const { isNotLogged } = useRoutesAuth('/');
    const { section } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const currentRoute = sections.includes(section);
        if(!currentRoute) return navigate('/home2/mentoria');

        isNotLogged();
        setApplicants(applicants.applicants);
    }, []);

    return (
        <main style={{backgroundColor: '#FCFCFC', height: '100vh'}}>
            <Navbar/>
            <MentoriaContainer>
                <LeftBar2/>
                {children}
            </MentoriaContainer>
        </main>
    )
};

export default Home2;