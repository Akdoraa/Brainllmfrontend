import svgPaths from "./svg-uingnkih5s";
import imgViewsImagesAvatars from "./7dc510481fa51d1b69738bcf1c443ff8cdedb7c0.png";
import imgViewsImagesRatio from "./9e6822947ea8e7705b0ddfd65b3b1959f08dac97.png";
import img916 from "./42b0caa200df8aa1e53af1d506f06fa525491378.png";

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-px not-italic overflow-hidden relative text-[#090a0a] text-[24px] text-ellipsis">Landing Page Website design</p>
      <div className="relative rounded-[1000px] shrink-0 size-[32px]" data-name="Controls / Buttons: Icon">
        <div aria-hidden="true" className="absolute border border-[#171717] border-solid inset-0 pointer-events-none rounded-[1000px]" />
        <div className="absolute inset-1/4 overflow-clip" data-name="Icon">
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                <path d={svgPaths.p1ddb9c00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="author">
      <div className="relative shrink-0 size-[32px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgViewsImagesAvatars} width="32" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic overflow-hidden relative text-[#090a0a] text-[16px] text-ellipsis whitespace-nowrap">Logan Kim</p>
    </div>
  );
}

function CardHead() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-[327px]" data-name="card head">
      <Author />
      <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0" data-name="Controls / Buttons">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Follow</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[#090a0a] text-[14px] w-full" data-name="description">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Hello, folks!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">{`This time I want to share a recently project, the concept about CSS Trivia Quiz Platform Main purpose for this design is must have a modern, professional, minimalist design. `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">{`Don't forget to follow @uistellar to get more inspirations`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <CardHead />
      <div className="h-[281px] relative shrink-0 w-[375px]" data-name="Views / Images: Ratio">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViewsImagesRatio} />
      </div>
      <Description />
      <div className="h-[580px] relative shrink-0 w-[327px]" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[12px]" data-name="9:16">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img916} />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-1/2 px-[24px] py-[12px] top-[44px] w-[375px]" data-name="Main Content">
      <Header />
      <Content />
    </div>
  );
}

function MobileSignal() {
  return (
    <div className="-translate-y-1/2 absolute h-[10px] right-[69px] top-[calc(50%+3.5px)] w-[18px]" data-name="Mobile Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g id="Mobile Signal">
          <path d={svgPaths.pa13f700} fill="var(--fill-0, #090A0A)" id="Mobile Signal_2" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="-translate-y-1/2 absolute h-[10.966px] right-[48.73px] top-[calc(50%+2.48px)] w-[15.272px]" data-name="Wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
        <g id="Wifi">
          <path d={svgPaths.p3d5aa030} fill="var(--fill-0, #090A0A)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Battery1() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[16.02px] top-[calc(50%+2.5px)]" data-name="Battery">
      <div className="-translate-y-1/2 absolute h-[13px] right-[18px] top-[calc(50%+2.5px)] w-[25px]" data-name="Rectangle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
          <path d={svgPaths.p35a5ef80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #090A0A)" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[4px] right-[16.02px] top-[calc(50%+3px)] w-[1.328px]" data-name="Combined Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, #090A0A)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[8.33px] right-[20.5px] top-[calc(50%+2.5px)] w-[20.2px]" data-name="Rectangle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2 8.33">
          <path d={svgPaths.p37124280} fill="var(--fill-0, #090A0A)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[16.02px] top-[calc(50%+2.5px)]" data-name="Battery">
      <Battery1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_0.5px_rgba(20,20,20,0.04),0px_0px_4px_rgba(20,20,20,0.08)] flex gap-[16px] items-start p-[12px] relative rounded-[32px] shrink-0" data-name="button group">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
              <path d={svgPaths.p1757000} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.5">
              <path d={svgPaths.p34af3400} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonAction() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 px-[24px] py-[12px] top-[706px] w-[373px]" data-name="Button Action">
      <ButtonGroup />
      <div className="bg-[#171717] relative rounded-[1000px] shrink-0 size-[48px]" data-name="Controls / Buttons: Icon">
        <div className="absolute inset-1/4 overflow-clip" data-name="Icon">
          <div className="absolute inset-[8.33%_9.66%_8.33%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-3.75%_-3.81%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1826 21.5001">
                <path d={svgPaths.p90de511} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailPost() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="Detail Post">
      <MainContent />
      <div className="absolute h-[44px] left-0 right-0 top-0" data-name="Native / Status Bar">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[30px] not-italic text-[#090a0a] text-[16px] top-[calc(50%+2px)] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <MobileSignal />
        <Wifi />
        <Battery />
      </div>
      <div className="absolute bg-white bottom-0 h-[34px] left-0 right-0" data-name="Native / Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] w-[148px]" data-name="rectangle">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 5">
            <path clipRule="evenodd" d={svgPaths.pbe25900} fill="var(--fill-0, #090A0A)" fillRule="evenodd" id="rectangle" />
          </svg>
        </div>
      </div>
      <ButtonAction />
    </div>
  );
}