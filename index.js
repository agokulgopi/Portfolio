//// Utility cross-dissolve function for any slider
function setupCrossDissolve(images, imgA, imgB, interval=3000) {
  let index = 0, activeA = true;
  imgA.src = images[0];
  imgB.src = images[0];
  imgA.classList.add("active");

  setInterval(() => {
    const nextIndex = (index + 1) % images.length;
    if (activeA) {
      imgB.src = images[nextIndex];
      imgB.classList.add("active");
      imgA.classList.remove("active");
    } else {
      imgA.src = images[nextIndex];
      imgA.classList.add("active");
      imgB.classList.remove("active");
    }
    index = nextIndex;
    activeA = !activeA;
  }, interval);
}

window.addEventListener('DOMContentLoaded', () => {
  // Space Odyssey
  const spaceImages = [
    "gallery/post 1.png",
    "gallery/post 2.png"
  ];
  const spaceA = document.getElementById("spaceOdysseyA");
  const spaceB = document.getElementById("spaceOdysseyB");
  if (spaceA && spaceB && spaceImages.length > 1) {
    setupCrossDissolve(spaceImages, spaceA, spaceB);
  }

  // Muzan Entry
  const muzanImages = [
    "gallery/Master1.png",
    "gallery/Master3.png"
    // add more as needed
  ];
  const muzanA = document.getElementById("muzanA");
  const muzanB = document.getElementById("muzanB");
  if (muzanA && muzanB && muzanImages.length > 1) {
    setupCrossDissolve(muzanImages, muzanA, muzanB);
  }
});





// Section fade-in on scroll
    const sections = document.querySelectorAll('section');
    function showSections() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight-50) section.classList.add('visible');
      });
    }
    document.addEventListener('scroll', showSections);
    window.addEventListener('load', showSections);
    // Nav highlight
    document.querySelectorAll('nav a').forEach(a => {
      a.onclick = function() {
        document.querySelectorAll('nav a').forEach(v=>v.classList.remove('active'));
        this.classList.add('active');
      }
    });
