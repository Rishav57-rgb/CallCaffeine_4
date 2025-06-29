
document.addEventListener("DOMContentLoaded", function() {
  const subscriptionLinks = document.querySelectorAll(".subscriptions a");
  subscriptionLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      alert(`You clicked on "${this.textContent}". Payment coming soon!`);
    });
  });
});
