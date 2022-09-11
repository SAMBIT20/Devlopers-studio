import Markdown from "markdown-to-jsx";
import { useContext, useEffect, useState } from "react";
import Code from "./Code";
import { ThemeContext } from "../App";
import { useLocation } from "react-router-dom";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const { isDark } = useContext(ThemeContext);
  const [activeArticle, setActiveArticle] = useState("scope.md");
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    import(`../markdown/${activeArticle}`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err));
    });
  }, [activeArticle]);

  return (
    <article className={isDark ? "article" : "article-light"}>
      <div className={"side-bar"}>
        <h3 className="side-bar-title">All Topics 👨🏻‍💻</h3>
        {data.map((data) => (
          <div
            onClick={() => setActiveArticle(`${data.path}`)}
            style={{ cursor: "pointer" }}
            className="side-bar-content"
          >
            {data.title}
          </div>
        ))}
      </div>
      <div className="container">
        <div className="post-wrapper">
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  );
};

export default Post;