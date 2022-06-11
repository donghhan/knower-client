const resSize = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
};

export const device = {
  mobileVertical: `(max-width: ${resSize.mobile}px)`,
  mobileHorizontal: `(min-width: ${resSize.mobile + 1}px) and (max-width: ${
    resSize.tablet
  })`,
  tablet: `(min-width: ${resSize.tablet + 1}px) and (max-width: ${
    resSize.laptop
  })`,
  desktop: `(min-width: ${resSize.laptop} + 1)px`,
};
