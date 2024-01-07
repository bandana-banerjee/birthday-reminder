import Person from './person'

const list=({people})=> {
  return (
    <section>
        {people.map((person)=>{
 return <Person key={person.id}{...person}/>
        })}
    </section>
  )
}

export default list