import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";

type ReactPortalProps = {
  children: React.ReactNode;
};

const ReactPortal: FC<ReactPortalProps> = (props) => {
  const rootEl = useRef(document.getElementById("root") as HTMLElement);
  return createPortal(props.children, rootEl.current);
};

export default ReactPortal;
