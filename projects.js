const projects = [
  {
    title: "Zero Joint Construction",
    description:
      "A professional construction company website showcasing our services, projects, and contact details. Designed to attract clients and build trust through a clean, modern, and responsive design.",
    iconBg: "bg-gradient-to-tr from-yellow-600 to-gray-800",
    iconPath: "M4 6h16M4 10h16M4 14h16M4 18h16", // example building/structure-like icon
    tech: ["HTML", "CSS", "JavaScript", "Tailwind Css"],
    liveDemo: "https://zerojointconstruction.co.ke",
    code: "https://github.com/KakaDev254/Zerojoint",
  },
  {
    title: "Tash Auto Collections Website",
    description:
      "Responsive car dealership website showcasing premium auto collections, services, and contact details with a sleek modern design.",
    iconBg: "bg-gradient-to-tr from-green-500 to-red",
    iconPath: "M3 13l2-2 4 4L21 5l2 2-12 12-6-6z",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveDemo: "https://vibeauto.netlify.app/",
    code: "https://github.com/KakaDev254/tash-auto",
  },
  {
    title: "Nuvana Commerce",
    description:
      "A  DISCREET e-commerce platform for lifestyle & wellness products, built with Django, responsive UI, secure payments, and easy product management.",
    iconBg: "bg-gradient-to-tr from-pink-300 to-rose-700",
    iconPath:
      "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 6M7 13l-2 7h14l-2-7M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z",
    tech: ["Django 5", "PostgreSQL", "Bootstrap 5", "Cloudinary", "PesaPal"],
    liveDemo: "https://nuvana.co.ke",
    code: "https://github.com/KakaDev254/Electozone",
  },
  {
    title: "Fruit Seedling Website",
    description:
      "Modern, responsive website for a seedling business, showcasing products, services, and contact details to attract and inform customers.",
    iconBg: "bg-gradient-to-tr from-green-600 to-yellow-400",
    iconPath: "M12 2C8 2 5 5 5 9c0 4.28 7 13 7 13s7-8.72 7-13c0-4-3-7-7-7z",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveDemo: "https://fruitseedling.netlify.app/",
    code: "https://github.com/KakaDev254/mavunoseedling",
  },
];

function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = projects
    .map(
      (project) => `
      <div class="bg-gradient-to-r from-purple-950 to-blue-950 rounded-xl p-6 border border-gray-800 shadow-lg hover:shadow-xl transition duration-300">
        <div class="flex items-center justify-center w-12 h-12 ${
          project.iconBg
        } rounded-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
              project.iconPath
            }" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-white mb-2">${project.title}</h3>
        <p class="text-gray-400 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tech
            .map(
              (tech) => `
            <span class="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">${tech}</span>
          `
            )
            .join("")}
        </div>
        <div class="flex gap-4">
          <a href="${
            project.liveDemo
          }" class="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg text-white text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Live Demo
          </a>
          <a href="${
            project.code
          }" class="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-white text-sm hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            Code
          </a>
        </div>
      </div>
    `
    )
    .join("");
}

renderProjects();
