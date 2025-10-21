export const runIntersectionAnimation = (
  selector: string = ".anim",
  threshold: number = 0.3
) => {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  const options = { threshold };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("element-show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((el) => observer.observe(el));
};
