import * as React from "react"

function NotesIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="green" width={16} height={16} {...props}>
      <path
        d="M8 .5c-.822 0-1.5.677-1.5 1.5h-1a.5.5 0 00-.5.5V3H3.5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5H11v-.5a.5.5 0 00-.5-.5h-1C9.5 1.177 8.822.5 8 .5zm0 1c.282 0 .5.218.5.5v.5A.5.5 0 009 3h1v1H6V3h1a.5.5 0 00.5-.5V2c0-.282.218-.5.5-.5zM4 4h1v.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V4h1v10H4V4zm1 2v1h6V6H5zm0 2v1h6V8H5zm0 2v1h6v-1H5zm0 2v1h6v-1H5z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          blockProgression: "tb",
          whiteSpace: "normal",
          isolation: "auto",
          mixBlendMode: "normal",
          solidColor: "#000",
          solidOpacity: 1
        }}
      />
    </svg>
  )
}

export default NotesIcon
