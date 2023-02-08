// https://css-tricks.com/making-mermaid-diagrams-in-markdown/

// import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
import mermaid from 'mermaid';

// select <pre class="mermaid"> _and_ <pre><code class="language-mermaid">
document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach($el => {
  // if the second selector got a hit, reference the parent <pre>
  if ($el.tagName === "CODE")
    $el = $el.parentElement
  // put the Mermaid contents in the expected <div class="mermaid">
  // plus keep the original contents in a nice <details>
  $el.outerHTML = `
    <div class="mermaid">${$el.textContent}</div>
    <details>
      <summary>Diagram source</summary>
      <pre>${$el.textContent}</pre>
    </details>
  `
})

// initialize Mermaid to [1] log errors, [2] have loose security for first-party
// authored diagrams, and [3] respect a preferred dark color scheme

let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let mermaidTheme = (isDark) ? 'dark' : 'default';

mermaid.initialize({
  startOnLoad: true,
  logLevel: "error", // [1]
  securityLevel: "loose", // [2]
  theme: mermaidTheme // [3]
})

// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	mermaid.initialize({ theme: "dark"});
// } else {
// 	mermaid.initialize({ theme: ""});
// }

// window.matchMedia('(prefers-color-scheme: dark)')
// .addEventListener(
// 	'change',
// 	function () {
// 		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			mermaid.initialize({ theme: "dark"});
// 		} else {
// 			mermaid.initialize({ theme: ""});
// 		}
// 	}
// )
