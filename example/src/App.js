import React, {useRef, useState} from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    l("Card", event);
  }
  , l = console.log.bind(window.console)
  , slRef = useRef(null)
  // useEffect(() => {
  //   l(card)
  // }, [card])

  return (
    <div className="main">
      {/*react-stacked-carousel*/}
      {/*<div>
        <h3>Carousel with images as children</h3>
        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}>
          <img key="img1" src="https://placeimg.com/640/480/arch" />
          <img key="img2" src="https://placeimg.com/640/480/tech" />
          <img key="img3" src="https://placeimg.com/640/480/nature" />
          <img key="img4" src="https://placeimg.com/640/480/animals" />
        </StackedCarousel>
      </div>*/}
      <div>
        <button onClick={() => slRef.current.setIndex(0)}>Set 0</button>
        <button onClick={() => slRef.current.setIndex(1)}>Set 1</button>
        <button onClick={() => slRef.current.setIndex(2)}>Set 2</button>
        <button onClick={() => slRef.current.setIndex(3)}>Set 3</button>
        <button onClick={() => slRef.current.setIndex(4)}>Set 4</button>
        <button onClick={() => slRef.current.setIndex(5)}>Set 5</button>
        {/*<button onClick={() => slRef.current.setIndex()}>Child</button>*/}
      </div>
      <div>
        <h3>Carousel with complex elements as children</h3>
        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}
          containerClassName={"container"}
          cardClassName="card"
          // setCard={setCard}
          ref={slRef}
          >
          <div key={'child1'}>
            <h2>1 Card</h2>
          </div>
          <div key={'child2'}>
            <h2>2 Card</h2>
          </div>
          <div key={'child3'}>
            <h2>3 Card</h2>
          </div>
          <div key={'child4'}>
            <h2>4 Card</h2>
          </div>
          <div key={'child5'}>
            <h2>5 Card</h2>
          </div>
          <div key={'child6'}>
            <h2>6 Card</h2>
          </div>
          <div key={'child7'}>
            <h2>7 Card</h2>
          </div>
        </StackedCarousel>
      </div>
    </div>
  )
}

export default App
