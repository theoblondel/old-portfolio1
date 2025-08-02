
// [Slider]
var slider = tns({
  container: ".slider",
  items: 1,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  prevButton: ".slider-back",
  nextButton: ".slider-next",
  responsive: {
    450: {
      items: 2,
    },
    800: {
      items: 3,
    },
  },
});

// [AOS]
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
