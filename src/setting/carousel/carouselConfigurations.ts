interface CarouselProps {
  autoPlay: boolean;
  animation: 'fade' | 'slide';
  indicators: boolean;
  duration: number;
  navButtonsAlwaysVisible: boolean;
  navButtonsAlwaysInvisible: boolean;
  cycleNavigation: boolean;
  fullHeightHover: boolean;
  swipe: boolean;
}

export const carouselConfigurations: CarouselProps = {
  autoPlay: false,
  animation: 'slide',
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: false,
  fullHeightHover: true,
  swipe: true,
};
