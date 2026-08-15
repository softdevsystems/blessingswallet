(() => {
  const cfg = window.BLESSINGS_WALLET_CONFIG || {};

  const menuBtn = document.querySelector("[data-menu]");
  const nav = document.querySelector("[data-nav]");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }));
  }

  function computeGitHubReleaseUrl() {
    if (cfg.apkUrl) return cfg.apkUrl;
    const host = location.hostname;
    if (host.endsWith(".github.io")) {
      const owner = host.split(".")[0];
      const parts = location.pathname.split("/").filter(Boolean);
      const repo = parts[0] || `${owner}.github.io`;
      const file = cfg.apkFileName || "Blessings-Wallet.apk";
      return `https://github.com/${owner}/${repo}/releases/latest/download/${encodeURIComponent(file)}`;
    }
    return "downloads/Blessings-Wallet.apk";
  }

  document.querySelectorAll("[data-apk-link]").forEach(el => {
    el.href = computeGitHubReleaseUrl();
  });

  document.querySelectorAll("[data-play-link]").forEach(el => {
    if (cfg.playStoreUrl) {
      el.href = cfg.playStoreUrl;
      el.removeAttribute("aria-disabled");
      el.classList.remove("is-disabled");
    } else {
      el.href = "#";
      el.setAttribute("aria-disabled", "true");
      el.classList.add("is-disabled");
      el.addEventListener("click", e => {
        e.preventDefault();
        showToast("Google Play listing coming soon.");
      });
    }
  });

  document.querySelectorAll("[data-support-email]").forEach(el => {
    const email = cfg.supportEmail || "YOUR_SUPPORT_EMAIL@example.com";
    el.textContent = email;
    if (el.tagName === "A") el.href = `mailto:${email}`;
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
})();