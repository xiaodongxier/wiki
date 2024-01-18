setTimeout(() => {
  const element = document.getElementsByClassName("md-copyright")[0];
  const busuanzi = `
  <span id="busuanzi_container_site_pv">
      本站总访问量<span id="busuanzi_value_site_pv"></span>次
  </span>
  `;
  element.insertAdjacentHTML('afterend', busuanzi);
}, 1000);