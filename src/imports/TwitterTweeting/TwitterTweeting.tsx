import svgPaths from "./svg-iwyuof89bn";
import imgMedia from "./ec989e696f3d863df435efa2a0cb5e66a0330e8a.png";
import imgMedia1 from "./e0595c2ed03984ccd1e4eaa0eba0d9bfcc5b069e.png";
import imgMedia2 from "./d8fd7c66c4cbcb2fcd565fedcfce00af3ad1b7c3.png";
import imgMedia3 from "./4a6c1ff17c28b35a5bbf45972284ca2b89846a51.png";
import imgRound from "./322e417c6df54709efcfdc4688191271db433a20.png";

function ButtonsBar() {
  return (
    <div className="absolute h-[50px] left-0 top-[545px] w-[414px]" data-name="Buttons bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 414 50">
        <g clipPath="url(#clip0_5_5393)" id="Buttons bar">
          <g filter="url(#filter0_d_5_5393)" id="Background">
            <rect fill="var(--fill-0, white)" height="49.67" width="414" y="0.33" />
          </g>
          <g id="Image icon">
            <path d={svgPaths.p2eeedaa0} fill="var(--fill-0, #4C9EEB)" />
            <path clipRule="evenodd" d={svgPaths.p15e7ba00} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
          </g>
          <g id="Gif icon">
            <path d={svgPaths.p20934c00} fill="var(--fill-0, #4C9EEB)" />
            <path d={svgPaths.p3cc8da00} fill="var(--fill-0, #4C9EEB)" />
            <path d={svgPaths.p3022700} fill="var(--fill-0, #4C9EEB)" />
            <path clipRule="evenodd" d={svgPaths.pbe94780} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p3b5f2700} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" id="Stats icon" />
          <g id="Loaction icon">
            <path clipRule="evenodd" d={svgPaths.p34fae00} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13307e00} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
          </g>
          <circle cx="328.5" cy="25" id="Tick icon" r="7.5" stroke="var(--stroke-0, #CED5DC)" strokeWidth="1.5" />
          <g id="Add Button Little">
            <circle cx="383" cy="25" fill="var(--fill-0, #B9DCF7)" id="Shape" r="10" />
            <path d={svgPaths.p3809ea80} fill="var(--fill-0, white)" id="Union" />
          </g>
          <line id="Vertical Sperator" stroke="var(--stroke-0, #CED5DC)" strokeWidth="0.35" x1="355.825" x2="355.825" y1="12" y2="38" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_d_5_5393" width="414" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.33" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.741176 0 0 0 0 0.772549 0 0 0 0 0.803922 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5393" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5393" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_5_5393">
            <rect fill="white" height="50" width="414" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute left-[8px] size-[78px] top-[8px]" data-name="Camera">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
        <g id="Camera">
          <rect height="77.65" id="Rectangle" rx="16.825" stroke="var(--stroke-0, #CED5DC)" strokeWidth="0.35" width="77.65" x="0.175" y="0.175" />
          <g id="Camera icon">
            <path clipRule="evenodd" d={svgPaths.p37201200} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pc46c860} fill="var(--fill-0, #4C9EEB)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MediaBar() {
  return (
    <div className="absolute h-[94px] left-0 overflow-clip top-[451px] w-[414px]" data-name="Media bar">
      <div className="absolute bg-white h-[94px] left-0 top-0 w-[414px]" data-name="Background" />
      <div className="absolute left-[94px] pointer-events-none rounded-[17px] size-[78px] top-[8px]" data-name="Media">
        <div aria-hidden="true" className="absolute inset-0 rounded-[17px]">
          <div className="absolute bg-[#e7ecf0] inset-0 rounded-[17px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[17px] size-full" src={imgMedia} />
        </div>
        <div aria-hidden="true" className="absolute border-[#ced5dc] border-[0.35px] border-solid inset-0 rounded-[17px]" />
      </div>
      <div className="absolute left-[180px] pointer-events-none rounded-[17px] size-[78px] top-[8px]" data-name="Media">
        <div aria-hidden="true" className="absolute inset-0 rounded-[17px]">
          <div className="absolute bg-[#e7ecf0] inset-0 rounded-[17px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[17px] size-full" src={imgMedia1} />
        </div>
        <div aria-hidden="true" className="absolute border-[#ced5dc] border-[0.35px] border-solid inset-0 rounded-[17px]" />
      </div>
      <div className="absolute left-[266px] pointer-events-none rounded-[17px] size-[78px] top-[8px]" data-name="Media">
        <div aria-hidden="true" className="absolute inset-0 rounded-[17px]">
          <div className="absolute bg-[#e7ecf0] inset-0 rounded-[17px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[17px] size-full" src={imgMedia2} />
        </div>
        <div aria-hidden="true" className="absolute border-[#ced5dc] border-[0.35px] border-solid inset-0 rounded-[17px]" />
      </div>
      <div className="absolute left-[352px] pointer-events-none rounded-[17px] size-[78px] top-[8px]" data-name="Media">
        <div aria-hidden="true" className="absolute inset-0 rounded-[17px]">
          <div className="absolute bg-[#e7ecf0] inset-0 rounded-[17px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[17px] size-full" src={imgMedia3} />
        </div>
        <div aria-hidden="true" className="absolute border-[#ced5dc] border-[0.35px] border-solid inset-0 rounded-[17px]" />
      </div>
      <Camera />
    </div>
  );
}

function ArticleBar() {
  return (
    <div className="absolute h-[363px] left-0 overflow-clip top-[88px] w-[414px]" data-name="Article bar">
      <div className="absolute bg-white h-[363px] left-0 top-0 w-[414px]" data-name="Background" />
      <div className="absolute left-[20px] size-[37px] top-[4px]" data-name="Round">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="37" src={imgRound} width="37" />
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[65px] not-italic text-[#687684] text-[19px] top-[11px] tracking-[-0.5px] whitespace-nowrap">What’s happening?</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[5px] contents left-[326px]" data-name="Button">
      <div className="absolute bg-[#b9dcf7] bottom-[5px] h-[34px] left-[326px] rounded-[17px] w-[67px]" />
      <p className="absolute bottom-[31px] font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[339px] not-italic text-[15px] text-white tracking-[-0.5px] translate-y-full whitespace-nowrap">Tweet</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip top-0 w-[414px]" data-name="Top bar">
      <div className="absolute bg-white h-[88px] left-0 top-0 w-[414px]" data-name="Background" />
      <p className="absolute bottom-[32px] font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#4c9eeb] text-[17px] tracking-[-0.3px] translate-y-full whitespace-nowrap">Cancel</p>
      <Button />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute inset-[88.32%_0_0_0]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8.17px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Return() {
  return (
    <div className="absolute inset-[58.42%_0.8%_27.15%_75.73%]" data-name="Return">
      <div className="absolute inset-[0_0.15px_0.44px_0]" data-name="Rectangle">
        <div className="absolute inset-[0_0_-2.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 44">
            <g filter="url(#filter0_d_5_5383)" id="Rectangle">
              <path clipRule="evenodd" d={svgPaths.p14c45530} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_5_5383" width="97" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5383" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5383" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[26.19%_0.15px_23.81%_0] leading-[21px] not-italic text-[16px] text-black text-center tracking-[-0.32px]">Go</p>
    </div>
  );
}

function Space() {
  return (
    <div className="absolute inset-[58.42%_25.87%_27.15%_25.6%]" data-name="Space">
      <div className="absolute inset-[0_-0.07px_0.44px_0]" data-name="Rectangle">
        <div className="absolute inset-[0_0_-2.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201 44">
            <g filter="url(#filter0_d_5_5358)" id="Rectangle">
              <path clipRule="evenodd" d={svgPaths.p13ebb680} fill="var(--fill-0, #FCFCFE)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_5_5358" width="201" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5358" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5358" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[26.19%_-0.07px_23.81%_0] leading-[21px] not-italic text-[16px] text-black text-center tracking-[-0.32px]">space</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[58.42%_76%_27.15%_0.8%]" data-name="123">
      <div className="absolute inset-[0_0.05px_0.44px_0]" data-name="Rectangle">
        <div className="absolute inset-[0_0_-2.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 44">
            <g filter="url(#filter0_d_5_5356)" id="Rectangle">
              <path clipRule="evenodd" d={svgPaths.p31993300} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_5_5356" width="96" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5356" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5356" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[26.19%_0.05px_23.81%_0] leading-[21px] not-italic text-[16px] text-black text-center tracking-[-0.32px]">123</p>
    </div>
  );
}

function KeyLight() {
  return (
    <div className="absolute inset-[39.86%_0.8%_45.7%_88%]" data-name="Key Light">
      <div className="absolute inset-[0_0.37px_0.44px_0]" data-name="Rectangle">
        <div className="absolute inset-[0_0_-2.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 44">
            <g filter="url(#filter0_d_5_5385)" id="Rectangle">
              <path clipRule="evenodd" d={svgPaths.p34994d00} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_5_5385" width="46" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_5385" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_5385" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[26.19%_0.37px_23.81%_0] leading-[21px] not-italic text-[16px] text-black text-center tracking-[-0.32px]">{` `}</p>
    </div>
  );
}

function Delete() {
  return (
    <div className="absolute contents inset-[39.86%_0.8%_45.7%_88%]" data-name="Delete">
      <KeyLight />
      <div className="absolute inset-[44.21%_3.38%_49.95%_90.58%]" data-name="Delete Button">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0166 17.5781">
          <path d={svgPaths.p9291f00} fill="var(--fill-0, black)" id="Delete Button" />
        </svg>
      </div>
    </div>
  );
}

function KeyLight1() {
  return (
    <div className="absolute inset-[39.86%_88%_45.7%_0.8%]" data-name="Key Light">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.37px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[48.07%] not-italic right-[51.93%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px] whitespace-nowrap">{` `}</p>
    </div>
  );
}

function Shift() {
  return (
    <div className="absolute contents inset-[39.86%_88%_45.7%_0.8%]" data-name="Shift">
      <KeyLight1 />
      <div className="absolute inset-[44.05%_91.06%_50.29%_3.91%]" data-name="Shift">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8435 17.0218">
          <path d={svgPaths.p59b3910} fill="var(--fill-0, black)" id="Shift" />
        </svg>
      </div>
    </div>
  );
}

function M() {
  return (
    <div className="absolute inset-[39.86%_15.47%_45.7%_76%]" data-name="M">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[18.75%] not-italic right-[18.75%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">M</p>
    </div>
  );
}

function N() {
  return (
    <div className="absolute inset-[39.86%_25.6%_45.7%_65.87%]" data-name="N">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">N</p>
    </div>
  );
}

function B() {
  return (
    <div className="absolute inset-[39.86%_35.73%_45.7%_55.73%]" data-name="B">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">B</p>
    </div>
  );
}

function V() {
  return (
    <div className="absolute inset-[39.86%_45.6%_45.7%_45.87%]" data-name="V">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">V</p>
    </div>
  );
}

function C() {
  return (
    <div className="absolute inset-[39.86%_55.73%_45.7%_35.73%]" data-name="C">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">C</p>
    </div>
  );
}

function X() {
  return (
    <div className="absolute inset-[39.86%_65.6%_45.7%_25.87%]" data-name="X">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">X</p>
    </div>
  );
}

function Z() {
  return (
    <div className="absolute inset-[39.86%_75.73%_45.7%_15.73%]" data-name="Z">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">Z</p>
    </div>
  );
}

function L() {
  return (
    <div className="absolute inset-[21.31%_5.6%_64.26%_85.87%]" data-name="L">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">L</p>
    </div>
  );
}

function K() {
  return (
    <div className="absolute inset-[21.31%_15.73%_64.26%_75.73%]" data-name="K">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">K</p>
    </div>
  );
}

function J() {
  return (
    <div className="absolute inset-[21.31%_25.6%_64.26%_65.87%]" data-name="J">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">J</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute inset-[21.31%_35.73%_64.26%_55.73%]" data-name="H">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">H</p>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[21.31%_45.6%_64.26%_45.87%]" data-name="G">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">G</p>
    </div>
  );
}

function F() {
  return (
    <div className="absolute inset-[21.31%_55.73%_64.26%_35.73%]" data-name="F">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">F</p>
    </div>
  );
}

function D() {
  return (
    <div className="absolute inset-[21.31%_65.6%_64.26%_25.87%]" data-name="D">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">D</p>
    </div>
  );
}

function S() {
  return (
    <div className="absolute inset-[21.31%_75.73%_64.26%_15.73%]" data-name="S">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">S</p>
    </div>
  );
}

function A() {
  return (
    <div className="absolute inset-[21.31%_85.6%_64.26%_5.87%]" data-name="A">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">A</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute inset-[2.75%_0.8%_82.82%_90.67%]" data-name="P">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">P</p>
    </div>
  );
}

function O() {
  return (
    <div className="absolute inset-[2.75%_10.67%_82.82%_80.8%]" data-name="O">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.87%] not-italic right-[21.88%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">O</p>
    </div>
  );
}

function I() {
  return (
    <div className="absolute inset-[2.75%_20.8%_82.82%_70.67%]" data-name="I">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[40.63%] not-italic right-[37.5%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">I</p>
    </div>
  );
}

function U() {
  return (
    <div className="absolute inset-[2.75%_30.67%_82.82%_60.8%]" data-name="U">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">U</p>
    </div>
  );
}

function Y() {
  return (
    <div className="absolute inset-[2.75%_40.8%_82.82%_50.67%]" data-name="Y">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">Y</p>
    </div>
  );
}

function T() {
  return (
    <div className="absolute inset-[2.75%_50.67%_82.82%_40.8%]" data-name="T">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">T</p>
    </div>
  );
}

function R() {
  return (
    <div className="absolute inset-[2.75%_60.8%_82.82%_30.67%]" data-name="R">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-1/4 text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">R</p>
    </div>
  );
}

function E() {
  return (
    <div className="absolute inset-[2.75%_70.67%_82.82%_20.8%]" data-name="E">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.12%] not-italic right-[28.13%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">E</p>
    </div>
  );
}

function W() {
  return (
    <div className="absolute inset-[2.75%_80.8%_82.82%_10.67%]" data-name="W">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[15.63%] not-italic right-[15.62%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">W</p>
    </div>
  );
}

function Q() {
  return (
    <div className="absolute inset-[2.75%_90.67%_82.82%_0.8%]" data-name="Q">
      <div className="absolute bg-[#fcfcfe] inset-[0_0.33px_0.44px_0] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] not-italic right-[21.87%] text-[22.5px] text-black text-center top-[calc(50%-12.72px)] tracking-[-0.5547px]">Q</p>
    </div>
  );
}

function Keys() {
  return (
    <div className="absolute contents inset-[2.75%_0.8%_8.25%_0.8%]" data-name="Keys">
      <div className="absolute inset-[82.82%_8%_8.59%_88%]" data-name="Dictation">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5596 25.8584">
          <path d={svgPaths.p2596fc80} fill="var(--fill-0, #50555C)" id="Dictation" />
        </svg>
      </div>
      <div className="absolute inset-[82.47%_86.13%_8.25%_6.67%]" data-name="Emoji">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.808 27.9279">
          <path clipRule="evenodd" d={svgPaths.p2260d180} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Emoji" />
        </svg>
      </div>
      <Return />
      <Space />
      <Component />
      <Delete />
      <Shift />
      <M />
      <N />
      <B />
      <V />
      <C />
      <X />
      <Z />
      <L />
      <K />
      <J />
      <H />
      <G />
      <F />
      <D />
      <S />
      <A />
      <P />
      <O />
      <I />
      <U />
      <Y />
      <T />
      <R />
      <E />
      <W />
      <Q />
    </div>
  );
}

function SystemKeyboardsIPhoneLightAlphabetic({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#ccced3] inset-[66.41%_0_0_0]"} data-name="System / Keyboards / iPhone / Light - Alphabetic">
      <div className="absolute backdrop-blur-[54.366px] bg-[#d1d5db] inset-0" data-name="background" />
      <HomeIndicator />
      <Keys />
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

export default function TwitterTweeting() {
  return (
    <div className="relative size-full" data-name="Twitter Tweeting">
      <ButtonsBar />
      <MediaBar />
      <ArticleBar />
      <TopBar />
      <SystemKeyboardsIPhoneLightAlphabetic />
      <BarsStatusBarIPhoneX />
    </div>
  );
}