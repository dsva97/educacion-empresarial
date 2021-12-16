import React, { useState, useEffect } from 'react';
import Home2 from '../Home2';
import ApplicantsDB from '../../api/Applicants.json';

// Components
import TopSectionBar from '../../components/TopSectionBar';
import TableHeader from '../../components/TableHeader';
import ListCard from '../../components/ListCard';


const Mentoria = () => {
    const [allApplicants, setAllUsers] = useState(ApplicantsDB);

    return (
        <div>
            <Home2>
                <TopSectionBar currentSection={'Mentorías'}/>
                <ListCard amount={allApplicants.applicants.length} buttonText="Descargar" inputText='Buscar reporte' headerText="Postulaciones al programa de mentorías" />
            </Home2>
        </div>
    )
};

export default Mentoria;