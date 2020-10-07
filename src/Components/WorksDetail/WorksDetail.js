import React from 'react';
import { useParams } from 'react-router-dom';

const WorksDetail = () => {
    const {title}=useParams()
    return (
        <div>
            <h1>{title} Works Detail</h1>
        </div>
    );
};

export default WorksDetail;