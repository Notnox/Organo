import { ITime } from "types/ITime";
import { v4 as uuidv4 } from 'uuid';

export const times: ITime[] = [
    {   
        'id': uuidv4(),
        'nome': 'Programação',
        'corPrimaria': '#57C278',
        'corSegundaria': '#D9F7E9'
    },{
        'id': uuidv4(),
        'nome': 'Front-End',
        'corPrimaria': '#82CFFA',
        'corSegundaria': '#E8F8FF'
    },{
        'id': uuidv4(),
        'nome': 'Data Science',
        'corPrimaria': '#A6D157',
        'corSegundaria': '#F0F8E2'
    },{
        'id': uuidv4(),
        'nome': 'Devops',
        'corPrimaria': '#E06869',
        'corSegundaria': '#FDE7E8'
    },{
        'id': uuidv4(),
        'nome': 'UX e Design',
        'corPrimaria': '#DB6EBF',
        'corSegundaria': '#FAE9F5'
    },{
        'id': uuidv4(),
        'nome': 'Mobile',
        'corPrimaria': '#FFBA05',
        'corSegundaria': '#FFF5D9'
    },{
        'id': uuidv4(),
        'nome': 'Inovação e Gestão',
        'corPrimaria': '#FF8A29',
        'corSegundaria': '#FFEEDF'
    }
];
