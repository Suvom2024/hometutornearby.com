// components/WorkCard.tsx
import React from 'react';
import WorkCardClient from './WorkCardClient';
import { StaticImageData } from 'next/image';
import icon_1 from '@/assets/img/icon/12.png';
import icon_2 from '@/assets/img/icon/13.png';

interface WorkCardProps {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, desc }) => {
    return (
        <WorkCardClient icon={icon} title={title} desc={desc} />
    );
};

export default WorkCard;
