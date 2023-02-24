import React from "react";

function ArticleEvent(props: {
  link: string;
  src: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <a href={props.link}>
        <article>
          <div className="mb-3 relative">
            <img src={props.src} alt="" className="w-full" />
            <div
              className={
                props.label === "Video"
                  ? "absolute fill-[#1818ffda] bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
                  : "hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="m9 17 8-5-8-5z"></path>
              </svg>
            </div>
          </div>
          <div>
            <p
              className={`text-[0.8rem] font-medium mb-0.5 ${
                props.label === "Artists"
                  ? "text-[#FED13A]"
                  : props.label === "News"
                  ? "text-[#7600E2]"
                  : props.label === "Packs"
                  ? "text-[#FF00C2]"
                  : props.label === "Tutorials"
                  ? "text-[#52A2B0]"
                  : ""
              }`}
            >
              {props.label === "Video" ? "" : props.label}
            </p>
            <h3 className="text-[0.9rem] min-[1124px]:text-[1.15rem] font-medium mb-8">
              {props.title}
            </h3>
          </div>
        </article>
      </a>
    </div>
  );
}

export default ArticleEvent;
