export default {
  autoplay:
    'Determines if the carousel will slide automatically based on "autoplayInterval".',
  autoplayHoverPause:
    'Determines if the carousel should stop auto sliding when the mouse hovers the carousel.',
  autoplayInterval: 'Changes the timing for auto slide in milliseconds.',
  breakpoints:
    'Customise the breakpoints. All breakpoints must be defined and values must be valid or default will be used.',
  center:
    'Aligns the current slide in the center of the carousel instead of to the left-side.',
  controls:
    'Change the contents and styles of the previous/next controls and pagination for the carousel. HTML can be passed in a String to "previous" and "next".<br/>Styles must be passed as an object.',
  loop:
    'Determines if the carousel should loop infintely. If false, carousel will only animate between first and last slide.',
  mouseDrag:
    'Determines if the carousel slides can be dragged using the mouse when holding left click. Note - the slides can be dragged on touch devices still even when mouseDrag is set to false.</br>This option works better when slides are not populated with links.',
  showEmptySpace: `<p>Determines if the carousel can be swiped until only the last slide is visible on the left side of the screen.</p>
      <p>If false, the carousel will not be slideable once the last slide is visible on screen.</p>
      <p><strong>For pagination</strong> - If true, a pagination button will be used for each slide. If false, pagination buttons will only show for the first slide rendered up to the first slide visible where the last slide is on screen (paginationCount = totalSlides - visibleSlidesOnScreen + 1). This is to prevent sliding past the last slide.</p>
      <p>Note - this option has no effect if loop is true.</p>`,
  slidePadding:
    'Change the padding between slides for specific breakpoints. If a unit of measurement is not included in the value, it will be assumed to be a pixel value.',
  slidesVisible:
    'Change the number of slides visible at specific breakpoints. The number can be a whole number or decimal. If a breakpoint is null, the carousel will use the value from a previous breakpoint.',
  startingSlide:
    'The index of the slide to start on when the carousel renders. If the index is invalid, the default will be used.',
  staticBreakpoint:
    'Removes the carousel functionality and animation at the specified breakpoint and shows all items on screen.',
  touchDrag:
    'Determines if the user can drag carousele slides with touch input such as on mobile and tablets or with touch screen monitors. This is set to true by default as touch drag is better UX on touch devices compared to button presses.',
  transitionDuration:
    'The CSS transition-duration property that controls how long it takes to animate between slides.',
  transitionTimingFunction:
    'The CSS transition-timing-function property that controls the animation timing function between slides.'
}
