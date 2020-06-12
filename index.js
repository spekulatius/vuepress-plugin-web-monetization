module.exports = (options = {}, context) => {
  return {
    extendPageData ($page) {
      // Should we use the address from the site config or from the frontmatter?
      // For more better understandability it's referred to as 'address'
      // ..in the config while 'monetization' in the frontmatter.
      const address = $page.frontmatter.monetization || options.address

      // Add the meta tag
      let meta = $page.frontmatter.meta || []
      meta.push({ 'name': 'monetization', 'content': address })
      $page.frontmatter.meta = meta
    }
  }
}