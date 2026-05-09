import svgPaths from "./svg-v80jm4o1hg";
import { imgKnob, imgKnob1 } from "./svg-1536x";

function ControlsTableViewRowXSwitchDarkOn({ className }: { className?: string }) {
  return (
    <div className={className || "absolute inset-[6.48%_4.83%_64.81%_82.85%]"} data-name="Controls / Table View / Row / x / Switch / Dark - On">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 31.0002">
        <path clipRule="evenodd" d={svgPaths.p31b107f0} fill="var(--fill-0, #59BC6C)" fillRule="evenodd" id="Mask" />
      </svg>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+10px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-22px_-2px] mask-size-[51px_31px] size-[27px] top-1/2" style={{ maskImage: `url('${imgKnob}')` }} data-name="knob">
        <div className="absolute inset-[-20.37%_-31.48%_-42.59%_-31.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_dd_5_5465)" id="knob">
              <path clipRule="evenodd" d={svgPaths.p1002780} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p1f6f4600} stroke="var(--stroke-0, black)" strokeOpacity="0.04" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_dd_5_5465" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5465" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="effect1_dropShadow_5_5465" mode="normal" result="effect2_dropShadow_5_5465" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_5465" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute h-[108px] left-0 overflow-clip top-[135px] w-[414px]" data-name="Row">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <div className="absolute flex h-0 items-center justify-center left-[20px] top-0 w-[394px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[394px]" data-name="Secondary Separator">
            <div className="absolute inset-[-0.35px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 0.35">
                <line id="Secondary Separator" stroke="var(--stroke-0, #CED5DC)" strokeWidth="0.35" x2="394" y1="0.175" y2="0.175" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[20px] not-italic text-[#141619] text-[16px] top-[13px] tracking-[-0.3px] whitespace-nowrap">Receive messages from anyone</p>
      <div className="absolute font-['SF_Pro_Text:Regular',sans-serif] h-[53px] leading-[0] left-[20px] not-italic text-[#687684] text-[14px] top-[44px] tracking-[-0.15px] w-[374px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">You will be able to receive Direct Message requests from</p>
        <p className="leading-[normal] mb-0">anyone on Twitter, even if you don’t follow them.</p>
        <p>
          <span className="leading-[normal] text-[#4c9eeb]">{`Learn more `}</span>
          <span className="leading-[normal]">{` `}</span>
        </p>
      </div>
      <ControlsTableViewRowXSwitchDarkOn />
    </div>
  );
}

function ControlsTableViewRowXSwitchDarkOff({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[31px] right-[20px] top-[7.3px] w-[51px]"} data-name="Controls / Table View / Row / x / Switch / Dark - Off">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 31.0002">
        <path clipRule="evenodd" d={svgPaths.p31b107f0} fill="var(--fill-0, #E9E9EA)" fillRule="evenodd" id="Mask" />
      </svg>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-10px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[51px_31px] size-[27px] top-1/2" style={{ maskImage: `url('${imgKnob1}')` }} data-name="knob">
        <div className="absolute inset-[-20.37%_-31.48%_-42.59%_-31.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <g filter="url(#filter0_dd_5_5465)" id="knob">
              <path clipRule="evenodd" d={svgPaths.p1002780} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p1f6f4600} stroke="var(--stroke-0, black)" strokeOpacity="0.04" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_dd_5_5465" width="44" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5465" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="effect1_dropShadow_5_5465" mode="normal" result="effect2_dropShadow_5_5465" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_5465" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute h-[91px] left-0 overflow-clip top-[243px] w-[414px]" data-name="Row">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <div className="absolute flex h-0 items-center justify-center left-[20px] top-0 w-[393.999px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[393.999px]" data-name="Secondary Separator">
            <div className="absolute inset-[-0.35px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393.999 0.35">
                <line id="Secondary Separator" stroke="var(--stroke-0, #CED5DC)" strokeWidth="0.35" x2="393.999" y1="0.175" y2="0.175" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[20px] not-italic text-[#141619] text-[16px] top-[13.3px] tracking-[-0.3px] whitespace-nowrap">Quality filter</p>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] h-[37px] leading-[0] left-[20px] not-italic text-[#687684] text-[14px] top-[44.3px] tracking-[-0.15px] w-[374px]">
        <span className="leading-[normal]">{`Filters lower-quality messages from your Direct Message requests. `}</span>
        <span className="leading-[normal] text-[#4c9eeb]">Learn more</span>
      </p>
      <ControlsTableViewRowXSwitchDarkOff />
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute h-[127px] left-0 overflow-clip top-[334px] w-[414px]" data-name="Row">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <div className="absolute flex h-0 items-center justify-center left-[20px] top-0 w-[393.999px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[393.999px]" data-name="Secondary Separator">
            <div className="absolute inset-[-0.35px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393.999 0.35">
                <line id="Secondary Separator" stroke="var(--stroke-0, #CED5DC)" strokeWidth="0.35" x2="393.999" y1="0.175" y2="0.175" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[20px] not-italic text-[#141619] text-[16px] top-[13px] tracking-[-0.3px] whitespace-nowrap">Show read receipts</p>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] h-[72px] leading-[0] left-[20px] not-italic text-[#687684] text-[14px] top-[44px] tracking-[-0.15px] w-[374px]">
        <span className="leading-[normal]">{`When someone sends you a message, peopla in the conversation will know when you’ve seen it. If you turn off this setting, you won’t be able to see read receipts from others. `}</span>
        <span className="leading-[normal] text-[#4c9eeb]">Learn more</span>
      </p>
      <div className="absolute h-[31px] right-[20px] top-[7px] w-[51px]" data-name="Controls / Table View / Row / x / Switch / Dark - On">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 31.0002">
          <path clipRule="evenodd" d={svgPaths.p31b107f0} fill="var(--fill-0, #59BC6C)" fillRule="evenodd" id="Mask" />
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+10px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-22px_-2px] mask-size-[51px_31px] size-[27px] top-1/2" style={{ maskImage: `url('${imgKnob}')` }} data-name="knob">
          <div className="absolute inset-[-20.37%_-31.48%_-42.59%_-31.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
              <g filter="url(#filter0_dd_5_5465)" id="knob">
                <path clipRule="evenodd" d={svgPaths.p1002780} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path d={svgPaths.p1f6f4600} stroke="var(--stroke-0, black)" strokeOpacity="0.04" strokeWidth="0.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_dd_5_5465" width="44" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5465" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend in2="effect1_dropShadow_5_5465" mode="normal" result="effect2_dropShadow_5_5465" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_5465" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Privacy() {
  return (
    <div className="absolute contents left-0 top-[135px]" data-name="Privacy">
      <div className="absolute bg-white h-[327px] left-0 shadow-[0px_0.33px_0px_0px_#ced5dc] top-[135px] w-[414px]" data-name="Background" />
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function SettingsHeader() {
  return (
    <div className="absolute h-[47px] left-0 overflow-clip top-[88px] w-[414px]" data-name="Settings header">
      <div className="absolute bg-[#e7ecf0] h-[48px] left-0 top-0 w-[414px]" data-name="Background" />
      <p className="absolute font-['SF_Pro_Text:Heavy',sans-serif] leading-[normal] left-[20px] not-italic text-[#687684] text-[19px] top-[12px] tracking-[-0.5px] whitespace-nowrap">Privacy</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute h-[89px] left-0 overflow-clip top-0 w-[414px]" data-name="Top Bar">
      <div className="absolute bg-white h-[88px] left-0 shadow-[0px_0.33px_0px_0px_#bdc5cd] top-0 w-[414px]" data-name="Background" />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Heavy',sans-serif] leading-[normal] left-[207.5px] not-italic text-[#141619] text-[17px] text-center top-[56px] tracking-[0.3px] whitespace-nowrap">Messages settings</p>
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[373.5px] not-italic text-[#4c9eeb] text-[17px] text-center top-[56px] tracking-[-0.3px] whitespace-nowrap">Done</p>
      <div className="absolute h-[17px] left-[18.09px] top-[57.5px] w-[9.914px]" data-name="Left Arrow Icon">
        <div className="absolute inset-[0_0_0_4.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 17">
            <path clipRule="evenodd" d={svgPaths.p1e129f00} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" id="Left Arrow Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BarsHomeIndicator() {
  return (
    <div className="absolute h-[35px] left-0 overflow-clip top-[861px] w-[414px]" data-name="Bars / Home Indicator">
      <div className="-translate-x-1/2 absolute bg-[#060606] bottom-[9px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Line" />
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

export default function TwitterMessagesSettings() {
  return (
    <div className="relative size-full" data-name="Twitter Messages (Settings)">
      <div className="absolute bg-[#e7ecf0] h-[896px] left-0 top-0 w-[414px]" data-name="Background" />
      <Privacy />
      <SettingsHeader />
      <TopBar />
      <BarsHomeIndicator />
      <BarsStatusBarIPhoneX />
    </div>
  );
}