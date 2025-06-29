
document.addEventListener("DOMContentLoaded", function() {
  const subscriptionLinks = document.querySelectorAll(".subscriptions a");
  subscriptionLinks.forEach(link => {
    link.addEventListener("click", function() {
      alert(`You are proceeding to payment for: ${this.textContent}`);
    });
  });
});
