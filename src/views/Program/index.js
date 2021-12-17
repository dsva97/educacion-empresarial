import React, { useState, useEffect } from 'react';
import Home2 from '../Home2';
import ProgramsDB from '../../api/Programs.json';

// Components
import TopSectionBar from '../../components/TopSectionBar';
import CardBottom from '../../components/CardBottom';
import TableHeader from '../../components/TableHeader';


const Program = () => {
    const [allPrograms, setAllUsers] = useState(ProgramsDB);

    return (
        <div>
            <Home2>
                <TopSectionBar currentSection={'Mentorías'} subcurrentSection={'Programa de mentorías'}/>
                <div>
                    <CardBottom />
                    <TableHeader amount={allPrograms.programs.length} buttonText="+  Agregar programa de mentorías" inputText='Buscar programa' headerText="Todos los programas" />
                </div>
            </Home2>
        </div>
    )
};

export default Program;