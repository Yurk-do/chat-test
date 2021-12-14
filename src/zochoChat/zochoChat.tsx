const zochoInit = () => {
  var $zoho: any = $zoho || {};
  $zoho.salesiq = $zoho.salesiq || {
    widgetcode:
      'f2f2526ba48eb15195cd8007ca90163c62c8d6ece9ad4fcfd7e552d5f521fa5d7a85a60d7e4ced22c2b98ea20511a1dc',
    values: {},
    ready: function () {},
  };
  var d = document;
  let s = d.createElement('script');
  s.type = 'text/javascript';
  s.id = 'zsiqscript';
  s.defer = true;
  s.src = 'https://salesiq.zoho.eu/widget';
  let t: any = d.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
  d.write("<div id='zsiqwidget'></div>");
};

export default zochoInit;

