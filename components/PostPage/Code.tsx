"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy, Paste } from "../Assets/Icons";
import { FC, useEffect, useState } from "react";

interface Props {
  content: string;
}

const Code: FC<Props> = ({ content }): JSX.Element => {
  // State copied quyết định icon nào sẽ được hiển thị
  const [copied, setCopied] = useState(false);

  // Reset về lại trạng thái chưa copy sau 1s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);

      return () => {
        clearTimeout(timer);
      };
    }, 1000);
  }, [copied]);

  return (
    <div className="code">
      <CopyToClipboard
        // text là văn bản được copy
        text={content}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <button className="icon copy-icon">
          <div className="flex items-center gap-1 text-sm">
            {copied ? (
              <>
                <Paste />
                Copied
              </>
            ) : (
              <>
                <Copy />
                Copy
              </>
            )}
          </div>
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter style={materialDark} language="javascript">
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
