const posters = [
  { title: "CAREER METRO | 나를 찾는 여정", description: "진로 탐색 전시 · 2026.11.02(월)–11.10(화) · 샬롬관 로비", image: "images/career-metro-poster.jpg", alt: "CAREER METRO 진로 탐색 전시 포스터" }
];
const resources = [
  { title: "SIU 인스타그램", description: "SIU 공식 소식 확인하기", url: "https://www.instagram.com/seniorisu/" }
];
const posterList = document.getElementById("poster-list");
posters.forEach((poster) => {
  const card = document.createElement("article"); card.className = "poster-card";
  const link = document.createElement("a"); link.href = poster.image; link.target = "_blank"; link.rel = "noopener noreferrer";
  const img = document.createElement("img"); img.src = poster.image; img.alt = poster.alt || poster.title; img.loading = "lazy";
  const caption = document.createElement("div"); caption.className = "poster-caption";
  const title = document.createElement("h3"); title.textContent = poster.title;
  const description = document.createElement("p"); description.textContent = poster.description || "";
  caption.append(title, description); link.append(img); card.append(link, caption); posterList.append(card);
});
const resourceList = document.getElementById("resource-list");
resources.forEach((resource) => {
  const link = document.createElement("a"); link.className = "resource-card"; link.href = resource.url; link.target = "_blank"; link.rel = "noopener noreferrer";
  const wrap = document.createElement("div"); const title = document.createElement("strong"); title.textContent = resource.title;
  const desc = document.createElement("span"); desc.textContent = resource.description || ""; wrap.append(title, desc);
  const arrow = document.createElement("span"); arrow.className = "resource-arrow"; arrow.textContent = "↗"; link.append(wrap, arrow); resourceList.append(link);
});