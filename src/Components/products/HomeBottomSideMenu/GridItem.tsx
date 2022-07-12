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
      <GridWrapper drag="x" dragConstraints={{ right: 0, left: -width }}>
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
  overflow: hidden;

  @media scren and (max-width: 480px) {
    overflow: visible;
  }
`;

const GridWrapper = styled(motion.div)`
  display: flex;
  gap: 1em;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItems = styled(motion.div)`
  display: flex;
  flex-direction: column;

  img {
    min-width: 100%;
    margin-bottom: 1em;
    pointer-events: none;
  }

  &:nth-child(2n) {
    img {
      min-height: 300px;
    }
  }

  &:nth-child(2n + 1) {
    img {
      min-height: 400px;
    }
  }

  span {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    img {
      max-width: 200px;
    }

    &:nth-child(2n) {
      img {
        max-height: 200px;
      }
    }

    &:nth-child(2n + 1) {
      img {
        max-height: 250px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    img {
      max-width: 100%;
    }

    &:nth-child(2n) {
      img {
        max-height: 100px;
      }
    }
  }
`;
