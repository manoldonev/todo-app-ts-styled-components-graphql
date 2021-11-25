import type {
  MouseEvent as GenericMouseEvent,
  TouchEvent as GenericTouchEvent,
} from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div<{ maxHeight?: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-height: ${(props) => props.maxHeight ?? 'none'};
`;

const BackgroundLayer = styled.div<{ opacity?: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  color: white;
  background-color: #663bb7;

  opacity: ${(props) => props.opacity ?? 0};
`;

const ForegroundLayer = styled.div<{ transform: string; transition: string }>`
  width: 100%;
  align-items: center;
  background-color: #fff;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
`;

const SwipeToDelete = ({
  children,
  threshold = 0.3,
  onSwipe,
}: {
  children: React.ReactNode;
  threshold?: number;
  onSwipe?: () => void;
}): JSX.Element | null => {
  const [maxHeight, setMaxHeight] = useState('');
  const [opacity, setBackgroundOpacity] = useState(0);
  const [transform, setForegroundTransform] = useState('');
  const [transition, setForegroundTransition] = useState('');
  const foregroundRef = useRef<HTMLDivElement>(null);

  const dragStartXRef = useRef<number>(0);
  const leftRef = useRef<number>(0);
  const draggedRef = useRef<boolean>(false);

  const updatePosition = (): void => {
    if (draggedRef.current) {
      requestAnimationFrame(updatePosition);
    }

    setForegroundTransform(`translateX(${leftRef.current}px)`);
    setBackgroundOpacity(
      Math.min(+(Math.abs(leftRef.current) / 100).toFixed(2), 1),
    );
  };

  const onDragStart = (clientX: number): void => {
    draggedRef.current = true;
    dragStartXRef.current = clientX;

    setForegroundTransform('');
    setForegroundTransition('');

    requestAnimationFrame(updatePosition);
  };

  const onMouseMove = (e: MouseEvent): void => {
    const left = e.clientX - dragStartXRef.current;
    if (left < 0) {
      leftRef.current = left;
    }
  };

  const onTouchMove = (e: TouchEvent): void => {
    const touch = e.targetTouches[0];
    const left = touch.clientX - dragStartXRef.current;
    if (left < 0) {
      leftRef.current = left;
    }
  };

  const onDragStartMouse = (
    e: GenericMouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    onDragStart(e.clientX);
    window.addEventListener('mousemove', onMouseMove);
  };

  const onDragStartTouch = (e: GenericTouchEvent<HTMLDivElement>): void => {
    const touch = e.targetTouches[0];
    onDragStart(touch.clientX);
    window.addEventListener('touchmove', onTouchMove);
  };

  const onSwiped = (): void => {
    if (onSwipe) {
      onSwipe();
    }
  };

  const onDragEnd = (): void => {
    draggedRef.current = false;

    if (!foregroundRef.current) {
      return;
    }

    if (leftRef.current < foregroundRef.current.offsetWidth * -threshold) {
      leftRef.current = -foregroundRef.current.offsetWidth * 2;

      setMaxHeight('0');
      onSwiped();
    } else {
      leftRef.current = 0;
    }

    setForegroundTransition(`transform 0.5s ease-out;`);
    setForegroundTransform(`translateX(${leftRef.current}px)`);
  };

  const onDragEndMouse = (): void => {
    window.removeEventListener('mousemove', onMouseMove);
    onDragEnd();
  };

  const onDragEndTouch = (): void => {
    window.removeEventListener('touchmove', onTouchMove);
    onDragEnd();
  };

  useEffect(() => {
    window.addEventListener('mouseup', onDragEndMouse);
    window.addEventListener('touchend', onDragEndTouch);

    return () => {
      window.removeEventListener('mouseup', onDragEndMouse);
      window.removeEventListener('touchend', onDragEndTouch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper maxHeight={maxHeight}>
      <BackgroundLayer opacity={opacity}>
        <span>Delete</span>
      </BackgroundLayer>
      <ForegroundLayer
        ref={foregroundRef}
        transform={transform}
        transition={transition}
        onMouseDown={onDragStartMouse}
        onTouchStart={onDragStartTouch}
      >
        {children}
      </ForegroundLayer>
    </Wrapper>
  );
};

export { SwipeToDelete };
