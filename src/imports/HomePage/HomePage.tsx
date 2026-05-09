import svgPaths from "./svg-96sboip1ah";
import imgViewsImagesAvatars from "./dbb092bb47a86b41602bcfb2853ebaa9beb0a491.png";
import imgViewsImagesAvatars1 from "./a9dd80212d60efc92500fcf25678ee7185bfa7c9.png";
import imgViewsImagesAvatars2 from "./a9dd80212d60efc92500fcf25678ee7185bfa7c9.png";
import imgViewsImagesAvatars3 from "./a9dd80212d60efc92500fcf25678ee7185bfa7c9.png";
import imgViewsImagesAvatars4 from "./a9dd80212d60efc92500fcf25678ee7185bfa7c9.png";
import imgViewsImagesAvatars5 from "./dce94a79f20f749e08e9545104460da7c171bd7a.png";
import imgImagePlaceholderCopyPasteHere from "./9e6822947ea8e7705b0ddfd65b3b1959f08dac97.png";
import imgViewsImagesAvatars6 from "./dce94a79f20f749e08e9545104460da7c171bd7a.png";
import imgImagePlaceholderCopyPasteHere1 from "./83bb04c40f4a152148c67faa39c26d7ce3897c3e.png";
import imgIcon from "./95670a821cdc29ab841d08c3a21a5b6bf1eea8ee.png";

function AddButton() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[42px] mt-[42px] place-items-start relative row-1" data-name="add_button">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[22px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <circle cx="11" cy="11" fill="var(--fill-0, #171717)" id="Ellipse 8" r="10" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </svg>
      </div>
      <div className="bg-[#171717] col-1 ml-[5px] mt-[5px] overflow-clip relative row-1 size-[12px]" data-name="Icon">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 8.5">
              <path d={svgPaths.p1a350b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgViewsImagesAvatars} width="64" />
      </div>
      <AddButton />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="item">
      <Profile />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#090a0a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Your story</p>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgViewsImagesAvatars1} width="64" />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]">
        <div className="absolute inset-[-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
            <circle cx="34" cy="34" id="Ellipse 9" r="33" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="item">
      <Profile1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[#090a0a] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Ethan Lewis</p>
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgViewsImagesAvatars2} width="64" />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]">
        <div className="absolute inset-[-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
            <circle cx="34" cy="34" id="Ellipse 9" r="33" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="item">
      <Profile2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[#090a0a] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Elijah Nelson</p>
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgViewsImagesAvatars3} width="64" />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]">
        <div className="absolute inset-[-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
            <circle cx="34" cy="34" id="Ellipse 9" r="33" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="item">
      <Profile3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[#090a0a] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Maya Patel</p>
      </div>
    </div>
  );
}

function Profile4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="profile">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgViewsImagesAvatars4} width="64" />
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]">
        <div className="absolute inset-[-3.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
            <circle cx="34" cy="34" id="Ellipse 9" r="33" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="item">
      <Profile4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic overflow-hidden relative shrink-0 text-[#090a0a] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Chloe Bennett</p>
      </div>
    </div>
  );
}

function Stories() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start leading-[0] left-0 px-[24px] py-[12px] top-[44px]" data-name="stories">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="author">
      <div className="relative shrink-0 size-[32px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgViewsImagesAvatars5} width="32" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic overflow-hidden relative text-[#090a0a] text-[16px] text-ellipsis whitespace-nowrap">Logan Kim</p>
    </div>
  );
}

function CardHead() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="card head">
      <Author />
      <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0" data-name="Controls / Buttons">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Follow</p>
      </div>
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

function Stats() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="stats">
      <Like />
      <Like1 />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="card footer">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#090a0a] text-[16px] w-[min-content]">Landing Page Website Design</p>
      <Stats />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="card">
      <CardHead />
      <div className="h-[184px] relative shrink-0 w-[327px]" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[12px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImagePlaceholderCopyPasteHere} />
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

function Author1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="author">
      <div className="relative shrink-0 size-[32px]" data-name="Views / Images: Avatars">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgViewsImagesAvatars6} width="32" />
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic overflow-hidden relative text-[#090a0a] text-[16px] text-ellipsis whitespace-nowrap">Liam Torres</p>
    </div>
  );
}

function CardHead1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="card head">
      <Author1 />
      <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[48px] shrink-0" data-name="Controls / Buttons">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Follow</p>
      </div>
    </div>
  );
}

function Like2() {
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

function Like3() {
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
      <Like2 />
      <Like3 />
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="card footer">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#090a0a] text-[16px] w-[min-content]">Landing Page Website Design</p>
      <Stats1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="card">
      <CardHead1 />
      <div className="h-[184px] relative shrink-0 w-[327px]" data-name="Views / Images: Ratio">
        <div className="absolute inset-0 rounded-[12px]" data-name="Image Placeholder (Copy paste here)">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImagePlaceholderCopyPasteHere1} />
        </div>
      </div>
      <CardFooter1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start left-1/2 px-[24px] py-[12px] top-[153px]" data-name="Main Content">
      <Card />
      <Card1 />
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

export default function HomePage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="Home Page">
      <Stories />
      <MainContent />
      <div className="-translate-x-1/2 absolute bg-white bottom-[34px] content-stretch drop-shadow-[0px_-1px_0.5px_rgba(20,20,20,0.02),0px_-2px_4px_rgba(20,20,20,0.04)] flex h-[56px] items-start left-1/2 w-[375px]" data-name="Bars / Tab Bar: Icon Only">
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="_Partials / Tab Bar: Icon Only">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="Icon">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <div className="absolute inset-[-3.75%_-4.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 21.5">
                  <path d={svgPaths.p89a2100} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="_Partials / Tab Bar: Icon Only">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="Icon">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-4.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path d={svgPaths.p32e5fff0} id="Vector" stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="_Partials / Tab Bar: Icon Only">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="Icon">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <div className="absolute inset-[-4.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path d={svgPaths.p29e7b400} id="Vector" stroke="var(--stroke-1, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="_Partials / Tab Bar: Icon Only">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[24px] top-1/2" data-name="Icon">
            <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.17%_-3.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.5">
                  <path d={svgPaths.p2bea9f80} id="Vector" stroke="var(--stroke-0, #979C9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="_Partials / Tab Bar: Icon Only">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[24px] top-1/2" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgIcon} width="24" />
          </div>
        </div>
      </div>
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
    </div>
  );
}