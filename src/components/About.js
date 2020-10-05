import React, { useState } from 'react';
import '../scss/about.scss';
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
		caption: 'mint mojito',
	},
	{
		src:
			require('../images/ralph-ravi-kayden-shHq4kGdAaU-unsplash.jpg'),
		altText: 'cocktail 2',
		caption: 'martini',
	},
	{
		src:
			require('../images/adam-jaime-dmkmrNptMpw-unsplash.jpg'),
		altText: 'cocktail 3',
		caption: 'old-fashioned',
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



	return (
		<div>
            <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
			<h1>about us</h1>
			<p>
                our mission is to make a cocktail an art form again. expand your personal library by perusing a randomly generated list of cocktails by name, or type in what
				you'd like above and we'll tell you how to make it!
			</p>
		</div>
	);
}

export default About;