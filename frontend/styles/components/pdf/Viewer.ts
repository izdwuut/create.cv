/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'


const viewer = css`


.pdf {
  position: fixed;
  top: 48%;
  left: 75%;
  margin-top: -42.5vh;
  margin-left: calc((85vh * -0.71) / 2);
  height: 85vh;
  width: calc(85vh * 0.71);
}

.react-pdf__Page__canvas {
  height: 85vh !important;
  width: calc(85vh * 0.71) !important; /* 0.71 is A4 page scale ratio. */
}

.react-pdf__Page__textContent {
  display: none;
}

.previous-pdf,
.next-pdf {
  position: absolute;
}
.previous-pdf {
  z-index: 5;
}

.next-pdf {
  z-index: 10;
}

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 2500ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 2500ms;
}

.actions-top {
  display: flex;
  justify-content: space-between;
 padding-bottom: 0.5rem
}

`

export default viewer