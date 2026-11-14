const portfolioData = {
  services: [],
  experienceRecords: [],
  experienceRecordTemplate: {
    companyName: "",
    jobPosition: "",
    employmentType: "",
    startDate: "",
    endDate: "",
    isCurrent: null,
    location: "",
    responsibilities: [],
    skillsUsed: [],
    workPhotos: []
  },
  experienceFieldRequirements: [
    { name: "companyName", required: true },
    { name: "jobPosition", required: true },
    { name: "employmentType", required: false },
    { name: "startDate", required: true },
    { name: "endDate", required: false },
    { name: "isCurrent", required: false },
    { name: "location", required: false },
    { name: "responsibilities", required: false },
    { name: "skillsUsed", required: false },
    { name: "workPhotos", required: false }
  ],
  experienceReferences: [
    "https://images.openai.com/static-rsc-4/v_ENOwsBvh1uvALVnAhi7_MmgOj3wEKXNGOWenhl3Ku3gftC4U78Yc0kD1SfRGZr95Ta1ic1D-oODWL3AmwPWyidXwwH76tj2_qJobZ-Y5As4YMphD7i8TXdAXX4mw4DmF1-7O9VHu-I1dTR9B0KUEu6fOFLNK4kh0GdXJPclo8?purpose=inline",
    "https://images.openai.com/static-rsc-4/gr5aJ_ojkjwN064fEanIEadnirfojk0wDHpW3D4wKHQp0fvaQOzi6a7WQJ7p_y3Q_AGo-5ljKPhXRJ6Yy6l0OB0aszng8c0_8-BvCY6j-HU2fF10BP92DDroM43eNXZAbviKOnLHQtc_KL1Uxy9C_6TE6BO6UYSJKBrxrrDwDaQ?purpose=inline",
    "https://images.openai.com/static-rsc-4/WXq6fvYzAhby54wANpeEwlSHRWQXZ9hOI_UrKa3JbX09P-cpnFvSZEz9ZbFhmmSUY_emUVw0SkUrlPj3Wl5ppxh9f2Qf7AlYx_2HIPI0FkIhROh-9mg_FN-FN2Ng4zRUeNXKpwXO2j_vCP6QMDUctTtION1Ely9XhsjIe8a6dIw?purpose=inline"
  ],
  skills: [
    {
      title: "Electrical Installation",
      items: ["Residential Wiring", "Commercial Wiring", "New Building Wiring", "Switch & Socket Installation", "Fan Installation", "Electrical Fittings"],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative electrician stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/3E359TR73MDEyJKUDdCgR68YtuLkuzeKcpdAQvc9T4-CaNpCnJTiNIDkJHcjAbeWZ75-R3GtVuYouisE4iQLtIMQRcosIRixqtBW-eqEFP_yUFncrP-hGyVXmhf9wssXo9jmQ83KcFeDcPaJVk4NQi_T9Z1jmA0Kclj1J03P_2Q?purpose=inline",
        "https://images.openai.com/static-rsc-4/cp8ECwSfcwdjm3c6HJLSTWNp3MJGawXKANcgpLqViDKuXyGgHTTVKy45u9jG8Stg6FVZBvA9uwypck85b-zEw9B27rdbeS37gDHPJZo0NMl7Yoy8TqHEPBjOfNvdE2cSifsXYXisCpbGyTUrwM_9To4kE3l1sncuIvOzZBzSIsc?purpose=inline",
        "https://images.openai.com/static-rsc-4/s2eTJw06I_HrJjyZP1HYXPCTgSNbs4xhizaFl9lcoqcjLhyWo4N6Do5g7S5e3RZHrV-JKasKlo7BnjQZvotGtutUGNhj-9e5icUmZmrFBdlxYkBvhZoDGQGuzUuMmkXoWm11w-V6d4D8ZcUZBGHfjW9Sv0A2tEWxtYRheZ3hE0o?purpose=inline"
      ]
    },
    {
      title: "Electrical Repair & Maintenance",
      items: ["Electrical Fault Finding", "Wiring Repair", "Switch & Socket Repair", "Fan Repair", "Electrical Maintenance", "Troubleshooting"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative electrical repair stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/w3pHo-adU3hicrMhdlda9opQGeUaClLWPCPgXkEOJEBKCJ4291flMSlLFn8LQYWHlS7l5CtcnfyQTwNCa_d3gQXpQdJ2VkqU0e6Wzv1XzrMTPsvnIkYQge2CbMWF5AQHpFSqG_k15Hckxs3gcqKAUTYSBdOaBSzWjFXvF-bSlAQ?purpose=inline",
        "https://images.openai.com/static-rsc-4/ADFMEak_el-4AjqNju4NsnBqimp4ATPLfohoge9HiKlK5Ou4Agd6SkP-1J2TnRdOlmv8yHmqZMp_RMzpfwu9hBTjJEVghaw5GY4zu6CWKETdQZwiLtJg_HXZW26_hBJEUIQj9slrzx4VAdpOS7bLCn_OWGkGm9vdCqUMEshGFDA?purpose=inline",
        "https://images.openai.com/static-rsc-4/694czDZ3pjSbmmQJ3mz3ylYPzaHhQzxQ4c_IMzEiIIJtC1ICp-6VEJM8LPdnPsyGhVGxfDBfKZsLrAnPK7f5u5uLjqA3c0VlYd1z70vn0AQRJOAg62-9XllcLBdWPsepO2TkBzLNauMIUONVKpOOO1mmIAZkJ5JkIrK_ZKEALbI?purpose=inline"
      ]
    },
    {
      title: "Electrical Panel & Distribution",
      items: ["Distribution Board Installation", "MCB Installation", "RCCB / ELCB Installation", "Panel Maintenance", "Load Distribution"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative electrical panel stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/-I-_gON0tCGNzq0Wm0c_as4LuIRTilc3Py9udhXj4cgjJL6irwjKrA9wEDoB8FSsmwQS8N5QJdP5KK73UNJfhDpd2zm0ED3oqJB0svjLxZcVdV_nXp0x79R582ChR8GUPFjgBWd54eV0Zbl9g3j5AjIrkHDgOYbzKX2ffv1AZ2U?purpose=inline",
        "https://images.openai.com/static-rsc-4/_WLaiKk5xII_BTx0bIJc8AO_T-3jGQu6piDDDMHIzNjZ3EmcIyELJuhwH6_DlFrp-Mrv6wgDHfBCwqrATD62t7Q5yu4pk3bUcGBlvqeUUda0o2yDI9866VGMNZ0BuiaB_NoC6RvBtKyx9Xux5YdRJkbB_k6WGpTwYbas1z1svJg?purpose=inline",
        "https://images.openai.com/static-rsc-4/UgosKkWANlZOouUYXHRWF6mFnM-_1pgdrAzcRsZBoJRS_AXhGvgpWJQoKOk5rZGu3MuP_J52vVXe83D10X-ED6KmpUTV4F7zMeVcQ-S2RHh0IB91mifED1Ctseasv5up0TuyAd_MmXSsJP7nxlE50awMbJ0WrpIAGy7wMwrITo?purpose=inline"
      ]
    },
    {
      title: "Advanced Electrical Work",
      items: ["Earthing & Grounding", "Single-Phase Wiring", "Three-Phase Wiring", "Motor Connection", "Water Pump Work", "Inverter Installation"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative electrical planning stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/WeG6vmcB0PUtSH_ZGLWEQ0QNjRgu_DP2ycKs7CfKJuyXK_N7EaeOp5orTCTZf9b7TTngHfE8PHKG4aiiV3ThUvQwfNRzOPaAJvc4jNi22SVOh0N5FhKhKnfXAQVN09wI6agnXZmBVXkpA3wez0qK1oU3lDN5-XvhcnNTmaPtlPQ?purpose=inline",
        "https://images.openai.com/static-rsc-4/DKevgIMUfnViZXxMcHnhHL-7LYluhYym1ZQqUI1GoySVPdnGSJEtwvGhqfpb664GxSSE2jotZsSddy4iBhPOlaf_tX1rccD_yAAlYU14ummgXhWMs7172Z8qwKEANZzrALVlL9WxfC4zpJv-OWttb1h358Ab7fZhV0tjMtrxpdU?purpose=inline",
        "https://images.openai.com/static-rsc-4/YaSckAB3pu_5ScPuoTfFzT9X_jpQpBVQnn6ikFOXy5s42OWike9pIZp8vdwxxxxDPW2LUfehb2pj7oVXJgpfbRBQ32x2jyhWLGWI7WCvwg3-6gGeDAjZ9wJD-WkiaWj8Wdkqii2RvleDeUDOBGC3_WpIDwta0q63d8sK6O4uvLo?purpose=inline"
      ]
    },
    {
      title: "Lighting & Special Installation",
      items: ["Indoor Lighting", "Outdoor Lighting", "Decorative Lighting", "LED Installation", "Ceiling Light Installation", "Emergency Lighting"],
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative lighting stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/pNgMqHy1x76YKqOKWVi5olNW4AyFAUCmGrvWIJDZFQTaOF3auy49HBPZEtwtphH0efTCjIWqnxy2eY6E2ZeJlqrACjL_A7fUDVB9iiqyJfYkliTh5Ja8u9qdOcRstwPKLJVMyO4B4v4dkqsKfIpBjucFSAYqxJwEVA4y3Kj2Tro?purpose=inline",
        "https://images.openai.com/static-rsc-4/VDnQjBjbU8dY5hQvI17AWK82wbVUbxiAGPhy26pr0wLz2GejsMwQeU6KPrTv0ftN7MKh6dRkcMrNX62HO-k7v2LygNydreuedLrVOTkYm7OcDGwRD33MbEff9MgR33y5nFVynaZyDifnWkSaBbZdACjpp7IWFURI-zUEVku3r_c?purpose=inline",
        "https://images.openai.com/static-rsc-4/ONP153DlqDNd4AjcsiMANTOdUxA4Bh6Y1SAV3LD48E64dVrW3Ui1ByW1hwkgjZv9Hg9BLzXqyKr-wNIIt7T5AZRs5c7wTvlSPm-QZA5ZtgsFWRyaIA7tUlmn-7403Au6XpcICekyCwE3kPg4srQhvPJspHelXA0KZiHyH9Sgajs?purpose=inline"
      ]
    },
    {
      title: "Professional Skills",
      items: ["Electrical Blueprint Reading", "Electrical Tools Handling", "Electrical Safety Practices", "Electrical Problem Diagnosis", "Customer Communication", "Work Planning"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Illustrative electrical tools and components stock photo, not Mohammad Hamid or his work",
      photoReferences: [
        "https://images.openai.com/static-rsc-4/jK8hwsOuFj44Xa-5kFcvLQh0nZUGYBve-9H6BgQl4EDYDlq8ZEtV6FmnBLYFCUsFoe-FWYiPrGulFtVRexuGKYPC2A3qTDqBV9aKjoADTWH8mDRti5R8EheEmV3pzjttkvV8wujLatUzFE5GbjL0INEWFSZ9LnNMG6WS4rWXkI4?purpose=inline",
        "https://images.openai.com/static-rsc-4/nLIk-8E2UL5DaG7KCiNSmI9wr4VEl_zqIQL_ff1FiIdvh6ADIQZ5eKeV4QTPCbwMiFs645dX9uBs-aPc4AMIL_hiZmPOyHbCC8oj8llKMyZ377xIV6bPiudUlT0o9OH0P-FB_M5Ome_k_qUeoG90GxpQtVsLzU4Aa2uWaFCZPZI?purpose=inline",
        "https://images.openai.com/static-rsc-4/8Xy-qBpq45wQGgzcvP-wqM2ho91vGLyXhJhBAr4eNXw_NJoZM3lk_sQ0IPdjLyl3D_HkuV4vWtenrzZhspAPwbiU19xAkwSk3BiMayzWOtwAGukPfvBzT5UnDNUVtUPDc0_zhAoUlNxpEvno_nlrHDbvU8kUi7s_UXnxukoNa34?purpose=inline"
      ]
    }
  ],
  projects: [
    {
      category: "Residential",
      title: "Demo: Residential lighting concept",
      description: "Illustrative layout concept only—not a completed customer project. Replace with verified details.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative electrician stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Wiring",
      title: "Demo: Wiring layout concept",
      description: "Illustrative planning concept only—not a completed project. Replace with genuine details.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative technical-planning stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Panel",
      title: "Demo: Panel work concept",
      description: "Illustrative electrical-work concept only—not a completed project. Replace with verified details.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative electronics-repair stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Commercial",
      title: "Demo: Commercial workspace concept",
      description: "Sample visual for layout only—not a customer site or claimed completed work.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative commercial-interior stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Lighting",
      title: "Demo: Interior lighting concept",
      description: "Illustrative lighting idea only—not a completed installation or project claim.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative interior-lighting stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Maintenance",
      title: "Demo: Electrical maintenance concept",
      description: "Sample portfolio concept only; no customer work or service offering is being claimed.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative electrician stock photo, not Mohammad Hamid or his work"
    },
    {
      category: "Other",
      title: "Demo: Electrical workspace concept",
      description: "Illustrative sample for page design only—not Mohammad Hamid’s workspace or project.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "Illustrative electronics stock photo, not Mohammad Hamid or his work"
    }
  ]
};

const pages = [...document.querySelectorAll("[data-page]")];
const navigationLinks = [...document.querySelectorAll("[data-route]")];
const nav = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const projectGrid = document.querySelector("#project-grid");
const homeProjectGrid = document.querySelector("#home-project-grid");
const projectEmpty = document.querySelector("#project-empty");
const projectDialog = document.querySelector("#project-dialog");
const skillCategoryGrid = document.querySelector("#skill-category-grid");
const experienceTimeline = document.querySelector("#experience-timeline");
const experienceEmpty = document.querySelector("#experience-empty");
const homeExperiencePreview = document.querySelector("#home-experience-preview");
const experienceReferenceLinks = document.querySelector("#experience-reference-links");
let activeFilter = "All";

function showPage() {
  const requestedPage = window.location.hash.slice(1);
  const pageName = pages.some((page) => page.dataset.page === requestedPage) ? requestedPage : "home";

  pages.forEach((page) => {
    const active = page.dataset.page === pageName;
    page.hidden = !active;
    page.classList.toggle("is-active", active);
  });
  navigationLinks.forEach((link) => {
    if (link.dataset.route === pageName) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (projectDialog.open) projectDialog.close();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjects() {
  const projects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((project) => project.category === activeFilter);

  projectGrid.replaceChildren(...projects.map(createProjectCard));
  homeProjectGrid.replaceChildren(...portfolioData.projects.slice(0, 3).map(createProjectCard));
  projectEmpty.hidden = projects.length > 0;
  projectEmpty.querySelector("h2").textContent = activeFilter === "All"
    ? "No demo samples are ready"
    : `No demo sample in ${activeFilter} yet`;
  projectEmpty.querySelector("p").textContent = "No genuine project photos or descriptions have been supplied.";
}

function createSkillCard(skill) {
  const card = document.createElement("article");
  card.className = "skill-category-card";
  const media = document.createElement("div");
  media.className = "skill-category-image";
  const image = document.createElement("img");
  image.src = skill.image;
  image.alt = skill.imageAlt;
  image.loading = "lazy";
  const photoLabel = document.createElement("span");
  photoLabel.className = "stock-image-label";
  photoLabel.textContent = "Illustrative stock photo — not Mohammad Hamid or his work";
  media.append(image, photoLabel);

  const content = document.createElement("div");
  content.className = "skill-category-copy";
  const label = document.createElement("span");
  label.className = "skill-demo-label";
  label.textContent = "Demo — confirm/replace before publishing";
  const title = document.createElement("h3");
  title.textContent = skill.title;
  const items = document.createElement("ul");
  items.className = "skill-example-list";
  skill.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    items.append(listItem);
  });
  const references = document.createElement("div");
  references.className = "skill-photo-references";
  const referenceLabel = document.createElement("p");
  referenceLabel.textContent = "Photo references — inspiration only, not project photos";
  const referenceLinks = document.createElement("div");
  referenceLinks.className = "skill-photo-reference-links";
  skill.photoReferences.forEach((url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `Photo reference ${index + 1} ↗`;
    link.setAttribute("aria-label", `Photo reference ${index + 1}, inspiration only, not a portfolio or project photo`);
    referenceLinks.append(link);
  });
  references.append(referenceLabel, referenceLinks);
  content.append(label, title, items, references);
  card.append(media, content);
  return card;
}

function renderSkills() {
  skillCategoryGrid.replaceChildren(...portfolioData.skills.map(createSkillCard));
}

function sortExperienceRecords(records) {
  const dateRank = (value) => {
    const time = Date.parse(value || "");
    return Number.isNaN(time) ? 0 : time;
  };
  return [...records].sort((a, b) => {
    const currentFirst = Number(Boolean(b.isCurrent)) - Number(Boolean(a.isCurrent));
    return currentFirst || dateRank(b.startDate) - dateRank(a.startDate);
  });
}

function formatExperienceDate(value) {
  if (!value) return "";
  const date = new Date(value.length === 7 ? `${value}-01T00:00:00` : value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(date);
}

function appendExperienceList(parent, headingText, entries) {
  if (!Array.isArray(entries) || entries.length === 0) return;
  const heading = document.createElement("h3");
  heading.textContent = headingText;
  const list = document.createElement("ul");
  entries.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    list.append(item);
  });
  parent.append(heading, list);
}

function createExperienceCard(record) {
  const item = document.createElement("li");
  item.className = "experience-entry";
  const marker = document.createElement("span");
  marker.className = "experience-marker";
  marker.setAttribute("aria-hidden", "true");
  const card = document.createElement("article");
  card.className = "experience-card";
  const header = document.createElement("div");
  header.className = "experience-card-header";
  const company = document.createElement("h2");
  company.textContent = record.companyName || "Company name to be confirmed";
  const position = document.createElement("p");
  position.textContent = record.jobPosition || "Job position to be confirmed";
  header.append(company, position);
  if (record.isCurrent) {
    const currentBadge = document.createElement("span");
    currentBadge.className = "current-position-badge";
    currentBadge.textContent = "Current Position";
    header.append(currentBadge);
  }
  const start = formatExperienceDate(record.startDate) || "Start date to be confirmed";
  const end = record.isCurrent ? "Present" : formatExperienceDate(record.endDate) || "End date to be confirmed";
  const period = document.createElement("p");
  period.className = "experience-period";
  period.textContent = `${start} – ${end}`;
  card.append(header, period);

  const details = [];
  if (record.employmentType) details.push(["Employment type", record.employmentType]);
  if (record.location) details.push(["Location", record.location]);
  if (details.length) {
    const detailList = document.createElement("dl");
    detailList.className = "experience-meta";
    details.forEach(([label, value]) => {
      const wrapper = document.createElement("div");
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");
      description.textContent = value;
      wrapper.append(term, description);
      detailList.append(wrapper);
    });
    card.append(detailList);
  }
  appendExperienceList(card, "Responsibilities", record.responsibilities);
  appendExperienceList(card, "Skills used", record.skillsUsed);
  if (Array.isArray(record.workPhotos) && record.workPhotos.length) {
    const photos = document.createElement("div");
    photos.className = "experience-work-photos";
    record.workPhotos.forEach((photo) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.alt || "Work experience photo";
      image.loading = "lazy";
      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption || "Work photo";
      figure.append(image, caption);
      photos.append(figure);
    });
    card.append(photos);
  }
  item.append(marker, card);
  return item;
}

function renderExperience() {
  const records = sortExperienceRecords(portfolioData.experienceRecords);
  experienceTimeline.replaceChildren(...records.map(createExperienceCard));
  experienceEmpty.hidden = records.length > 0;
  homeExperiencePreview.textContent = records.length
    ? `${records.length} confirmed employment record${records.length === 1 ? "" : "s"} available.`
    : "Company names, roles and dates have not been supplied yet. Current employment details remain unlisted until confirmed.";
  experienceReferenceLinks.replaceChildren(...portfolioData.experienceReferences.map((url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `Timeline design reference ${index + 1} ↗`;
    link.setAttribute("aria-label", `Timeline design reference ${index + 1}, inspiration only`);
    return link;
  }));
}

function createProjectCard(project) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "project-card";
  card.setAttribute("aria-label", `Open demo project sample: ${project.title}`);
  const image = document.createElement("div");
  image.className = "project-card-image";
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.imageAlt;
  img.loading = "lazy";
  image.append(img);
  const stockLabel = document.createElement("span");
  stockLabel.className = "stock-image-label";
  stockLabel.textContent = "Illustrative stock photo";
  image.append(stockLabel);
  const badge = document.createElement("span");
  badge.className = "project-demo-badge";
  badge.textContent = "DEMO CONTENT — REPLACE BEFORE PUBLISHING";
  image.append(badge);

  const copy = document.createElement("div");
  copy.className = "project-card-copy";
  const category = document.createElement("span");
  category.textContent = project.category;
  const title = document.createElement("h3");
  title.textContent = project.title;
  const description = document.createElement("p");
  description.textContent = project.description;
  const disclaimer = document.createElement("p");
  disclaimer.className = "project-disclaimer";
  disclaimer.textContent = "DEMO CONTENT — REPLACE BEFORE PUBLISHING";
  copy.append(category, title, description, disclaimer);
  card.append(image, copy);
  card.addEventListener("click", () => openProject(project));
  return card;
}

function openProject(project) {
  document.querySelector("#dialog-category").textContent = project.category;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  const image = document.querySelector("#dialog-image");
  image.replaceChildren();
  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.imageAlt || project.title;
    image.append(img);
    const stockLabel = document.createElement("span");
    stockLabel.className = "stock-image-label";
    stockLabel.textContent = "Illustrative stock photo — not a Mohammad Hamid project";
    image.append(stockLabel);
  } else {
    image.textContent = "Project image";
  }
  projectDialog.showModal();
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("is-selected", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderProjects();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});
window.addEventListener("hashchange", showPage);
document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProjects();
renderSkills();
renderExperience();
showPage();
