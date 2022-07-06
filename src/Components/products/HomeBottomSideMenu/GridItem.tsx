import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IGridItem {
  fetchedData: any;
}

export default function GridItem({ fetchedData }: IGridItem) {
  // Image carousel maximum width configuration
  const [width, setWidth] = useState<number>(0);
  const imageCarousel = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setWidth(
      imageCarousel.current.scrollWidth - imageCarousel.current.offsetWidth
    );
  }, []);

  return (
    <GridSection ref={imageCarousel}>
      <GridWrapper drag="x" dragConstraints={{ right: 0 }}>
        {fetchedData?.slice(0, 10).map((item) => (
          <GridItems key={item.id}>
            <img src={item.thumbnailUrl} alt="bottom-grid-thumbnails" />
            <span>$52</span>
            <span>{item.title}</span>
            <span>(Beige)</span>
          </GridItems>
        ))}
      </GridWrapper>
    </GridSection>
  );
}

const GridSection = styled(motion.div)`
  display: flex;
  cursor: grab;
  padding: 0 1%;
  background-color: crimson;
  overflow: hidden;
`;

const GridWrapper = styled(motion.div)`
  display: flex;
  gap: 1em;
  justify-content: flex-start;
  background-color: lightblue;
`;

const GridItems = styled(motion.div)`
  display: flex;
  flex-direction: column;

  img {
    min-width: 300px;
    margin-bottom: 1em;
    pointer-events: none;
  }

  span {
    font-size: 0.9rem;
  }
`;
