import svgPaths from "./svg-h6poyq6xn6";
import imgViewsImagesAvatars from "./7dc510481fa51d1b69738bcf1c443ff8cdedb7c0.png";
import imgViewsImagesRatio from "./9e6822947ea8e7705b0ddfd65b3b1959f08dac97.png";
import img916 from "./42b0caa200df8aa1e53af1d506f06fa525491378.png";
import imgViewsImagesAvatars1 from "./0d6079e5e481dc3b486e2002277beef7ad4d34b3.png";
import imgViewsImagesAvatars2 from "./c46de4a38c53e408984c953c3142a2a4e5eefb77.png";
import imgViewsImagesAvatars3 from "./d0de11259627cb15803e69f0af257d9df8c3b733.png";
import imgImagePlaceholderCopyPasteHere from "./783814be1d24117760da8d692682b0868e5d8f45.png";
import imgImagePlaceholderCopyPasteHere1 from "./3c93b96b6508bb529bbce2b4d7b42a1126d1327c.png";
import imgImagePlaceholderCopyPasteHere2 from "./b2d665090ad8567616a76c666c7ee9024368caa0.png";
import imgImagePlaceholderCopyPasteHere3 from "./1bd705d7af068f179d61254dc9f614b87ccaa55b.png";

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

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="description">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#090a0a] text-[0px] text-center w-full">
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px]">{`Interested in collaborate with us? Say hello at `}</span>
        <span className="leading-[20px] text-[14px]">hellouistellar@gmail.com</span>
      </p>
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
      <Description1 />
    </div>
  );
}

function Like() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="like">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="eye">
        <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
          <div className="absolute inset-[-8.04%_-5.84%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.8333">
              <g id="Vector">
                <path d={svgPaths.p2e139a00} stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p34ee000} stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#979c9e] text-[12px] whitespace-nowrap">1.253</p>
    </div>
  );
}

function Like1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="like">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="thumbs-up">
        <div className="absolute inset-[8.33%_9.66%_8.33%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.43%_-6.53%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9815 13.1667">
              <path d={svgPaths.p1eb73500} id="Vector" stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#979c9e] text-[12px] whitespace-nowrap">213</p>
    </div>
  );
}

function Stats1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="stats">
      <Like />
      <Like1 />
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="stats">
      <Stats1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#979c9e] text-[12px] whitespace-nowrap">05/24/2024</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="info">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#090a0a] text-[16px] text-ellipsis w-full whitespace-nowrap">Landing Page Website Design</p>
      <Stats />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="item">
      <div className="relative shrink-0 size-[24px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgViewsImagesAvatars1} width="24" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-px not-italic relative text-[#090a0a] text-[0px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[14px]">Jimmy Chairperson</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px]">{` Awesome `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#979c9e] text-[14px]">6h</span>
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="item">
      <div className="relative shrink-0 size-[24px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgViewsImagesAvatars2} width="24" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-px not-italic relative text-[#090a0a] text-[0px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[14px]">Benjamin Evans</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px]">{` Your work was a breath of fresh inspiration: thank you for letting us experience `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#979c9e] text-[14px]">7h</span>
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="item">
      <div className="relative shrink-0 size-[24px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgViewsImagesAvatars3} width="24" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-px not-italic relative text-[#090a0a] text-[0px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[14px]">Chloe Bennett</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px]">{` Very well presented project! `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#979c9e] text-[14px]">12h</span>
      </p>
    </div>
  );
}

function Comments() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-center justify-center ml-0 mt-0 relative row-1 w-[327px]" data-name="comments">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-center justify-center ml-0 mt-[200px] relative row-1 w-[327px]">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px]" data-name="Controls / Text Fields">
        <div className="absolute bg-white inset-0 rounded-[32px]" data-name="Field">
          <div aria-hidden="true" className="absolute border border-[#e3e5e5] border-solid inset-[-1px] pointer-events-none rounded-[33px]" />
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[16px] not-italic right-[16px] text-[#72777a] text-[16px] top-[calc(50%-8px)]">Leave a Comment</p>
      </div>
      <div className="bg-[#e3e5e5] relative rounded-[1000px] shrink-0 size-[48px]" data-name="Controls / Buttons: Icon">
        <div className="absolute inset-1/4 overflow-clip" data-name="Icon">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-3.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                <path d={svgPaths.p302f5f00} id="Vector" stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Comment">
      <Comments />
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[20px] ml-0 mt-[164px] not-italic relative row-1 text-[#090a0a] text-[14px] w-[327px]">View All Comments (27)</p>
      <Frame />
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="col">
      <div className="flex-[1_0_0] h-[120px] min-w-px relative" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[4px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImagePlaceholderCopyPasteHere} />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[120px] min-w-px relative" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[4px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImagePlaceholderCopyPasteHere1} />
        </div>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="col">
      <div className="flex-[1_0_0] h-[120px] min-w-px relative" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[4px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImagePlaceholderCopyPasteHere2} />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[120px] min-w-px relative" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[4px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImagePlaceholderCopyPasteHere3} />
        </div>
      </div>
    </div>
  );
}

function ProjectsSuggestion() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Projects Suggestion">
      <Col />
      <Col1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-1/2 px-[24px] py-[12px] top-[44px] w-[375px]" data-name="Main Content">
      <Header />
      <Content />
      <div className="h-px relative shrink-0 w-full" data-name="Views / Dividers">
        <div className="absolute bg-[#f2f4f5] inset-0" data-name="divider" />
      </div>
      <Info />
      <div className="bg-[#f2f4f5] h-px relative shrink-0 w-[327px]" data-name="divider" />
      <Comment />
      <div className="bg-[#f2f4f5] h-px relative shrink-0 w-[327px]" data-name="divider" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[#090a0a] text-[16px] w-[min-content]">More Projects by UIStellar Studio</p>
      <ProjectsSuggestion />
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
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 px-[24px] py-[12px] top-[1948px] w-[373px]" data-name="Button Action">
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

export default function DetailPostFull() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="Detail Post / Full">
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