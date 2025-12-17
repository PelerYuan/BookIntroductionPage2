const ctaLinks = {
  main: "#",
};

function wireCTA() {
  const map = {
    "cta-main": ctaLinks.main,
  };
  Object.entries(map).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
}

function init() {
  wireCTA();
}

document.addEventListener("DOMContentLoaded", init);

