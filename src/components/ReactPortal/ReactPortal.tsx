/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const rootEl = document.getElementById("root") as HTMLElement;

type ReactPortalProps = {
  children: React.ReactNode;
};

const ReactPortal: FC<ReactPortalProps> = (props) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;

    rootEl!.appendChild(current);
    return () => void rootEl!.removeChild(current);
  }, []);

  return createPortal(props.children, el.current);
};

export default ReactPortal;
