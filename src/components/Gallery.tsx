import { useState } from "react";

const people = [
  {
    id: 0,
    src: 'https://i.imgur.com/MK3eW3As.jpg',
    name: 'Katherine Johnson',
    profession: 'physicist',
    description: 'Katherine Johnson was a pioneering African-American mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. crewed spaceflights.'
  },
  {
    id: 1,
    src: 'https://i.imgur.com/mMbVoe8.jpeg',
    name: 'Charles Darwin',
    profession: 'Biologist',
    description: 'Charles Darwin foi um naturalista britânico que desenvolveu a teoria da evolução por meio de seleção natural.'
  },
  {
    id: 2,
    src: 'https://i.imgur.com/fKZ00QE.jpeg',
    name: 'Albert Einstein',
    profession: 'physicist',
    description: 'Albert Einstein foi um fiéis da teoria da relatividade'
  },
]

function Profile({ person, showMore }) {
  return (
    <>
      <img
        src={person.src} alt={person.name} width={100} height={100}
      />
      <p>{person.name}</p>
      <p>{showMore && person.description}</p>
    </>
  );
}

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);
  const hasNext = index + 1 < people.length;
  const hasPrevious = index - 1 < index && index > 0;

  function handleNextClick() {
    if(hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if(hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  }
  
  function handleShowMore() {
    setShowMore(!showMore)
  }
  
  const person = people[index];
  return (
    <>
      <section>
        <h2>Amazing Scientists</h2>
        <div>
          {hasPrevious && <button onClick={handlePreviousClick}>Previous</button>}
          <button onClick={handleNextClick}>Next</button>
          <p>{`(${index + 1} of ${people.length})`}</p>
        </div>
        <Profile showMore={showMore} person={person} />
        <button onClick={handleShowMore}>{showMore ? 'Show less' : 'Show more'}</button>
      </section>
    </>
  );
}