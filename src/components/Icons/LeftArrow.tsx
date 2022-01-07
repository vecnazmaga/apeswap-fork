import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={9}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.32 4.817c.049-.05.234-.265.406-.442C1.736 3.263 4.372 1.442 5.751.886c.21-.089.739-.278 1.022-.29.271 0 .53.062.776.189.308.177.554.455.69.784.086.228.221.91.221.922.136.747.21 1.96.21 3.3 0 1.277-.074 2.44-.185 3.198-.013.013-.148.86-.296 1.15-.27.532-.8.861-1.367.861h-.05c-.368-.013-1.144-.342-1.144-.355-1.305-.556-3.88-2.288-4.914-3.438 0 0-.292-.296-.418-.48A1.546 1.546 0 0 1 0 5.804c0-.367.11-.708.32-.987Z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
