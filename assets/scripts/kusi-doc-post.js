(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* Add Link in the Title for custom-kusi-doc.hbs
/* ---------------------------------------------------------- */
const setup = () => {
  // Return if no post box exists
  const markdown = document.querySelector('.js-kusi-doc');
  if (!markdown) return;

  // Search the titles in the post
  // Return if no title exists
  const argTitles = ['h2', 'h3'];
  const titles = markdown.querySelectorAll(argTitles.join(','));
  if (!titles.length) return;

  // Table of Contents Box
  const jsTableOfContent = document.querySelector('.js-table-content');
  const sidebar = document.querySelector('.js-sidebar-right');
  if (sidebar) sidebar.classList.add('lg:block');

  // Table of Content sidebar right
  function tableOfContent(link, el) {
    if (!jsTableOfContent) return;
    link.textContent = el.textContent;
    const tocList = document.createElement('li');
    if (el.closest('h3')) {
      link.classList = 'py-2 px-3 docstoc block hover:text-primary';
    } else {
      link.classList = 'py-2 px-3 block hover:text-primary';
    }
    tocList.appendChild(link);
    jsTableOfContent.appendChild(tocList);
  }

  // Links To Titles
  function linkToTile(link, el) {
    link.setAttribute('aria-hidden', 'true');
    link.innerHTML = '<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>';
    link.classList = 'anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500';
    el.insertBefore(link, el.childNodes[0]);
  }
  titles.forEach(el => {
    el.classList = 'hover-title';
    const titleLink = document.createElement('a');
    titleLink.href = `#${el.getAttribute('id')}`;

    // Table of Content
    tableOfContent(titleLink.cloneNode(true), el);

    // Link To Title
    linkToTile(titleLink, el);
  });
};
document.addEventListener('DOMContentLoaded', setup);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMva3VzaS1kb2MtcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU07RUFDbEI7RUFDQSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFOztFQUVmO0VBQ0E7RUFDQSxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7RUFDOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFFN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O0VBRXBCO0VBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0VBQ3BFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFFM0QsSUFBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDOztFQUU5QztFQUNBLFNBQVMsY0FBYyxDQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDakMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVc7SUFFakMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFFNUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsNENBQTRDO0lBQy9ELENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsb0NBQW9DO0lBQ3ZEO0lBRUEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztFQUN2Qzs7RUFFQTtFQUNBLFNBQVMsVUFBVSxDQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsMEZBQTBGO0lBQzNHLElBQUksQ0FBQyxTQUFTLEdBQUcsbUVBQW1FO0lBRXBGLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDekM7RUFFQSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSTtJQUNuQixFQUFFLENBQUMsU0FBUyxHQUFHLGFBQWE7SUFFNUIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDN0MsU0FBUyxDQUFDLElBQUksR0FBSSxJQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLEVBQUM7O0lBRTVDO0lBQ0EsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDOztJQUU3QztJQUNBLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO0VBQzNCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogQWRkIExpbmsgaW4gdGhlIFRpdGxlIGZvciBjdXN0b20ta3VzaS1kb2MuaGJzXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgLy8gUmV0dXJuIGlmIG5vIHBvc3QgYm94IGV4aXN0c1xuICBjb25zdCBtYXJrZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1rdXNpLWRvYycpXG4gIGlmICghbWFya2Rvd24pIHJldHVyblxuXG4gIC8vIFNlYXJjaCB0aGUgdGl0bGVzIGluIHRoZSBwb3N0XG4gIC8vIFJldHVybiBpZiBubyB0aXRsZSBleGlzdHNcbiAgY29uc3QgYXJnVGl0bGVzID0gWydoMicsICdoMyddXG4gIGNvbnN0IHRpdGxlcyA9IG1hcmtkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoYXJnVGl0bGVzLmpvaW4oJywnKSlcblxuICBpZiAoIXRpdGxlcy5sZW5ndGgpIHJldHVyblxuXG4gIC8vIFRhYmxlIG9mIENvbnRlbnRzIEJveFxuICBjb25zdCBqc1RhYmxlT2ZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhYmxlLWNvbnRlbnQnKVxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNpZGViYXItcmlnaHQnKVxuXG4gIGlmIChzaWRlYmFyKSBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2xnOmJsb2NrJylcblxuICAvLyBUYWJsZSBvZiBDb250ZW50IHNpZGViYXIgcmlnaHRcbiAgZnVuY3Rpb24gdGFibGVPZkNvbnRlbnQgKGxpbmssIGVsKSB7XG4gICAgaWYgKCFqc1RhYmxlT2ZDb250ZW50KSByZXR1cm5cblxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudFxuXG4gICAgY29uc3QgdG9jTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICAgIGlmIChlbC5jbG9zZXN0KCdoMycpKSB7XG4gICAgICBsaW5rLmNsYXNzTGlzdCA9ICdweS0yIHB4LTMgZG9jc3RvYyBibG9jayBob3Zlcjp0ZXh0LXByaW1hcnknXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsuY2xhc3NMaXN0ID0gJ3B5LTIgcHgtMyBibG9jayBob3Zlcjp0ZXh0LXByaW1hcnknXG4gICAgfVxuXG4gICAgdG9jTGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIGpzVGFibGVPZkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9jTGlzdClcbiAgfVxuXG4gIC8vIExpbmtzIFRvIFRpdGxlc1xuICBmdW5jdGlvbiBsaW5rVG9UaWxlIChsaW5rLCBlbCkge1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBsaW5rLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiaWNvbiBpcy1zdHJva2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1saW5rXCI+PC91c2U+PC9zdmc+J1xuICAgIGxpbmsuY2xhc3NMaXN0ID0gJ2FuY2hvciBweC0zIGlubGluZS1ibG9jayBpbnZpc2libGUgb3BhY2l0eS0wIC1tbC0xMiB0ZXh0LWdyYXktNTAwJ1xuXG4gICAgZWwuaW5zZXJ0QmVmb3JlKGxpbmssIGVsLmNoaWxkTm9kZXNbMF0pXG4gIH1cblxuICB0aXRsZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuY2xhc3NMaXN0ID0gJ2hvdmVyLXRpdGxlJ1xuXG4gICAgY29uc3QgdGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgdGl0bGVMaW5rLmhyZWYgPSBgIyR7ZWwuZ2V0QXR0cmlidXRlKCdpZCcpfWBcblxuICAgIC8vIFRhYmxlIG9mIENvbnRlbnRcbiAgICB0YWJsZU9mQ29udGVudCh0aXRsZUxpbmsuY2xvbmVOb2RlKHRydWUpLCBlbClcblxuICAgIC8vIExpbmsgVG8gVGl0bGVcbiAgICBsaW5rVG9UaWxlKHRpdGxlTGluaywgZWwpXG4gIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cClcbiJdfQ==

//# sourceMappingURL=map/kusi-doc-post.js.map
