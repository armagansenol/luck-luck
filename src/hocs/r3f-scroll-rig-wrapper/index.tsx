import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig"
import { useWindowSize } from "@uidotdev/usehooks"
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"

export interface R3fScrollRigWrapperProps {
  children: ReactNode
}

export default function R3fScrollRigWrapper(props: R3fScrollRigWrapperProps) {
  const eventSource = useRef<HTMLDivElement>(null)
  const [isTouch, setTouch] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
    setTouch(isTouch)

    console.log("istouch", isTouch)
  }, [size])

  return (
    <>
      {isTouch ? (
        <>{props.children}</>
      ) : (
        <div ref={eventSource}>
          <GlobalCanvas
            eventSource={eventSource as MutableRefObject<HTMLElement>}
            eventPrefix="client"
            style={{ pointerEvents: "none" }}
          />
          <SmoothScrollbar scrollRestoration="manual">
            {(bind) => <div {...bind}>{props.children}</div>}
          </SmoothScrollbar>
        </div>
      )}
    </>
  )
}
