import Markdown from "markdown-to-jsx";
import { useContext, useEffect, useState } from "react";
import Code from "./Code";
import { ThemeContext } from "../App";
import { useLocation } from "react-router-dom";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [active, setActive] = useState(0);
  const { isDark } = useContext(ThemeContext);
  const location = useLocation();
  const data = location.state?.data;
  const firstBlog = data[0].path;
  const path = location.state?.path;

  const [activeArticle, setActiveArticle] = useState(firstBlog);

  useEffect(() => {
    import(`../markdown/${path + "/" + activeArticle}`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err));
    });
  }, [activeArticle, path]);

  return (
    <article className={isDark ? "article" : "article-light"}>
      <div className={"side-bar"}>
        <h3 className="side-bar-title">All Topics 👨🏻‍💻</h3>
        {data.map((data) => (
          <div
            onClick={() => setActiveArticle(`${data.path}`, setActive(data.id))}
            style={{ cursor: "pointer" }}
            className={active === data.id ? "active" : "side-bar-content"}
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
