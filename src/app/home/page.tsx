import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="main-container m-auto flex flex-col ">
      {/* nav bar */}
      <div className="fixed left-0 w-[100%]">
        <div className="header-nav py-4  backdrop-blur-2xl ">
          <div className="w-[87%] flex items-end justify-between m-auto">
            <Link href="/">
              <div className="font-extrabold text-2xl text-[#00D8FF]">
                Rijan
              </div>
            </Link>
            <div className="flex gap-12">
              {/* <div>My Skills</div>
              <div>My Projects</div>
              <div>Experience</div>
              <div>Contact Me</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="hero-section flex items-center justify-evenly  py-32  ">
        <div className="hero-left flex flex-col gap-4">
          <div className="text-4xl">Hi, I’m Rijan Niraula</div>
          <div className="text-[#00D8FF]">
            Frontend Developer | Graphics Designer
          </div>
          <div>
            I am a web developer and a graphics designer based in Biratnagar,
            Nepal and i’m very passionate and dedicated to my work
          </div>
          <div>
            <Link href="/">
              <button className="cursor-pointer hover:bg-[#32D0F4] hover:text-[#e9e9e9] py-2 px-5 bg-[#e9e9e9] rounded-3xl text-black font-bold w-fit">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <Image
              src="/profile-photo.png"
              alt="Rijan Niraula"
              width={300}
              height={300}
              className="rounded-full shadow-[0px_0px_98.3px_20px_#343434] "
            />
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="skills-container py-8 bg-[#1f1f1f] flex flex-col items-center w-[100%]">
        <div className="text-center text-[#00D8FF] text-3xl">Skills</div>
        <div className="skills-cards flex flex-wrap  justify-around py-10 w-[87%] gap-8">
          {/* html */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="60"
              height="68"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.46045 61.2026L0 0H60L54.5336 61.1933L29.9634 68L5.46045 61.2026Z"
                fill="#E44D26"
              />
              <path d="M30 63L50.2383 57.4794L55 5H30V63Z" fill="#F16529" />
              <path
                d="M30 28.0117H19.9734L19.2808 20.4164H30V13H11L11.1817 14.9896L13.0436 35.4286H30V28.0117ZM30 47.2737L29.9664 47.2829L21.5281 45.0518L20.9892 39.1374H13.3822L14.4437 50.7825L29.9653 55L30 54.9908V47.2737Z"
                fill="#EBEBEB"
              />
              <path
                d="M30 28.0129V35.4304H39.3394L38.4593 45.05L30 47.2828V55L45.5491 50.7854L45.6631 49.5324L47.4454 30.0048L47.63 28.0129H45.5865H30ZM30 13V20.417H48.3205L48.4726 18.7505L48.8187 14.9898L49 13H30Z"
                fill="white"
              />
            </svg>

            <div className="text-center font-bold text-black pt-7">HTML</div>
          </div>

          {/* css */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="72"
              height="80"
              viewBox="0 0 72 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path
                  d="M11.4602 62.2024L6 1.00037H66L60.5344 62.1931L35.9636 69.0004L11.4602 62.2024Z"
                  fill="#1572B6"
                />
              </g>
              <path
                d="M36 64.0004L56.2386 58.4798L61 6.00037H36V64.0004Z"
                fill="#33A9DC"
              />
              <path
                d="M36 28.3946H46.0265L46.7189 20.6062H36V13.0004H55L54.8181 15.0411L52.9555 36.0004H36V28.3946Z"
                fill="white"
              />
              <path
                d="M36 47.207L35.9678 47.2167L27.8425 44.9671L27.3229 39.0004H20L21.0218 50.7472L35.9668 55.0004L36 54.9906V47.207Z"
                fill="#EBEBEB"
              />
              <path
                d="M45.3827 35.0004L44.4682 44.9917L36 47.2379V55.0004L51.565 50.7615L51.6792 49.5009L53 35.0004H45.3827Z"
                fill="white"
              />
              <path
                d="M36 13.0004V20.6058H17.6789L17.527 18.8968L17.1815 15.041L17 13.0004H36ZM35.9742 28.3949V36.0004H27.6336L27.4816 34.2913L27.1356 30.4355L26.9546 28.3949H35.9742Z"
                fill="#EBEBEB"
              />
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0"
                  y="0.000366211"
                  width="72"
                  height="80"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="text-center font-bold text-black pt-4">CSS</div>
          </div>

          {/* js */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path d="M6 1H74V69H6V1Z" fill="#F5DE19" />
              </g>
              <path
                d="M51.8861 54.381C52.4687 55.5618 53.3726 56.5543 54.494 57.2444C55.6154 57.9345 56.9088 58.2942 58.2255 58.2822C60.8831 58.2822 62.5826 56.9533 62.5826 55.1124C62.5826 52.918 60.8368 52.1329 57.9109 50.8528L56.3066 50.1652C51.6739 48.1926 48.6018 45.7227 48.6018 40.4999C48.6018 35.6892 52.2591 32.0245 57.9963 32.0245C59.8534 31.8907 61.7089 32.3065 63.3313 33.2201C64.9538 34.1337 66.2715 35.5046 67.1201 37.1619L62.1047 40.3683C61.7777 39.5466 61.2089 38.8436 60.4734 38.3524C59.738 37.8613 58.8708 37.6051 57.9865 37.6179C57.6007 37.5793 57.211 37.6214 56.8424 37.7417C56.4738 37.862 56.1343 38.0578 55.8455 38.3165C55.5567 38.5753 55.325 38.8913 55.1651 39.2446C55.0052 39.5978 54.9206 39.9805 54.9168 40.3683C54.9168 42.2921 56.1091 43.0723 58.8618 44.2695L60.4662 44.9571C65.9181 47.2954 69 49.6775 69 55.0344C69 60.8107 64.4625 63.9755 58.3693 63.9755C55.9955 64.1253 53.6289 63.5856 51.5547 62.4215C49.4804 61.2574 47.7869 59.5185 46.678 57.4142L51.8861 54.381ZM29.2227 54.9369C30.2297 56.7241 31.1465 58.2359 33.3506 58.2359C35.4572 58.2359 36.7885 57.4117 36.7885 54.2054V32.3903H43.2035V54.2907C43.2035 60.9326 39.3023 63.956 33.6237 63.956C31.6164 64.0657 29.6229 63.5655 27.9053 62.5211C26.1876 61.4766 24.8262 59.9369 24 58.1042L29.2227 54.9369Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="text-center font-bold text-black pt-4">
              JavaScript
            </div>
          </div>

          {/* tailwind */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="82"
              height="82"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_15_45)">
                <path
                  d="M59.5938 1H22.4062C13.3453 1 6 8.34533 6 17.4062V54.5938C6 63.6547 13.3453 71 22.4062 71H59.5938C68.6547 71 76 63.6547 76 54.5938V17.4062C76 8.34533 68.6547 1 59.5938 1Z"
                  fill="#242938"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.6953 31.0781C30.3359 24.5156 34.4375 21.2344 41 21.2344C50.8438 21.2344 52.0742 28.6172 56.9961 29.8477C60.2773 30.6683 63.1484 29.4379 65.6094 26.1562C63.9688 32.7188 59.8672 36 53.3047 36C43.4609 36 42.2305 28.6172 37.3086 27.3867C34.0273 26.5664 31.1562 27.7969 28.6953 31.0781ZM16.3906 45.8438C18.0312 39.2812 22.1328 36 28.6953 36C38.5391 36 39.7695 43.3828 44.6914 44.6133C47.9727 45.434 50.8438 44.2035 53.3047 40.9219C51.6641 47.4844 47.5625 50.7656 41 50.7656C31.1562 50.7656 29.9258 43.3828 25.0039 42.1523C21.7227 41.3317 18.8516 42.5621 16.3906 45.8438Z"
                  fill="url(#paint0_linear_15_45)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_15_45"
                  x="0"
                  y="0"
                  width="82"
                  height="82"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_15_45"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_15_45"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_15_45"
                  x1="29.6523"
                  y1="21.2344"
                  x2="50.707"
                  y2="51.7227"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32B1C1" />
                  <stop offset="1" stop-color="#14C6B7" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-center font-bold text-black pt-4">
              Tailwind
            </div>
          </div>

          {/* React */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.5938 0H16.4062C7.34533 0 0 7.34533 0 16.4062V53.5938C0 62.6547 7.34533 70 16.4062 70H53.5938C62.6547 70 70 62.6547 70 53.5938V16.4062C70 7.34533 62.6547 0 53.5938 0Z"
                fill="#242938"
              />
              <path
                d="M35.0003 40.1819C37.8178 40.1819 40.1015 37.8978 40.1015 35.0806C40.1015 32.2634 37.8178 29.9794 35.0003 29.9794C32.1828 29.9794 29.899 32.2634 29.899 35.0806C29.899 37.8978 32.1831 40.1819 35.0003 40.1819Z"
                fill="#00D8FF"
              />
              <path
                d="M35.0005 24.7086C41.8496 24.7086 48.2122 25.6914 53.0097 27.3432C58.7899 29.333 62.3438 32.3493 62.3438 35.0806C62.3438 37.9269 58.5774 41.1313 52.3701 43.1878C47.6774 44.7426 41.5021 45.5541 35.0005 45.5541C28.3347 45.5541 22.0224 44.7923 17.2766 43.1706C11.2725 41.1184 7.65625 37.8727 7.65625 35.0806C7.65625 32.3714 11.0496 29.3784 16.7486 27.3916C21.5638 25.7127 28.0834 24.7086 34.9995 24.7086H35.0005Z"
                stroke="#00D8FF"
                stroke-width="0.556938"
              />
              <path
                d="M25.9714 29.9244C29.3932 23.9914 33.4228 18.9705 37.2504 15.6401C41.8616 11.6268 46.2503 10.0551 48.6161 11.4193C51.0817 12.8412 51.9761 17.7051 50.6568 24.1095C49.6601 28.9513 47.2773 34.706 44.0292 40.3383C40.699 46.1128 36.8859 51.2003 33.1106 54.5002C28.3333 58.6761 23.7147 60.1874 21.2961 58.7926C18.9492 57.4402 18.0518 53.0048 19.1778 47.0753C20.1291 42.0651 22.5165 35.9157 25.9703 29.9244H25.9714Z"
                stroke="#00D8FF"
                stroke-width="0.556938"
              />
              <path
                d="M25.9798 40.3534C22.5484 34.4269 20.2122 28.4271 19.2371 23.4478C18.0632 17.4484 18.8931 12.8614 21.257 11.4932C23.7204 10.0669 28.3806 11.7212 33.2702 16.0628C36.9671 19.3452 40.7632 24.2827 44.0206 29.9094C47.3604 35.6784 49.8635 41.5232 50.8372 46.4417C52.0693 52.6663 51.0721 57.4222 48.6557 58.8208C46.3112 60.1782 42.0207 58.7412 37.4458 54.8043C33.5805 51.4782 29.4451 46.3389 25.9798 40.3534Z"
                stroke="#00D8FF"
                stroke-width="0.556938"
              />
            </svg>

            <div className="text-center font-bold text-black pt-4">
              React.js
            </div>
          </div>

          {/* Next */}
          <div className="px-14 py-8 bg-[#d9d9d9] rounded-2xl  ">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                fill="black"
              />
              <path
                d="M58.1421 61.2577L26.8885 21H21V48.9882H25.7108V26.9828L54.4441 64.1063C55.7388 63.2401 56.9742 62.2884 58.1421 61.2577Z"
                fill="url(#paint0_linear_0_1)"
              />
              <path
                d="M44.7223 21H49.3891V49H44.7223V21Z"
                fill="url(#paint1_linear_0_1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="2087.33"
                  y1="2451.55"
                  x2="3327.65"
                  y2="3988.88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="278.06"
                  y1="21"
                  x2="270.164"
                  y2="2077.23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-center font-bold text-black pt-4">Next.js</div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects-container py-8  flex flex-col items-center w-[100%] ">
        <div className="text-center text-[#00D8FF] text-3xl">Projects</div>
        <div className="project-cards flex flex-wrap justify-around py-10 w-[87%] gap-8">
          <div className="bg-[#e9e9e9] h-[450px] w-[355px] rounded-2xl p-2 flex flex-col ">
            <Image
              src="/image.png"
              alt="Rijan Niraula"
              width={350}
              height={300}
              className="rounded-[6px] p-3 "
            />
            <div className="text-black p-3 font-bold text-2xl">MyMovieList</div>
            <div className="text-black p-3">
              Web-based movie rating and recommendation platform using React.js
              and Node.js
            </div>
          </div>
          {/* <div className="bg-[#e9e9e9] h-[450px] w-[355px] rounded-2xl p-2 flex flex-col">
            Project 2
          </div>
          <div className="bg-[#e9e9e9] h-[450px] w-[355px] rounded-2xl p-2">
            Project 1
          </div> */}
        </div>
      </div>

      {/* experience */}
      <div className="experience-container bg-[#1f1f1f] py-8 flex items-center justify-center">
        <div className="w-[87%] flex flex-col justify-center">
          <div className="text-center text-[#00D8FF] text-3xl">Experience</div>
          <div className=" flex flex-wrap justify-between">
            <div className="exp-left">
              <div className="text-4xl font-bold py-4">Education</div>
              <div className="flex">
                <div>1.  </div>
                <div>
                  <div className="font-bold">
                    Bachelors in Science of Computer Science and Information
                    Technology
                  </div>
                  <div className="font-bold">
                    Birat Kshitiz College affiliated to Tribhuvan University
                  </div>
                  <div>Biratnagar, Morang, Nepal</div>
                  <div>[ 2020 - Present ]</div>
                </div>
              </div>
            </div>
            <div className="exp-right">
              <div className="text-4xl font-bold py-4">Experience</div>
              <div className="flex">
                <div>1. </div>
                <div className="font-bold">
                  <div>Graphics Designer (Remote)</div>
                  <div>Pinnacle Sprach Akademie</div>
                  <div> Putalisadak, Kathmandu, Nepal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className="contact-container py-8">
        <div>
          <div className=" flex flex-col justify-center">
            <div className="text-center text-[#00D8FF] text-3xl">
              Contact Me
            </div>
          </div>
          <div className=" flex justify-center py-8 ">
            <div className="  w-[87%] flex justify-between items-center gap-16 ">
              <div>
                <form className="flex flex-col gap-6 " method="POST" action="/">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                    className="bg-[#D9D9D9] rounded-[8px] text-black p-3 w-[450px]"
                    required
                  />
                  {/* <br /> */}
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    className="bg-[#D9D9D9] rounded-[8px] text-black p-3 "
                    required
                  />
                  {/* <br /> */}
                  <input
                    type="text"
                    placeholder="Enter your Mobile No. (Optional)"
                    name="mobile"
                    className="bg-[#D9D9D9] rounded-[8px] text-black p-3 "
                  />
                  {/* <br /> */}
                  <textarea
                    placeholder="Enter your Message"
                    name="message"
                    className="bg-[#D9D9D9] rounded-[8px] text-black p-3 "
                    required
                  />
                  <input
                    type="submit"
                    className="bg-[#00D8FF] rounded-[12px] p-2 font-black text-black"
                  />
                </form>
              </div>
              {/* <div className="border-1 h-[100%]"></div> */}
              <div>
                <div className="">
                  Feel free to get in touch with me. I am open to discussing new
                  projects and opportunities to be part of your vision
                </div>

                {/* email */}
                <div className=" p-4 flex  gap-4 items-center">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.3438 0H12.6562C5.6664 0 0 5.6664 0 12.6562V41.3438C0 48.3336 5.6664 54 12.6562 54H41.3438C48.3336 54 54 48.3336 54 41.3438V12.6562C54 5.6664 48.3336 0 41.3438 0Z"
                      fill="#F4F2ED"
                    />
                    <path
                      d="M8.78259 42.8285H15.4942V26.5287L5.90625 19.3379V39.9522C5.90625 41.5437 7.19592 42.8285 8.78259 42.8285Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M38.5056 42.8285H45.2174C46.809 42.8285 48.0938 41.5388 48.0938 39.9521V19.3376L38.5056 26.5287"
                      fill="#34A853"
                    />
                    <path
                      d="M38.5056 14.0642V26.5287L48.0938 19.3378V15.5021C48.0938 11.9451 44.0332 9.91714 41.1904 12.0506"
                      fill="#FBBC04"
                    />
                    <path
                      d="M15.4944 26.5287V14.0644L27 22.6932L38.5056 14.064V26.5285L27 35.1579"
                      fill="#EA4335"
                    />
                    <path
                      d="M5.90625 15.5024V19.3376L15.4942 26.5287V14.0644L12.8096 12.0508C9.96195 9.91739 5.90625 11.9453 5.90625 15.5024Z"
                      fill="#C5221F"
                    />
                  </svg>
                  <div>
                    <div className="font-bold">Email Me</div>
                    <div>rijann38@gmail.com</div>
                  </div>
                </div>

                {/* linkedin */}
                <div className=" p-4 flex  gap-4 items-center">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <g clip-path="url(#clip0_24_52)"> */}
                    <path
                      d="M41.3438 0H12.6562C5.6664 0 0 5.6664 0 12.6562V41.3438C0 48.3336 5.6664 54 12.6562 54H41.3438C48.3336 54 54 48.3336 54 41.3438V12.6562C54 5.6664 48.3336 0 41.3438 0Z"
                      fill="white"
                    />
                    <path
                      d="M41.3438 0H12.6562C5.6664 0 0 5.6664 0 12.6562V41.3438C0 48.3336 5.6664 54 12.6562 54H41.3438C48.3336 54 54 48.3336 54 41.3438V12.6562C54 5.6664 48.3336 0 41.3438 0Z"
                      fill="#0A66C2"
                    />
                    <path
                      d="M38.9633 45.9179H45.1375C45.3612 45.9179 45.5758 45.8291 45.734 45.6709C45.8922 45.5127 45.9812 45.2981 45.9812 45.0744L45.9844 32.0296C45.9844 25.2115 44.5152 19.9707 36.5475 19.9707C33.5186 19.8581 30.6623 21.4194 29.121 24.0266C29.1134 24.0393 29.102 24.0491 29.0883 24.0547C29.0747 24.0602 29.0596 24.0611 29.0453 24.0573C29.0311 24.0534 29.0185 24.045 29.0095 24.0334C29.0005 24.0217 28.9956 24.0074 28.9955 23.9927V21.4439C28.9955 21.2201 28.9066 21.0055 28.7483 20.8473C28.5901 20.6891 28.3755 20.6002 28.1517 20.6002H22.2925C22.0687 20.6002 21.8541 20.6891 21.6959 20.8473C21.5377 21.0055 21.4488 21.2201 21.4488 21.4439V45.0731C21.4488 45.2969 21.5377 45.5115 21.6959 45.6697C21.8541 45.828 22.0687 45.9169 22.2925 45.9169H28.4662C28.69 45.9169 28.9046 45.828 29.0628 45.6697C29.2211 45.5115 29.31 45.2969 29.31 45.0731V33.3929C29.31 30.0902 29.9365 26.8918 34.031 26.8918C38.0673 26.8918 38.1196 30.6709 38.1196 33.6068V45.0742C38.1196 45.298 38.2085 45.5126 38.3667 45.6708C38.5249 45.829 38.7395 45.9179 38.9633 45.9179ZM8.01562 12.5778C8.01562 15.0803 10.0759 17.1395 12.5786 17.1395C15.0808 17.1393 17.1397 15.0789 17.1397 12.5767C17.1393 10.0746 15.0801 8.01562 12.5778 8.01562C10.0748 8.01562 8.01562 10.0752 8.01562 12.5778ZM9.48354 45.9179H15.6655C15.8893 45.9179 16.1039 45.829 16.2621 45.6708C16.4203 45.5126 16.5092 45.298 16.5092 45.0742V21.4439C16.5092 21.2201 16.4203 21.0055 16.2621 20.8473C16.1039 20.6891 15.8893 20.6002 15.6655 20.6002H9.48354C9.25976 20.6002 9.04515 20.6891 8.88692 20.8473C8.72868 21.0055 8.63979 21.2201 8.63979 21.4439V45.0742C8.63979 45.298 8.72868 45.5126 8.88692 45.6708C9.04515 45.829 9.25976 45.9179 9.48354 45.9179Z"
                      fill="white"
                    />
                    {/* </g> */}
                    <defs>
                      <clipPath id="clip0_24_52">
                        <rect width="54" height="54" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div>
                    <div className="font-bold">Find me in LinkedIn</div>
                    <div>in/rijan-niraula</div>
                  </div>
                </div>

                {/* whatsapp */}
                <div className=" p-4 flex  gap-4 items-center">
                  <svg
                    width="55"
                    height="62"
                    viewBox="0 0 55 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_24_57)">
                      <path
                        d="M27.125 14.8703C18.3215 14.8703 11.1648 22.027 11.1527 30.8305C11.1527 33.8457 12.0004 36.7883 13.5988 39.3191L13.9742 39.9246L12.3637 45.8098L18.4062 44.2234L18.9875 44.5746C21.4336 46.0277 24.243 46.8027 27.1129 46.8027H27.125C35.9164 46.8027 43.2668 39.6461 43.2668 30.8426C43.2668 26.5801 41.4262 22.5719 38.4109 19.5566C35.3836 16.5293 31.3875 14.8703 27.125 14.8703ZM36.5098 37.6844C36.1102 38.8105 34.1969 39.8277 33.2766 39.9609C31.7508 40.191 30.5641 40.0699 27.5246 38.7621C22.7172 36.6793 19.5688 31.8355 19.3266 31.5207C19.0844 31.2059 17.3648 28.9172 17.3648 26.5559C17.3648 24.1945 18.6 23.032 19.048 22.5477C19.484 22.0633 20.0047 21.9422 20.3316 21.9422C20.6465 21.9422 20.9734 21.9422 21.252 21.9543C21.5426 21.9664 21.9422 21.8453 22.3297 22.7777C22.7293 23.7344 23.6859 26.0957 23.807 26.3379C23.9281 26.5801 24.0129 26.8586 23.8434 27.1734C22.923 29.0141 21.9422 28.9414 22.4387 29.7891C24.2914 32.9738 26.1441 34.0758 28.9656 35.4926C29.45 35.7348 29.7285 35.6984 30.007 35.3715C30.2855 35.0566 31.2059 33.9668 31.5207 33.4945C31.8355 33.0102 32.1625 33.0949 32.5984 33.2523C33.0344 33.4098 35.3957 34.5723 35.8801 34.8145C36.3645 35.0566 36.6793 35.1777 36.8004 35.3715C36.9094 35.6016 36.9094 36.5703 36.5098 37.6844ZM48.4375 3.875H5.8125C2.60352 3.875 0 6.47852 0 9.6875V52.3125C0 55.5215 2.60352 58.125 5.8125 58.125H48.4375C51.6465 58.125 54.25 55.5215 54.25 52.3125V9.6875C54.25 6.47852 51.6465 3.875 48.4375 3.875ZM27.1129 50.0359C23.8918 50.0359 20.7313 49.2246 17.934 47.6988L7.75 50.375L10.4746 40.4211C8.79141 37.5148 7.90742 34.209 7.90742 30.8184C7.91953 20.2348 16.5293 11.625 27.1129 11.625C32.2473 11.625 37.0668 13.623 40.6996 17.2559C44.3203 20.8887 46.5 25.7082 46.5 30.8426C46.5 41.4262 37.6965 50.0359 27.1129 50.0359Z"
                        fill="#14AE5C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_57">
                        <rect width="54.25" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div>
                    <div className="font-bold">Call me</div>
                    <div>+9779863018630</div>
                  </div>
                </div>

                {/* social media */}
                <div className="p-4">
                  <div className=" font-bold">Social Media</div>
                  <div className="flex pt-2 gap-16">
                    <div className="flex gap-4 items-center">
                      <svg
                        width="55"
                        height="55"
                        viewBox="0 0 55 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50.123 2.07544H4.88124C3.3316 2.07544 2.07538 3.33167 2.07538 4.8813V50.1231C2.07538 51.6727 3.3316 52.929 4.88124 52.929H50.123C51.6727 52.929 52.9289 51.6727 52.9289 50.1231V4.8813C52.9289 3.33167 51.6727 2.07544 50.123 2.07544Z"
                          fill="#3D5A98"
                        />
                        <path
                          d="M37.1594 52.9246V33.232H43.768L44.7563 25.5578H37.1594V20.6594C37.1594 18.4379 37.7781 16.9211 40.9621 16.9211H45.027V10.0461C43.0586 9.84131 41.0805 9.74377 39.1016 9.75389C33.2492 9.75389 29.2188 13.3203 29.2188 19.8988V25.5578H22.6102V33.232H29.2188V52.9246H37.1594Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <div className="font-bold">Facebook</div>
                        <div>/rijanniraula8</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <svg
                        width="49"
                        height="49"
                        viewBox="0 0 49 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_24_66)">
                          <path
                            d="M37.5156 0H11.4844C5.14173 0 0 5.14173 0 11.4844V37.5156C0 43.8583 5.14173 49 11.4844 49H37.5156C43.8583 49 49 43.8583 49 37.5156V11.4844C49 5.14173 43.8583 0 37.5156 0Z"
                            fill="url(#paint0_radial_24_66)"
                          />
                          <path
                            d="M37.5156 0H11.4844C5.14173 0 0 5.14173 0 11.4844V37.5156C0 43.8583 5.14173 49 11.4844 49H37.5156C43.8583 49 49 43.8583 49 37.5156V11.4844C49 5.14173 43.8583 0 37.5156 0Z"
                            fill="url(#paint1_radial_24_66)"
                          />
                          <path
                            d="M24.5017 5.35938C19.3035 5.35938 18.651 5.38215 16.6095 5.47498C14.5718 5.56839 13.1808 5.89091 11.9638 6.36426C10.7048 6.85311 9.63692 7.50714 8.57309 8.57136C7.50829 9.63539 6.85426 10.7032 6.36388 11.9617C5.88919 13.1791 5.56629 14.5706 5.4746 16.6074C5.3833 18.6491 5.35938 19.3018 5.35938 24.5002C5.35938 29.6986 5.38234 30.349 5.47498 32.3905C5.56877 34.4282 5.89129 35.8192 6.36426 37.0362C6.85349 38.2952 7.50753 39.3631 8.57175 40.4269C9.63539 41.4917 10.7032 42.1473 11.9614 42.6361C13.1793 43.1095 14.5704 43.432 16.6077 43.5254C18.6495 43.6182 19.3014 43.641 24.4994 43.641C29.6982 43.641 30.3486 43.6182 32.3901 43.5254C34.4279 43.432 35.8203 43.1095 37.0383 42.6361C38.2968 42.1473 39.3631 41.4917 40.4265 40.4269C41.4913 39.3631 42.1452 38.2952 42.6357 37.0367C43.1062 35.8192 43.4293 34.4279 43.525 32.3909C43.6167 30.3494 43.6406 29.6986 43.6406 24.5002C43.6406 19.3018 43.6167 18.6495 43.525 16.6077C43.4293 14.57 43.1062 13.1793 42.6357 11.9623C42.1452 10.7032 41.4913 9.63539 40.4265 8.57136C39.3619 7.50676 38.2971 6.85273 37.0371 6.36445C35.8169 5.89091 34.4252 5.5682 32.3875 5.47498C30.3457 5.38215 29.6957 5.35938 24.4958 5.35938H24.5017ZM22.7846 8.80871C23.2943 8.80794 23.863 8.80871 24.5017 8.80871C29.6125 8.80871 30.2181 8.82708 32.2363 8.91877C34.1025 9.00413 35.1154 9.31593 35.7901 9.57797C36.6834 9.9248 37.3202 10.3396 37.9897 11.0097C38.6597 11.6796 39.0742 12.3176 39.422 13.2109C39.6841 13.8846 39.9963 14.8975 40.0812 16.7637C40.1729 18.7815 40.1928 19.3875 40.1928 24.4958C40.1928 29.604 40.1729 30.2102 40.0812 32.2278C39.9959 34.094 39.6841 35.107 39.422 35.7809C39.0752 36.6742 38.6597 37.3102 37.9897 37.9798C37.3198 38.6497 36.6838 39.0643 35.7901 39.4113C35.1162 39.6745 34.1025 39.9855 32.2363 40.0709C30.2185 40.1626 29.6125 40.1825 24.5017 40.1825C19.3908 40.1825 18.785 40.1626 16.7674 40.0709C14.9012 39.9848 13.8882 39.673 13.213 39.4109C12.3199 39.0639 11.6817 38.6493 11.0118 37.9794C10.3419 37.3095 9.92729 36.6731 9.5795 35.7794C9.31746 35.1054 9.00528 34.0925 8.9203 32.2263C8.82861 30.2085 8.81024 29.6025 8.81024 24.491C8.81024 19.3795 8.82861 18.7768 8.9203 16.759C9.00566 14.8927 9.31746 13.8798 9.5795 13.2051C9.92652 12.3118 10.3419 11.6739 11.012 11.0039C11.6821 10.334 12.3199 9.91925 13.2132 9.57165C13.8879 9.30847 14.9012 8.99743 16.7674 8.91168C18.5331 8.83187 19.2174 8.80794 22.7846 8.80392V8.80871ZM34.719 11.9868C33.4509 11.9868 32.4221 13.0147 32.4221 14.2829C32.4221 15.551 33.4509 16.5798 34.719 16.5798C35.9871 16.5798 37.0159 15.551 37.0159 14.2829C37.0159 13.0149 35.9871 11.9861 34.719 11.9861V11.9868ZM24.5017 14.6705C19.0734 14.6705 14.6722 19.0717 14.6722 24.5002C14.6722 29.9287 19.0734 34.3278 24.5017 34.3278C29.9302 34.3278 34.3299 29.9287 34.3299 24.5002C34.3299 19.0719 29.9298 14.6705 24.5013 14.6705H24.5017ZM24.5017 18.1199C28.0253 18.1199 30.8821 20.9762 30.8821 24.5002C30.8821 28.0238 28.0253 30.8805 24.5017 30.8805C20.9781 30.8805 18.1216 28.0238 18.1216 24.5002C18.1216 20.9762 20.9779 18.1199 24.5017 18.1199Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <radialGradient
                            id="paint0_radial_24_66"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(13.0156 52.774) rotate(-90) scale(48.5626 45.1671)"
                          >
                            <stop stop-color="#FFDD55" />
                            <stop offset="0.1" stop-color="#FFDD55" />
                            <stop offset="0.5" stop-color="#FF543E" />
                            <stop offset="1" stop-color="#C837AB" />
                          </radialGradient>
                          <radialGradient
                            id="paint1_radial_24_66"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(-8.20769 3.52972) rotate(78.681) scale(21.7078 89.4801)"
                          >
                            {/* <stop stop-color="#3771C8" /> */}
                            {/* <stop offset="0.128" stop-color="#3771C8" /> */}
                            {/* <stop
                              // offset="1"
                              // stop-color="#6600FF"
                              stop-opacity="0"
                            /> */}
                          </radialGradient>
                          <clipPath id="clip0_24_66">
                            <rect width="49" height="49" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div>
                        <div className="font-bold">Instagram</div>
                        <div>/rijanstagram</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#1f1f1f] text-center p-2">© 2025 Rijan Niraula</div>
    </div>
  );
};
export default HomePage;
