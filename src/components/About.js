import React, { useState } from 'react';
import '../scss/about.scss';
import '../scss/media_queries.scss';
import {
	Carousel,
	CarouselItem,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';

const items = [
	{
		src:
			require('../images/sam-hojati-pb7oJwtNVU4-unsplash.jpg'),
		altText: 'cocktail 1',
	},
	{
		src:
			require('../images/ralph-ravi-kayden-shHq4kGdAaU-unsplash.jpg'),
		altText: 'cocktail 2',
	},
	{
		src:
			require('../images/adam-jaime-dmkmrNptMpw-unsplash.jpg'),
		altText: 'cocktail 3',
	},
];




const About = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
//why are photos not resizing to be larger?????
const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carousel' />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



	return (
		<div>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
			</Carousel>
			<div className='description'>
				<h1>About Whiskey Neat</h1>
				<p>
					Our mission is to make the cocktail accessible to anyone. Expand your
					personal library by perusing a randomly generated list of cocktails by first
					name, or type in what you'd like in the search bar and we'll give you the resources to start building your own boozy treats. Cheers!
				</p>
			</div>
		</div>
	);
}

export default About;