import { IoLogoGithub, IoDesktopOutline, IoEye } from "react-icons/io5";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem] text-center">Portfolio Page</h1>
      
      <div className="flex justify-center flex-wrap ">
        <div className=" basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between  ">
          <img
            className="object-contain "
            src="/GigGuide.png"
            alt="GigGuide screenshot"
          />

          <div className="flex justify-between">
            <a
              href="https://github.com/MWandall/concert-finder"
              target="_blank"
            >
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>GigGuide</h2>
            <a
              href="https://kevinsmithseven.github.io/concert-finder/"
              target="_blank"
            >
              <IoDesktopOutline className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <img
            className="object-contain "
            src="/GameU.png"
            alt="GigGuide screenshot"
          />
          <div className="flex justify-between">
            <a href="https://github.com/MWandall/gameU" target="_blank">
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>GameU</h2>
            <a
              href="https://limitless-mountain-58094-a782c55b0be7.herokuapp.com/"
              target="_blank"
            >
              <IoDesktopOutline className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <img
            className="object-contain "
            src="/JATE.png"
            alt="GigGuide screenshot"
          />
          <div className="flex justify-between">
            <a href="https://github.com/MWandall/pwaTextEditor" target="_blank">
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>JATE</h2>
            <a
              href="https://quiet-reaches-59584-957246460e74.herokuapp.com/"
              target="_blank"
            >
              <IoDesktopOutline className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <img
            className="object-contain "
            src="/EarlyPortfolio.png"
            alt="GigGuide screenshot"
          />
          <div className="flex justify-between">
            <a
              href="https://github.com/MWandall/portfolio"
              target="_blank"
            >
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>Early Vanilla Portfolio</h2>
            <a href="https://mwandall.github.io/portfolio/" target="_blank">
              <IoDesktopOutline className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <img
            className="object-contain "
            src="/E-commerceBackend.png"
            alt="GigGuide screenshot"
          />
          <div className="flex justify-between">
            <a
              href="https://github.com/MWandall/e-commerceBackEnd"
              target="_blank"
            >
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>E-Commerce Backend</h2>
            <a
              href="https://drive.google.com/file/d/1Jmo46EbtmVVWI_YGmUcayLBgoncXWbpu/view"
              target="_blank"
            >
              <IoEye className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <img
            className="object-contain "
            src="/SocialNetworkApi.png"
            alt="GigGuide screenshot"
          />
          <div className="flex justify-between">
            <a
              href="https://github.com/MWandall/socialNetworkAPI"
              target="_blank"
            >
              <IoLogoGithub className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
            <h2>Social Network API Backend</h2>
            <a
              href="https://drive.google.com/file/d/19Eg94G54tOGbDNm4-JCB45SHi4LEeCm9/view"
              target="_blank"
            >
              <IoEye className="  cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
