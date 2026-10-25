/*
  SIU 페이지 콘텐츠 수정 안내
  1) 포스터 파일을 images 폴더에 넣습니다.
  2) 아래 posters 목록의 title, description, image 값을 수정합니다.
  3) 추가 자료는 resources 목록에 title, description, url을 입력합니다.
  4) 기존 사이트에 파일을 다시 배포하면 기존 URL을 유지할 수 있습니다.
*/
const posters = [
  {
    title: "홍보 포스터 제목을 입력하세요",
    description: "일정 또는 간단한 설명을 입력하세요.",
    image: "images/poster-01.jpg",
    alt: "홍보 포스터 1"
  },
  {
    title: "두 번째 포스터 제목",
    description: "필요하지 않으면 이 항목을 삭제해도 됩니다.",
    image: "images/poster-02.jpg",
    alt: "홍보 포스터 2"
  }
];

const resources = [
  {
    title: "행사 신청 또는 상세 안내",
    description: "신청 페이지나 자세한 안내가 있다면 링크를 입력하세요.",
    url: "https://example.com"
  },
  {
    title: "SIU 인스타그램",
    description: "SIU 공식 소식 확인하기",
    url: "https://www.instagram.com/seniorisu/"
  }
];

const posterList = document.getElementById("poster-list");
posters.forEach((poster) => {
  const card = document.createElement("article");
  card.className = "poster-card";

  const link = document.createElement("a");
  link.href = poster.image;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${poster.title} 이미지 크게 보기`);

  const img = document.createElement("img");
  img.src = poster.image;
  img.alt = poster.alt || poster.title;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.alt = "이미지를 찾을 수 없습니다. 파일명과 images 폴더를 확인해 주세요.";
    img.style.minHeight = "150px";
    img.style.padding = "24px";
  });

  const caption = document.createElement("div");
  caption.className = "poster-caption";
  const title = document.createElement("h3");
  title.textContent = poster.title;
  const description = document.createElement("p");
  description.textContent = poster.description || "";

  caption.append(title, description);
  link.append(img);
  card.append(link, caption);
  posterList.append(card);
});

const resourceList = document.getElementById("resource-list");
resources.forEach((resource) => {
  if (!resource.url || resource.url === "https://example.com") return;
  const link = document.createElement("a");
  link.className = "resource-card";
  link.href = resource.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const textWrap = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = resource.title;
  const description = document.createElement("span");
  description.textContent = resource.description || "";
  textWrap.append(title, description);

  const arrow = document.createElement("span");
  arrow.className = "resource-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(textWrap, arrow);
  resourceList.append(link);
});
