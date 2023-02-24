function EventsLine(props: {
  title: string;
  addition: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-10/12 mx-auto mt-10 md:flex flex-wrap-reverse justify-between">
      <header className="mb-6 min-[575px]:mb-9 min-[1124px]:mb-12 order-1">
        <h2 className="font-medium text-lg min-[575px]:text-[1.7rem] min-[1124px]:text-[2.2rem]">
          {props.title}
        </h2>
      </header>
      {props.children}
      <div className="order-2 mt-0.5">
        <a href="https://www.ableton.com/en/blog/">
          <div className="flex text-[#0000FF] fill-[#0000FF] mx-auto justify-center">
            {props.addition === "See all posts" ? (
              <>
                <>
                  <div className="font-medium text-[0.93rem] md:text-[1.15rem] xl:text-[1.35rem] lg:hidden">
                    {props.addition}
                  </div>
                  <div className="mt-1.5 lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="w-3.5 md:w-5 xl:w-6 h-3.5 md:h-5 xl:h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                  </div>
                </>

                <div className="font-medium space-x-1 xl:space-x-2 text-[0.93rem] md:text-[1.15rem] xl:text-[1.35rem] max-lg:hidden">
                  <a href="https://www.ableton.com/en/blog/">All posts </a>
                  <a href="https://www.ableton.com/en/blog/categories/artists/">
                    Artists{" "}
                  </a>
                  <a href="https://www.ableton.com/en/blog/categories/news/">
                    News{" "}
                  </a>
                  <a href="https://www.ableton.com/en/blog/categories/downloads/">
                    Downloads{" "}
                  </a>
                  <a href="https://www.ableton.com/en/blog/categories/tutorials/">
                    Tutorials{" "}
                  </a>
                  <a href="https://www.ableton.com/en/blog/categories/videos/">
                    Videos{" "}
                  </a>
                  <a href="https://www.ableton.com/en/blog/loop/">Loop </a>
                </div>
              </>
            ) : (
              <>
                <div className="font-medium text-[0.93rem] md:text-[1.15rem] xl:text-[1.35rem]">
                  {props.addition}
                </div>
                <div className="mt-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    className="w-3.5 md:w-5 xl:w-6 h-3.5 md:h-5 xl:h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                  </svg>
                </div>
              </>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}

export default EventsLine;
