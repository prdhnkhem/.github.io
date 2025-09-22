# Website for Khem Raj Pradhan & The Hunate Movement

This repository contains the source code for the official website, [khemrajpradhan.com.np](https://khemrajpradhan.com.np). The site is a bilingual (English and Nepali), static website built with HTML, CSS, and JavaScript. It is designed to be hosted on GitHub Pages and served via Cloudflare.

## Project Overview

* **Purpose:** To share the personal story of Khem Raj Pradhan and provide a comprehensive resource for the Hunate Movement, its philosophy, and its initiatives.
* **Technology:** HTML, CSS, JavaScript (no complex frameworks).
* **Hosting:** GitHub Pages.
* **Domain & DNS:** Cloudflare.

## File Structure

The repository is organized to be as simple as possible to maintain.

```
/
│
├── CNAME                  # Points to the custom domain
├── .nojekyll              # Disables Jekyll on GitHub Pages
├── 404.html               # Custom 404 page
├── index.html             # The main language selection page
├── README.md              # This file
├── robots.txt             # Instructions for search engines
├── sitemap.xml            # Map of the site for SEO
├── privacy-policy.html
└── terms-and-conditions-of-use.html
│
├── assets/                # Contains all static files
│   ├── css/style.css      # The single stylesheet for the entire site
│   ├── js/main.js         # The single JavaScript file for interactivity
│   └── images/            # All image assets
│
├── english/               # Contains all English HTML pages
│   ├── index.html
│   ├── about.html
│   └── ... (all other English pages)
│
└── nepali/                # Contains all Nepali HTML pages
    ├── index.html
    ├── about.html
    └── ... (all other Nepali pages)
```

## How to Update the Website

Updating the website is designed to be straightforward.

### Editing Content

To change the text on any page, you simply need to edit the corresponding HTML file.

1.  Navigate to the correct language folder (`/english/` or `/nepali/`).
2.  Find the HTML file for the page you want to change (e.g., to edit the English "About" page, open `/english/about.html`).
3.  Open the file and make your text edits directly in the HTML.
4.  Save the file.

### Adding or Replacing Images

1.  Make sure your new image has the exact same filename and extension as the one you are replacing.
2.  Upload the new image to the `/assets/images/` folder, overwriting the old one.

### Updating Links

To change a link (e.g., update a Google Form link):

1.  Open the relevant HTML file(s) where the link appears.
2.  Find the `<a>` tag and change the `href="..."` attribute to the new URL.
3.  Save the file.

## Deployment

This site is set up for automatic deployment via GitHub Pages.

1.  **Commit and Push:** After making any changes, commit them to your repository and push them to the `main` (or `master`) branch.
2.  **GitHub Pages:** GitHub will automatically detect the changes and redeploy the site. This process usually takes 1-2 minutes.
3.  **Cloudflare:** Your Cloudflare settings should already be configured to point your domain to the GitHub Pages server. No changes are needed here unless you are changing the domain itself.

**Note:** If you ever experience issues with caching after an update, you may need to purge the cache in your Cloudflare dashboard.
