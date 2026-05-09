import svgPaths from "./svg-jgmhn18a6e";
import imgViewsImagesAvatars from "./dce94a79f20f749e08e9545104460da7c171bd7a.png";
import imgImagePlaceholderCopyPasteHere from "./9e6822947ea8e7705b0ddfd65b3b1959f08dac97.png";
import imgViewsImagesAvatars1 from "./dce94a79f20f749e08e9545104460da7c171bd7a.png";
import imgImagePlaceholderCopyPasteHere1 from "./83bb04c40f4a152148c67faa39c26d7ce3897c3e.png";

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
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgViewsImagesAvatars1} width="32" />
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

export default function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start px-[24px] py-[12px] relative size-full" data-name="Main Content">
      <Card />
      <Card1 />
    </div>
  );
}