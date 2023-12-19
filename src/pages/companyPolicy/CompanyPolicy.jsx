import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./style.module.css";
const CompanyPolicy = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    // Fetch your Markdown content here or load it using any method you prefer
    fetch("./src/pages/companyPolicy/policy.md")
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, []);

  return (
    <div className="bg-white w-8/10 flex justify-center shadow-xl px-8 py-4">
      <Markdown
        className={`prose ${style.markdown}`}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      >
        {markdownContent}
      </Markdown>
    </div>
  );
};

export default CompanyPolicy;
