# HUNATE Movement - Website

This repository contains the static website files for the HUNATE Movement, founded by Khem Raj Pradhan. The site is built with plain HTML, CSS, and JavaScript, ready for deployment on GitHub Pages.

## Deployment to GitHub Pages

Follow these exact steps to deploy and configure your website.

### Step 1: Push Files to Your Repository

1.  **Repository Name:** Ensure your repository is named `prdhnkhem.github.io`. This is a special repository name that tells GitHub to build and deploy from the `main` branch automatically.
2.  **Upload Files:** Upload all the files and folders (`/en`, `/ne`, `/assets`, `/content`, `index.html`, `CNAME`, etc.) provided in this package directly into the root of the `prdhnkhem.github.io` repository.
3.  **Commit and Push:** Commit the files to your `main` branch and push them to GitHub.

GitHub Actions will automatically build and deploy your site. It should be live within a few minutes at `https://prdhnkhem.github.io`.

### Step 2: Configure Your Custom Domain (`khemrajpradhan.com.np`)

The `CNAME` file is already included in this repository, which tells GitHub Pages which custom domain to use. Now you just need to configure your domain's DNS settings.

**Go to your domain registrar's website (the service where you bought `khemrajpradhan.com.np`) and find the DNS management section.**

You have two options. Using A records is the recommended modern practice for apex domains.

#### Option A: Using A Records (Recommended)

1.  Create four **A** records pointing to the GitHub Pages IP addresses:
    * `185.199.108.153`
    * `185.199.109.153`
    * `185.199.110.153`
    * `185.199.111.153`

    Your DNS configuration should look like this:

| Type | Host/Name | Value/Points to | TTL |
| :--- | :-------- | :-------------------- | :-- |
| A | `@` | `185.199.108.153` | Auto |
| A | `@` | `185.199.109.153` | Auto |
| A | `@` | `185.199.110.153` | Auto |
| A | `@` | `185.199.111.153` | Auto |

2.  (Optional but Recommended) Create a **CNAME** record for the `www` subdomain to redirect `www.khemrajpradhan.com.np` to `khemrajpradhan.com.np`.

| Type | Host/Name | Value/Points to | TTL |
| :--- | :-------- | :----------------------- | :-- |
| CNAME| `www` | `prdhnkhem.github.io` | Auto |

#### Option B: Using a CNAME Record (Alternative for `www` subdomain)

If you prefer to make `www.khemrajpradhan.com.np` your primary domain, you would need to change the content of the `CNAME` file to `www.khemrajpradhan.com.np` and then configure your DNS as follows. This is generally not recommended for root domains.

| Type | Host/Name | Value/Points to | TTL |
| :--- | :-------- | :----------------------- | :-- |
| CNAME| `www` | `prdhnkhem.github.io` | Auto |

You would also need to set up a redirect from the root domain (`khemrajpradhan.com.np`) to the `www` subdomain with your domain registrar.

### Step 3: Verify and Enforce HTTPS

1.  **Wait for DNS:** DNS changes can take anywhere from a few minutes to 48 hours to propagate across the internet.
2.  **Check GitHub Settings:** Go to your repository's `Settings` > `Pages`.
3.  **Custom Domain:** Your custom domain `khemrajpradhan.com.np` should appear. If there is an error, wait for the DNS to update.
4.  **Enforce HTTPS:** Once GitHub has verified your domain, check the box for **"Enforce HTTPS"**. This ensures your site is served securely.

Your website is now live and configured correctly at **https://khemrajpradhan.com.np**.
