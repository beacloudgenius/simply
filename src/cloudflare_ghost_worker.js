/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/cloudflare_ghost_worker.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/cloudflare_ghost_worker.js --name ghost` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response("Hello World!");
// 	},
// };


addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const response = await fetch(request);

	// Clone the response so that it's no longer immutable
	const newResponse = new Response(response.body, response);

	// Add a custom header with a value
	newResponse.headers.append("x-workers-hello", "Hello from Cloud Genius");

	// Delete headers
	// newResponse.headers.delete("x-header-to-delete");
	// newResponse.headers.delete("x-header2-to-delete");

	// Adjust the value for an existing header
	newResponse.headers.set("x-powered-by", "Cloud Genius");

	newResponse.headers.set(
		"Content-Security-Policy",
		"\
            base-uri 'self'; \
            object-src 'self' https://s3-us-west-2.s3.amazonaws.com; \
            img-src 'self' *.docker.com *.vsassets.io ghost.org *.supabase.co *.spacergif.org *.unsplash.com *.tenor.com *.gravatar.com *.ghost.org *.cloudgenius.app cloudgenius.app thecloudseminar.com *.thecloudseminar.com *.amazonaws.com *.ytimg.com *.vimeocdn.com *.githubusercontent.com blob: data:; \
            media-src blob: thecloudseminar.com *.thecloudseminar.com hls.home.cloudgeni.us hls.cloudgenius.app *.amazonaws.com youtube.com *.vimeo.com *.vimeocdn.com; \
            script-src * data: 'unsafe-eval' 'unsafe-inline' blob: https: 'self' *.vimeo.com *.chatra.io hi.cloudgenius.app *.thecloudseminar.com storage.googleapis.com js.stripe.com *.stripe.com *.stripe.network;\
            frame-ancestors 'self'; \
            form-action 'self' *.cloudgenius.app formspree.io; \
            style-src 'unsafe-inline' 'self' *.thecloudseminar.com fonts.googleapis.com cdn.jsdelivr.net maxcdn.bootstrapcdn.com; \
            default-src 'self' *.thecloudseminar.com ghost.org/changelog.json ghost.org/explore/api/feed/ resources.ghost.io/resources/ghost/api/content/posts/ cdn.jsdelivr.net tcs-ghost.s3.us-west-2.amazonaws.com tenor.googleapis.com api.unsplash.com;  \
            font-src 'self' *.gstatic.com *.thecloudseminar.com ; \
            frame-src 'self' beacloudgenius-my.sharepoint.com lu.ma *.thecloudseminar.com js.stripe.com ghost.org/explore/ calendly.com platform.twitter.com player.vimeo.com www.youtube.com chat.chatra.io; \
            ",
		// report-uri https://cloudgenius.report-uri.com;
		// https://securityheaders.com/
	);




	newResponse.headers.set(
		"Permissions-Policy",
		"\
			geolocation=(self), midi=(self), sync-xhr=(self), microphone=(self), camera=(self), magnetometer=(self), gyroscope=(self), fullscreen=(self), payment=(self) \
            ",
	);

	newResponse.headers.set(
			"Referrer-Policy", "no-referrer, strict-origin-when-cross-origin"
	);

	newResponse.headers.set(
			"report-to", "https://cloudgenius.report-uri.com"
	);

	return newResponse;
}
