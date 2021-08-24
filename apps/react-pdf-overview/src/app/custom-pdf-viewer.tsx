import { usePDF } from "@react-pdf/renderer";
import React, { useEffect } from "react";

export type CustomPDFViewerProps = {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement;
  innerRef?: React.ClassAttributes<HTMLEmbedElement>["ref"];
  showToolbar?: boolean;
};

export const CustomPDFViewer = ({
  title,
  className,
  style,
  children,
  innerRef,
  showToolbar = true,
}: CustomPDFViewerProps): JSX.Element => {
  const [instance, updateInstance] = usePDF({ document: children });

  useEffect(() => {
    updateInstance();
  }, [children, updateInstance]);

  return (
    <object>
      <embed
        id="pdfViewer"
        type="application/pdf"
        title={title}
        ref={innerRef}
        src={`${instance.url}#toolbar=${showToolbar ? 1 : 0}`}
        className={className}
        style={style}
      />
    </object>
  );
};
