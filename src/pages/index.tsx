import ArticleEvent from "@/components/ArticleEvent";
import EventsLine from "@/layouts/EventsLine";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Head from "next/head";
import React from "react";

function Home() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Head>
        <title>Creative tools for music makers | Ableton</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/favicon.f83afbda6c78.ico"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>
        <div>
          <div className="md:grid grid-cols-8 gap-x-16 lg:gap-x-24 xl:gap-x-28 2xl:gap-x-32 md:mb-24 xl:mb-28 2xl:mb-32">
            <div className="col-span-5">
              <a href="https://www.ableton.com/en/packs/spat-bundle/">
                <article className="relative text-[#FF8389] fill-[#FF8389]">
                  <div>
                    <img
                      src="https://ableton-production.imgix.net/uploads/homepage-teasers/HP_Spat_devices_2.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=311&ixjsv=1.1.3&q=50&w=467"
                      alt=""
                      className="w-full"
                    ></img>
                  </div>
                  <div className="absolute top-[11%] left-[9%] xl:left-[7%] min-[575px]:space-y-1">
                    <h1 className="text-[1.15rem] leading-8 font-medium pr-[7%] min-[420px]:text-[1.4rem] min-[420px]:leading-9 min-[575px]:text-[1.8rem] min-[575px]:leading-10 sm:text-[2.3rem] sm:leading-[2.9rem] xl:text-[3.5rem] xl:leading-[4rem] 2xl:text-[3.5rem] 2xl:leading-[4.1rem]">
                      SPAT Devices by Music Unit: Spatial Sound at the Cutting
                      Edge
                    </h1>
                    <div className="flex">
                      <p>
                        <span className="underline text-[0.85rem] font-medium min-[420px]:text-[0.9rem] min-[575px]:text-[1.1rem] sm:text-[1.3rem] 2xl:text-[1.7rem]">
                          Download the Packs
                        </span>
                      </p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          className="w-4 h-4 mt-1.5 -ml-0.5 sm:w-6 sm:h-6 sm:mt-1 2xl:w-8 2xl:h-8 2xl:mt-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div className="self-end col-span-3">
              <a href="https://www.ableton.com/en/blog/visualizing-sound-a-beginners-guide-to-using-touchdesigner-with-live/">
                <article className="relative text-[#B1C5FF] fill-[#B1C5FF] max-md:mt-[9%] max-md:ml-[9%]">
                  <div>
                    <img
                      src="https://ableton-production.imgix.net/uploads/homepage-teasers/cover_audio_wheel.png?auto=format&dpr=2.0&fit=crop&fm=jpg&h=464&ixjsv=1.1.3&q=50&w=697"
                      alt=""
                      className="w-full"
                    ></img>
                  </div>
                  <div className="absolute top-[11%] left-[9%] xl:left-[7%]">
                    <h1 className="text-[1.15rem] leading-8 font-medium max-md:pr-[7%] md:pr-[5%] min-[420px]:max-md:text-[1.4rem] min-[420px]:max-md:leading-9 min-[575px]:max-md:text-[1.8rem] min-[575px]:max-md:leading-10 sm:max-md:text-[2.3rem] sm:max-md:leading-[2.9rem] xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2.2rem] 2xl:leading-[3rem]">
                      Visualizing Sound: A Beginner’s Guide to Using
                      TouchDesigner with Live
                    </h1>
                    <div className="flex">
                      <p>
                        <span className="underline text-[0.85rem] font-medium min-[420px]:max-md:text-[0.9rem] min-[575px]:max-md:text-[1.1rem] sm:max-md:text-[1.3rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                          Find out more
                        </span>
                      </p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          className="w-5 h-5 sm:w-6 sm:h-6 sm:max-xl:mt-1.5 md:w-4 md:h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 mt-1 -ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div className="col-span-3"></div>

            <div className="col-span-3 -mt-7 xl:-mt-16">
              <a href="https://www.ableton.com/en/blog/circuit-breaking-five-creative-tools-for-arrangements/">
                <article className="relative text-[#00D2BE] fill-[#00D2BE] max-md:mr-[7%]">
                  <div>
                    <img
                      src="https://ableton-production.imgix.net/uploads/homepage-teasers/arrangement_approaches_DSC1168.JPG?auto=format&dpr=1.5&fit=crop&fm=jpg&h=288&ixjsv=1.1.3&q=66&w=432"
                      alt=""
                      className="w-full"
                    ></img>
                  </div>
                  <div className="absolute top-[11%] left-[9%] xl:left-[7%]">
                    <h1 className="text-[1.15rem] leading-8 font-medium max-md:pr-[7%] md:pr-[5%] min-[420px]:max-md:text-[1.4rem] min-[420px]:max-md:leading-9 min-[575px]:max-md:text-[1.8rem] min-[575px]:max-md:leading-10 sm:max-md:text-[2rem] sm:max-md:leading-[2.9rem] xl:text-[1.7rem] xl:leading-[2.5rem] 2xl:text-[2.2rem] 2xl:leading-[3rem]">
                      Circuit Breaking: Five Creative Tools for Arrangements
                    </h1>
                    <div className="flex">
                      <p>
                        <span className="underline text-[0.85rem] font-medium min-[420px]:max-md:text-[0.9rem] min-[575px]:max-md:text-[1.1rem] sm:max-md:text-[1.3rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                          Watch the video
                        </span>
                      </p>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          className="w-5 h-5 sm:w-6 sm:h-6 sm:max-xl:mt-1.5 md:w-4 md:h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 mt-1 -ml-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>

            <div className="col-span-2"></div>
          </div>
        </div>
        <div>
          <section>
            <EventsLine
              title="The latest from Ableton"
              addition="See all posts"
            >
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-10 xl:gap-14">
                <ArticleEvent
                  src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_Shima9.jpg.600x340_q85_crop_upscale.jpg"
                  title="Shima: Full Autonomy Over Everything"
                  link="https://www.ableton.com/en/blog/shima-full-autonomy-over-everything/"
                  label="Artists"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_Loop_Blog_Marina_Herlop15.jpg.600x340_q85_crop_upscale.jpg"
                  title="Marina Herlop: Voice and Piano Extended To Infinity"
                  link="https://www.ableton.com/en/blog/marina-herlop-voice-and-piano-extended-to-infinity/"
                  label="Artists"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_392_Year_RoundUp.jpg.600x340_q85_crop_upscale.jpg"
                  title="A Look Back at Eight Standout Features and Videos from 2022"
                  link="https://www.ableton.com/en/blog/a-look-back-at-eight-standout-features-and-videos-from-2022/"
                  label="News"
                ></ArticleEvent>
              </div>
            </EventsLine>
            <EventsLine title="In focus: techno" addition="Discover more">
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-10 xl:gap-14">
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/Screenshot_2023-01-30_at_16.41.41.png?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Andrey Sirotkin: In Ukraine, Music Is My Shelter"
                  link="https://www.ableton.com/en/blog/andrey-sirotkin-in-ukraine-music-is-my-shelter/"
                  label="Artists"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/BL_Modeselektor.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Extended Sounds by Modeselektor"
                  link="https://www.ableton.com/en/packs/extended-sounds-modeselektor/"
                  label="Packs"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/ABL302_MorphFilter5.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Taking a Closer Look at Wavetable’s Morph Filter"
                  link="https://www.ableton.com/en/blog/taking-a-closer-look-at-wavetables-morph-filter/"
                  label="Tutorials"
                ></ArticleEvent>
              </div>
            </EventsLine>
            <EventsLine
              title="One Thing videos: monthly creative tips"
              addition="See all videos"
            >
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-10 xl:gap-14">
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/One_Thing_Giulio_Maresca_Title.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Sketchbook
                project"
                  link="https://www.youtube.com/watch?v=4evhTCGfjDc"
                  label="Video"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/One_Thing_Aphir_Title.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Formant-shifting vocals"
                  link="https://www.youtube.com/watch?v=Vbj3R49JT-g"
                  label="Video"
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/f0b64096-fc4b-11ec-a546-525400c74c14.jpeg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Sidechained variations"
                  link="https://www.youtube.com/watch?v=RYLdwzd3dxA"
                  label="Video"
                ></ArticleEvent>
              </div>
            </EventsLine>
            <EventsLine
              title="Videos and features from Loop events"
              addition="See more"
            >
              <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-10 xl:gap-14">
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/blog_hero_image_800x400.jpg__3333.0x1667.0_q85_subsampling-2.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Five Perspectives on Working with Environmental Noise"
                  link="https://www.ableton.com/en/blog/loop-five-perspectives-on-working-with-environmental-noise/"
                  label=""
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/1_blog_loop_session_grand_river_blog.jpg__3333.0x1667.0_q85_sub_9AhNVfr.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="Loop Session: In the Studio with Grand River"
                  link="https://www.ableton.com/en/blog/catch-up-on-the-first-loop-session-with-grand-river/"
                  label=""
                ></ArticleEvent>
                <ArticleEvent
                  src="https://ableton-production.imgix.net/uploads/content-clusters/333_LizTeusch3.jpg?auto=format&dpr=2.0&fit=crop&fm=jpg&h=161&ixjsv=1.1.3&q=50&w=287"
                  title="The Best Microphone (Is the One You Already Have): A Workshop with Liz Teutsch"
                  link="https://www.ableton.com/en/blog/the-best-microphone-is-the-one-you-already-have-a-workshop-with-liz-teutsch/"
                  label=""
                ></ArticleEvent>
              </div>
            </EventsLine>
          </section>
        </div>
        <footer>
          <div className="bg-[#EEEEEE] mt-10 md:mt-14 xl:mt-18 py-[8%] px-[10%] text-[#0000FF] font-medium min-[575px]:text-center min-[575px]:py-[5%] md:space-x-1 xl:space-x-2 xl:py-[4%] md:text-[1.15rem] xl:text-[1.4rem]">
            <span className="text-black">More: </span>
            <a href="https://www.ableton.com/en/blog/">All posts </a>
            <a href="https://www.ableton.com/en/blog/categories/artists/">
              Artists{" "}
            </a>
            <a href="https://www.ableton.com/en/blog/categories/news/">News </a>
            <a href="https://www.ableton.com/en/blog/categories/downloags/">
              Downloads{" "}
            </a>
            <a href="https://www.ableton.com/en/blog/categories/tutorials/">
              Tutorials{" "}
            </a>
            <a href="https://www.ableton.com/en/blog/categories/videos/">
              Videos{" "}
            </a>
            <a href="https://www.ableton.com/en/blog/categories/loop/">Loop </a>
            <a href="https://www.ableton.com/en/blog/categories/one-thing/">
              One Thing{" "}
            </a>
          </div>
        </footer>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
