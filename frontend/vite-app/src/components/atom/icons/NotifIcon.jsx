import * as React from "react"

function NotifIcon(props) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={17}
        cy={17}
        r={16.75}
        fill="#EFF4FB"
        stroke="#E2E8F0"
        strokeWidth={0.5}
      />
      <path
        d="M24.2 22.934l-.563-.872a.926.926 0 01-.168-.534v-5.85c0-1.66-.703-3.206-1.997-4.36a6.54 6.54 0 00-3.825-1.63v-.563A.654.654 0 0017 8.478a.654.654 0 00-.647.647v.534c-.056 0-.112 0-.169.028-3.262.366-5.709 2.982-5.709 6.104v5.737c-.028.281-.084.422-.14.506l-.535.9a.863.863 0 000 .9c.169.253.45.422.76.422h5.821v.619c0 .337.282.647.647.647a.654.654 0 00.647-.647v-.619h5.794c.31 0 .59-.169.76-.422a.808.808 0 00-.029-.9zm-12.966.056l.197-.337c.169-.281.253-.619.31-1.012v-5.85c0-2.476 1.968-4.557 4.584-4.838 1.603-.169 3.178.31 4.331 1.322 1.013.9 1.575 2.11 1.575 3.403v5.85c0 .422.113.816.366 1.21l.169.253H11.234z"
        fill="#64748B"
      />
    </svg>
  )
}

export default NotifIcon
