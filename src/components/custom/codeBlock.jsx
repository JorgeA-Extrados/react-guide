import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Tema similar al mío
import { Box, IconButton, Tooltip } from "@mui/material";

export const CodeBlock = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);
  return (
    <>
      {/* BLoque de codigo */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <Tooltip title={copied ? "Copiado!" : "Copiar"} arrow>
            <IconButton
              sx={{
                position: "absolute",
                top: "8px",
                right: "8px",
                color: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </CopyToClipboard>

        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus} // Estilo similar al mío
          customStyle={{
            margin: 0,
            padding: "12px",
            fontSize: "14px",
            backgroundColor: "#1e1e1e",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>

      {/* Fin de bloque de codigo */}
    </>
  );
};
