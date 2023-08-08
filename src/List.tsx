import React from 'react';
import { Person } from './data';

interface ListProps {
    people: Person[];
}

const List: React.FC<ListProps> = ({people}) => {
  return (
    <>
     {people.map((person)=>{
        const {id, name, age, image} = person;
        return(
            <article key={id} className='grid grid-cols-[auto,1fr] gap-x-3 space-y-6 mb-6 items-center'>
                <img src={image} alt= {name} className='w-24 h-24  object-cover rounded-full shadow-md'/>
                <div>
                    <h4 className='mb-2 font-bold text-2xl'>{name}</h4>
                    <p className='mb-0 text-xl'>{age} years</p>
                </div>
            </article>
        )
     })}
    </>
  )
}

export default List