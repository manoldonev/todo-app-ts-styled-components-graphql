import { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import type {
  SwipeCallback,
  SwipeDirections,
  TapCallback,
} from 'react-swipeable';
import { LEFT, RIGHT, useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BackgroundLayer = styled.div<{
  swipeDirection: SwipeDirections;
}>`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  color: white;
  background-color: #c70000;

  ${(props) =>
    props.swipeDirection === LEFT &&
    `
    justify-content: flex-end;
  `}

  ${(props) =>
    props.swipeDirection === RIGHT &&
    `
    justify-content: flex-start;
  `}
`;

const ForegroundLayer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

const SwipeToDelete = ({
  children,
  threshold = 0.3,
  onSwiped,
  onTap,
}: {
  children: React.ReactNode;
  threshold?: number;
  onSwiped?: SwipeCallback;
  onTap?: TapCallback;
}): JSX.Element | null => {
  const foregroundRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirections>(LEFT);

  const swipeableHandlers = useSwipeable({
    trackMouse: false,
    preventDefaultTouchmoveEvent: true,
    onTap,
    onSwipeStart: () => {
      if (foregroundRef.current) {
        foregroundRef.current.style.transition = '';
        foregroundRef.current.style.transform = '';
      }
    },
    onSwiping: (eventData) => {
      if (foregroundRef.current) {
        const transform = `translateX(${eventData.deltaX}px)`;
        foregroundRef.current.style.transform = transform;
      }

      if (backgroundRef.current) {
        const opacity = Math.min(Math.abs(eventData.deltaX) / 100, 1);
        backgroundRef.current.style.opacity = opacity.toFixed(2);
      }

      setSwipeDirection(eventData.dir);
    },
    onSwiped: (eventData) => {
      if (!foregroundRef.current) {
        return;
      }

      let left = eventData.deltaX;
      const { offsetWidth } = foregroundRef.current;
      if (Math.abs(left) >= offsetWidth * threshold) {
        left = eventData.dir === LEFT ? -offsetWidth * 2 : offsetWidth;

        if (onSwiped) {
          onSwiped(eventData);
        }
      } else {
        left = 0;
      }

      foregroundRef.current.style.transition = 'transform 0.5s ease-out';
      foregroundRef.current.style.transform = `translateX(${left}px)`;
    },
  });

  const refPassthrough = (element: HTMLDivElement): void => {
    swipeableHandlers.ref(element);
    foregroundRef.current = element;
  };

  return (
    <Wrapper>
      <BackgroundLayer ref={backgroundRef} swipeDirection={swipeDirection}>
        <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
      </BackgroundLayer>
      <ForegroundLayer
        onMouseDown={swipeableHandlers.onMouseDown}
        ref={refPassthrough}
      >
        {children}
      </ForegroundLayer>
    </Wrapper>
  );
};

export { SwipeToDelete };
