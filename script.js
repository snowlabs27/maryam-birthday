const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let petalAnimations = [];

function animateRosePetals() {
  petalAnimations.forEach((animation) => animation.cancel());
  petalAnimations = [];

  if (reducedMotion.matches) {
    return;
  }

  const outerPetals = document.querySelectorAll(".rose-petal");
  outerPetals.forEach((petal, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const rotation = 2 + (index % 4) * 0.8;
    const drift = 1 + (index % 3);

    petalAnimations.push(
      petal.animate(
        [
          {
            transform: `translateY(${drift}px) rotate(${-direction * rotation}deg) scale(0.97)`,
          },
          {
            transform: `translateY(${-drift}px) rotate(${direction * rotation}deg) scale(1.035)`,
          },
        ],
        {
          delay: 2650 + index * 120,
          duration: 1500 + (index % 4) * 280,
          direction: "alternate",
          easing: "ease-in-out",
          iterations: Infinity,
        },
      ),
    );
  });

  const roseCurl = document.querySelector(".rose-curl");
  if (roseCurl) {
    petalAnimations.push(
      roseCurl.animate(
        [
          { transform: "rotate(-4deg) scale(0.98)" },
          { transform: "rotate(4deg) scale(1.03)" },
        ],
        {
          delay: 3000,
          duration: 2100,
          direction: "alternate",
          easing: "ease-in-out",
          iterations: Infinity,
        },
      ),
    );
  }
}

animateRosePetals();
reducedMotion.addEventListener("change", animateRosePetals);
