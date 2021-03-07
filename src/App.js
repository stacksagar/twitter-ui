import React from 'react';
import LeftSide from './LeftSide';
import Post from './Post';

const App = () => {
  return (
    <main>
      <div className="twitter-container">
        <LeftSide />
        <div  className="md:w-7/12 border-l border-r full-sm">
          <nav className="bg-gray-100 h-16 px-4 border-b flex justify-start items-center"> 
            <div className="mx-3 cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-300 rounded-full">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1da1f2">
                <g>
                  <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                </g>
              </svg>
            </div>
            <div className="mx-3 ml-3 flex flex-col items-start justify-center">
              <div className="flex">
                <span className="text-lg font-bold text-gray-900 font-arial">
                  JavaScript
                </span>
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Verified account"
                  className="w-5 h-5"
                  fill="#1da1f2"
                >
                  <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                  </g>
                </svg>
              </div>
              <span className="text-sm text-gray-500">2,014 Tweets</span>
            </div> 
          </nav>

          {/* Here Cover Photo */}
          <div className="w-full h-52 bg-gray-900 border-2">
            <img
              className="w-full h-full object-cover"
              src="https://pbs.twimg.com/profile_banners/539345368/1517367231/1500x500"
              alt="twitter_cover_picture"
            />
          </div>

          <div className="relative flex justify-between items-center px-3 mt-2">
            <div>
              <div className="w-32 h-32 border-4 border-gray-100 rounded-full bg-gray-400 absolute -top-20">
                {/* Here add profile picture */}
                <img
                  className="w-full h-full rounded-full"
                  src="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg"
                  alt="twitter_profile_picture"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mx-1 p-1 hover:bg-blue-100 border border-blue-500 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1da1f2">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>

              <div className="mx-1 p-1 hover:bg-blue-100 border border-blue-500 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="#555555"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>

              <div className="mx-1 py-1 hover:bg-blue-100 px-4 flex items-center border border-blue-500 w-auto cursor-pointer rounded-full">
                <span className="text-blue-500">Follow</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pl-5 flex items-start justify flex-col">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900 font-arial">
                JavaScript
              </span>
              <svg
                viewBox="0 0 24 24"
                aria-label="Verified account"
                className="w-5 h-5"
                fill="#1da1f2"
              >
                <g>
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                </g>
              </svg>
            </div>
            <span className="text-gray-400 -mt-1">@javascript</span>
            <p className="my-2 text-gray-700">
              JavaScript content from the Oracle{' '}
              <a href="https://twitter.com/groundbreakers">@groundbreakers</a>{' '}
              team.
            </p>
            <div>
              <p className="mr-4 inline-flex items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                  <g>
                    <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                    <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
                  </g>
                </svg>
                Austin, TX
              </p>
              <a
                className="mr-4 inline-flex items-center"
                href="https://ecma-international.org"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                  <g>
                    <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                    <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                  </g>
                </svg>
                ecma-international.org
              </a>
              <p className="inline-flex items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                  <g>
                    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                    <circle cx="7.032" cy="8.75" r="1.285"></circle>
                    <circle cx="7.032" cy="13.156" r="1.285"></circle>
                    <circle cx="16.968" cy="8.75" r="1.285"></circle>
                    <circle cx="16.968" cy="13.156" r="1.285"></circle>
                    <circle cx="12" cy="8.75" r="1.285"></circle>
                    <circle cx="12" cy="13.156" r="1.285"></circle>
                    <circle cx="7.032" cy="17.486" r="1.285"></circle>
                    <circle cx="12" cy="17.486" r="1.285"></circle>
                  </g>
                </svg>
                Joined March 2012
              </p>
            </div>

            <p className="my-1">
              <span className="mr-3">
                <b>607</b> <span className="text-gray-500">Following</span>
              </span>
              <span>
                <b>51.2K</b> <span className="text-gray-500">Followers</span>
              </span>
            </p>

            <a
              className="flex my-2 text-sm"
              href="https://twitter.com/JavaScript/followers_you_follow"
            >
              <div className="relative w-10">
                <img
                  className="z-20 w-5 h-5 rounded-full absolute left-0 top-0"
                  src="https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_normal.jpg"
                  alt=""
                />
                <img
                  className="-z-10 w-5 h-5 rounded-full absolute left-2 top-0"
                  src="https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_normal.jpg"
                  alt=""
                />
              </div>
              Followed by Florin Pop Man technologist
              <img
                className="w-5 h-5 rounded-full mx-2"
                src="https://abs-0.twimg.com/emoji/v2/svg/1f468-1f3fb-200d-1f4bb.svg"
                alt=""
              />{' '}
              and Moshfegh Hamedani
            </a>

            <div className="flex justify-between items-center w-full">
              <div className="cursor-pointer border-b-2 border-blue-500 hover:bg-gray-100 py-3 px-10 font-sans text-blue-400 font-bold">
                Tweets
              </div>
              <div className="cursor-pointer hover:bg-gray-100 py-3 px-10 font-sans text-gray-500 hover:text-blue-400 font-bold none-sm">
                Tweets & replies
              </div>
              <div className="cursor-pointer hover:bg-gray-100 py-3 px-10 font-sans text-gray-500 hover:text-blue-400 font-bold">
                Media
              </div>
              <div className="cursor-pointer hover:bg-gray-100 py-3 px-10 font-sans text-gray-500 hover:text-blue-400 font-bold">
                Likes
              </div>
            </div>
          </div>

          <section>
            <Post
              name="JavaScript"
              title="JavaScript as a Server-Side Language in Oracle APEX 20.2 "
              profilePic="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg"
              coverPic="https://pbs.twimg.com/card_img/1366046262823432192/LxHYnjAp?format=png&name=small"
              link="https://t.co/MAd4VaRTr3?amp=1"
              footerText="In this post, we will take a closer look at the integration of GraalVM in Oracle Application Express 20.2."
              numbers={[1, 8, 13]}
              tags={true}
            />
            <Post
              name="JavaScript"
              title="JavaScript as a Server-Side Language in Oracle APEX 20.2 "
              profilePic="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg"
              coverPic="https://pbs.twimg.com/card_img/1366046262823432192/LxHYnjAp?format=png&name=small"
              link="https://t.co/MAd4VaRTr3?amp=1"
              footerText="In this post, we will take a closer look at the integration of GraalVM in Oracle Application Express 20.2."
              numbers={[1, 8, 13]}
              tags={true}
            />
            <Post
              name="JavaScript"
              title="JavaScript as a Server-Side Language in Oracle APEX 20.2 "
              profilePic="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg"
              coverPic="https://pbs.twimg.com/card_img/1366046262823432192/LxHYnjAp?format=png&name=small"
              link="https://t.co/MAd4VaRTr3?amp=1"
              footerText="In this post, we will take a closer look at the integration of GraalVM in Oracle Application Express 20.2."
              numbers={[1, 8, 13]}
              tags={true}
            />
            <Post
              name="JavaScript"
              title="JavaScript as a Server-Side Language in Oracle APEX 20.2 "
              profilePic="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg"
              coverPic="https://pbs.twimg.com/card_img/1366046262823432192/LxHYnjAp?format=png&name=small"
              link="https://t.co/MAd4VaRTr3?amp=1"
              footerText="In this post, we will take a closer look at the integration of GraalVM in Oracle Application Express 20.2."
              numbers={[1, 8, 13]}
              tags={true}
            />
          </section>
        </div>

        <div className="w-4/12 px-8 none-for-md">
          <nav className="py-1 relative">
            <input
              className="py-3 pl-14 pr-4 text-gray-800 w-full transition-none rounded-full bg-gray-100 focus:bg-transparent border focus:border-gray-500 focus:outline-none"
              type="search"
              placeholder="Search Twitter"
            />
            <svg
              className="w-4 h-4 absolute left-5 top-0 bottom-0 m-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#555555"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </nav>

          <div className="w-full h-64 bg-white rounded-lg mt-5 overflow-hidden">
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DsS5c6rVAAAft35?format=jpg&name=360x360"
              alt=""
            />
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DsSSNoSV4AEyVBA?format=jpg&name=360x360"
              alt=""
            />
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DnAQY_sUcAE6Op9?format=jpg&name=240x240"
              alt=""
            />
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DkhOgGqU0AA1xTH?format=jpg&name=240x240"
              alt=""
            />
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DkhE-SLUYAAO_sI?format=jpg&name=240x240"
              alt=""
            />
            <img
              className="w-1/3 h-1/3 inline"
              src="https://pbs.twimg.com/media/DgUtmvfUwAAjVyB?format=jpg&name=360x360"
              alt=""
            />
          </div>

          <div className="w-full rounded-lg overflow-hidden -mt-10 font-bold font-sans h-80 bg-gray-200">
            <h1 className="text-lg p-4">You might like</h1>

            <div>


              <div className="flex items-center justify-between hover:bg-gray-300 py-3 px-5 cursor-pointer">
                <div className="flex items-center">
                  <a className="mr-2" href="https://twitter.com/ThePSF">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_400x400.png"
                      alt=""
                    />
                  </a>
                  <div className="flex flex-col">
                    <a className="font-bold flex items-center text-xl" href="https://twitter.com/ThePSF">
                      <span className="truncate">Python S...</span>
                      <svg
                        viewBox="0 0 24 24"
                        aria-label="Verified account"
                        className="w-5 h-5"
                        fill="#1da1f2"
                      >
                        <g>
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                        </g>
                      </svg>
                    </a>
                    <p className="text-gray-500 text-xs">@python</p>
                  </div>
                </div>
                <button className="px-4 py-1 rounded-full border focus:outline-none border-blue-500 text-blue-500 bg-gray-100 hover:bg-gray-300 font-bold">
                  Follow
                </button>
              </div>


              <div className="flex items-center justify-between hover:bg-gray-300 py-3 px-5 cursor-pointer">
                <div className="flex items-center">
                  <a className="mr-2" href="https://twitter.com/reactjs">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                      alt=""
                    />
                  </a>
                  <div className="flex flex-col">
                    <a className="font-bold flex items-center text-xl" href="https://twitter.com/reactjs">
                      <span className="truncate">React</span>
                      <svg
                        viewBox="0 0 24 24"
                        aria-label="Verified account"
                        className="w-5 h-5"
                        fill="#1da1f2"
                      >
                        <g>
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                        </g>
                      </svg>
                    </a>
                    <p className="text-gray-500 text-xs">@reactjs</p>
                  </div>
                </div>
                <button className="px-4 py-1 rounded-full border focus:outline-none border-blue-500 text-blue-500 bg-gray-100 hover:bg-gray-300 font-bold">
                  Follow
                </button>
              </div>


              <div className="flex items-center justify-between hover:bg-gray-300 py-3 px-5 cursor-pointer">
                <div className="flex items-center">
                  <a className="mr-2" href="https://twitter.com/nodejs">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg"
                      alt=""
                    />
                  </a>
                  <div className="flex flex-col">
                    <a className="font-bold flex items-center text-xl" href="https://twitter.com/nodejs">
                      <span className="truncate">Node.js</span>
                      <svg
                        viewBox="0 0 24 24"
                        aria-label="Verified account"
                        className="w-5 h-5"
                        fill="#1da1f2"
                      >
                        <g>
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                        </g>
                      </svg>
                    </a>
                    <p className="text-gray-500 text-xs">@nodejs</p>
                  </div>
                </div>
                <button className="px-4 py-1 rounded-full border focus:outline-none border-blue-500 text-blue-500 bg-gray-100 hover:bg-gray-300 font-bold">
                  Follow
                </button>
              </div>

              <div className="p-3 hover:bg-gray-300 cursor-pointer"> 
                <span className="font-normal text-gray-600">See more</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
