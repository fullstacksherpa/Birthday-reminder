import React, {useState} from "react"
import peopleData, {Person} from "./data"
import List from './List'


function App(): JSX.Element{
         const [people, setPeople] = useState<Person[]>(peopleData)
  return (
  
    <main className="min-h-screen flex justify-center align-center">
      <section className="container mx-auto my-20 max-w-screen-lg bg-white rounded-lg p-6 shadow-md">
          <h3 className="font-normal text-4xl mb-8 text-center">{people.length} birthdays today</h3>
          <List people={people} />
          <button className="text-white block w-full border-0 bg-[#f28ab2] mx-auto mt-8 capitalize text-lg leading-tight tracking-wide rounded-md outline-[1px solid rgba(242, 138, 178,0.8)] cursor-pointer" onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
   
  )
}

export default App
