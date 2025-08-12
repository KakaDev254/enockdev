const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced product filtering, secure payment integration, and real-time inventory management.",
    iconBg: "bg-gradient-to-tr from-pink-500 to-purple-500",
    iconPath: "M12 4v16m8-8H4",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    iconBg: "bg-gradient-to-tr from-blue-500 to-cyan-500",
    iconPath: "M8 9l4-4 4 4m0 6l-4 4-4-4",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    liveDemo: "#",
    code: "#",
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
