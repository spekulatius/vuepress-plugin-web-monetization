/**
 * @typedef {import('vue').VueConstructor} Vue
 * @param {{ Vue: Vue }} param0
 */
export default ({ Vue }) => {
  /** @type {string} */
  const LINK_SELECTOR = 'link[rel="monetization"]';

  /**
   * Creates or updates the monetization link tag
   * @param {string} href - The payment pointer URL
   */
  const updateMonetizationLink = (href) => {
    try {
      // Remove existing link if present
      const existingLink = document.querySelector(LINK_SELECTOR);
      if (existingLink) {
        existingLink.remove();
      }

      // Create and add new link
      const link = document.createElement("link");
      link.setAttribute("rel", "monetization");
      link.setAttribute("href", href);
      document.head.appendChild(link);
    } catch (error) {
      console.warn("Failed to update monetization link:", error);
    }
  };

  Vue.mixin({
    mounted() {
      const address = this.$page?.frontmatter?.monetization || MONETIZATION_ADDRESS;

      if (!address) return;

      // Validate and format payment pointer
      const formattedAddress = address.startsWith("$") ? `https://${address.slice(1)}` : address;

      updateMonetizationLink(formattedAddress);
    },

    beforeDestroy() {
      try {
        const link = document.querySelector(LINK_SELECTOR);
        if (link) {
          link.remove();
        }
      } catch (error) {
        console.warn("Failed to cleanup monetization link:", error);
      }
    },
  });
};
