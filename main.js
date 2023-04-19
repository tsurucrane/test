(() => {
  'use strict';
  kintone.events.on('app.record.index.show', (event) => {
    window.alert('hello!');
  });
})();
