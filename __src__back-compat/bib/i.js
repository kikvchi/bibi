window['bibi:jo'] || (BiBiJS => BiBiJS && BiBiJS.src && /\/bib\/i\.js$/.test(BiBiJS.src) && (JoJS => {
    JoJS.src = BiBiJS.getAttribute('src').replace(/bib\/i\.js$/, 'bibi/and/jo.js');
    JoJS.onload = () => (Jo => Jo.Status || Jo.embed())(window['bibi:jo']);
    document.head.appendChild(JoJS);
})(document.createElement('script')))(document.currentScript || (Scripts => Scripts[Scripts.length - 1])(document.getElementsByTagName('script')));
