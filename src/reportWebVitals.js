const reportWebVitals = onPerfEntry => {
  console.log("%cHey there, hacker! 👀", "color: #00ff00; font-size: 16px; font-weight: bold;");
  console.log("%cflag{c0ns0le_3ast3r_egg;)}", "color: #9c2200;");
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
