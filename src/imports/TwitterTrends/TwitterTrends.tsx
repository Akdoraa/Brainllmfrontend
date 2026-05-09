import svgPaths from "./svg-yz9jb2avvd";
import imgRound from "./f494cc9b85b385e40b0147417f43d370d0311f43.png";

function Button() {
  return (
    <div className="absolute contents left-[139px] top-[130px]" data-name="Button">
      <div className="absolute bg-[#4c9eeb] h-[34px] left-[139px] rounded-[16px] top-[130px] w-[136px]" />
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[152px] not-italic text-[14px] text-white top-[138px] tracking-[-0.1px] whitespace-nowrap">Change location</p>
    </div>
  );
}

function Info() {
  return (
    <div className="absolute h-[202px] left-0 overflow-clip top-[135px] w-[414px]" data-name="Info">
      <div className="absolute bg-white h-[201px] left-0 shadow-[0px_0.33px_0px_0px_#ced5dc] top-0 w-[414px]" data-name="Background" />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Heavy',sans-serif] leading-[normal] left-[207px] not-italic text-[#141619] text-[22px] text-center top-[37px] tracking-[0.15px] whitespace-nowrap">{`No new trends for you `}</p>
      <Button />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[207px] not-italic text-[#687684] text-[16px] text-center top-[77px] tracking-[-0.3px] w-[346px]">It seems like there’s not a lot to show you right now, but you can see trends for other areas</p>
    </div>
  );
}

function AddTextButton() {
  return (
    <div className="absolute left-[346.42px] size-[56px] top-[744.58px]" data-name="Add text button">
      <div className="absolute inset-[-5.36%_-7.14%_-8.93%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <g id="Add text button">
            <g filter="url(#filter0_d_5_5549)" id="Shape">
              <circle cx="32" cy="31" fill="var(--fill-0, #4C9EEB)" r="28" />
            </g>
            <g id="Add text icon">
              <path d={svgPaths.pb4a7b80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p80fb00} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_d_5_5549" width="64" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5549" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5549" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="-translate-y-1/2 absolute h-[84px] left-0 top-[calc(50%+406px)] w-[414px]" data-name="Navigation Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 414 84">
        <g clipPath="url(#clip0_5_5611)" id="Navigation Bar">
          <g filter="url(#filter0_d_5_5611)" id="Background">
            <rect fill="var(--fill-0, white)" height="83" width="414" y="1" />
          </g>
          <circle cx="60.25" cy="13" fill="var(--fill-0, #4C9EEB)" id="Notification round" r="3.5" stroke="var(--stroke-0, white)" />
          <path clipRule="evenodd" d={svgPaths.p15d69d00} fill="var(--fill-0, #687684)" fillRule="evenodd" id="Bell Stroke Icon" />
          <path clipRule="evenodd" d={svgPaths.p315c5600} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" id="Search Solid Icon" />
          <path clipRule="evenodd" d={svgPaths.p3816e500} fill="var(--fill-0, #687684)" fillRule="evenodd" id="Message Stroke Icon" />
          <g id="Home Stroke Icon">
            <path clipRule="evenodd" d={svgPaths.p29f5dc00} fill="var(--fill-0, #687684)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pab01300} fill="var(--fill-0, #687684)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="83.33" id="filter0_d_5_5611" width="414" x="0" y="0.67">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.33" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.741176 0 0 0 0 0.772549 0 0 0 0 0.803922 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5611" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5611" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_5_5611">
            <rect fill="white" height="84" width="414" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-[88px] w-[414px]" data-name="Heading">
      <div className="absolute bg-white h-[47.33px] left-0 shadow-[0px_0.33px_0px_0px_#ced5dc] top-0 w-[414px]" data-name="Background" />
      <p className="absolute font-['SF_Pro_Text:Heavy',sans-serif] leading-[normal] left-[20px] not-italic text-[#141619] text-[19px] top-[12px] tracking-[-0.3px] whitespace-nowrap">Trends for you</p>
    </div>
  );
}

function SearchField() {
  return (
    <div className="absolute contents left-[68px] top-[50px]" data-name="Search Field">
      <div className="absolute bg-[#e7ecf0] h-[32px] left-[68px] rounded-[16px] top-[50px] w-[286px]" data-name="Rectangle" />
      <div className="absolute left-[146px] size-[13px] top-[60px]" data-name="Search icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path clipRule="evenodd" d={svgPaths.p346ba300} fill="var(--fill-0, #687684)" fillRule="evenodd" id="Search icon" />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[221.5px] not-italic text-[#687684] text-[17px] text-center top-[56px] tracking-[-0.3px] whitespace-nowrap">Search Twitter</p>
    </div>
  );
}

function Account() {
  return (
    <div className="absolute contents left-[20px] top-[50px]" data-name="Account">
      <div className="absolute left-[20px] size-[32px] top-[50px]" data-name="Round">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgRound} width="32" />
      </div>
      <div className="absolute left-[45px] size-[6px] top-[51px]" data-name="Notification round">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #4C9EEB)" id="Notification round" r="3.5" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute h-[89px] left-0 top-px w-[414px]" data-name="Search bar">
      <div className="absolute bg-white h-[88px] left-0 shadow-[0px_0.33px_0px_0px_#bdc5cd] top-0 w-[414px]" data-name="Background" />
      <div className="absolute left-[371px] size-[21.5px] top-[55.5px]" data-name="Setiings Stroke Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <path clipRule="evenodd" d={svgPaths.pf4bcf80} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" id="Settings Stroke Icon" />
        </svg>
      </div>
      <SearchField />
      <Account />
    </div>
  );
}

function BarsHomeIndicator() {
  return (
    <div className="absolute h-[35px] left-0 overflow-clip top-[861px] w-[414px]" data-name="Bars / Home Indicator">
      <div className="absolute inset-[-2.86%_0_2.86%_0]" data-name="⬛ Background" />
      <div className="-translate-x-1/2 absolute bg-[#060606] bottom-[10px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Line" />
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-y-1/2 absolute h-[10.5px] right-[14.5px] top-[calc(50%+1.25px)] w-[24.5px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 10.5">
        <g id="Battery">
          <path d={svgPaths.p12240232} fill="var(--fill-0, #ABABAB)" id="Combined Shape" />
          <path d={svgPaths.p1fe00b00} fill="var(--fill-0, #ABABAB)" id="Combined Shape_2" />
          <rect fill="var(--fill-0, #060606)" height="6.5" id="Rectangle" rx="1" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[31.82%_80%_27.27%_5.6%] overflow-clip" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-0 not-italic right-[-0.38px] text-[#171717] text-[15px] text-center top-[calc(50%-9px)] tracking-[-0.3px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneX() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[414px]" data-name="Bars / Status Bar / iPhone X">
      <Battery />
      <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8607 10.9656">
          <path clipRule="evenodd" d={svgPaths.pbb13780} fill="var(--fill-0, #060606)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Mobile Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.768 10.6667">
          <path clipRule="evenodd" d={svgPaths.p3d642180} fill="var(--fill-0, #060606)" fillRule="evenodd" id="Mobile Signal" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function TwitterTrends() {
  return (
    <div className="relative size-full" data-name="Twitter Trends">
      <div className="absolute bg-[#e7ecf0] h-[896px] left-0 top-0 w-[414px]" data-name="Background" />
      <Info />
      <AddTextButton />
      <NavigationBar />
      <Heading />
      <SearchBar />
      <BarsHomeIndicator />
      <BarsStatusBarIPhoneX />
    </div>
  );
}