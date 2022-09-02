# Tu Hoang Portfolio Website

This repository contains my portfolio website. I modify [Grape Academic Theme](https://github.com/chrjabs/Grape-Academic-Theme) to create the website. Feel free to use the original theme or mine to create your portfolio website.

# Deployment
## Local
To deploy this website locally, you can execute <code>jekyll</code>'s commands:
<code>bundle exec jekyll serve --livereload</code>

Don't forget <code>--livereload</code> option since it asks Jekyll to watch for any changes in the settings, regenerate the website according to the changes, and reload the website automatically.

## GitHub Pages
To deploy this website to GitHub Pages, you firstly need to create a repository whose name is in the format: <code>username</code>.github.io.

Then, you must go to the Page's setting of the repository and set up <code>Build and deployment</code> setting. There are two options: <code>Deploy fom a branch</code> and <code>GitHub Actions</code>. <code>Deploy from a branch</code> is used in the original template but I figure out that <code>GitHub Actions</code> is more convenient. It allows you to not manage the CNAME file when configuring your own domain and not creating a folder/branch storing the site.

Finally, you can access your website at the link: <code>username</code>.github.io.

## Netlify
Netlify is also a great option for deploying the site. You can connect your repository with Netlify and choose a setting to build the repository with Jekyll. Even though Netlify assigns a random domain for your site, you can change the domain (e.g., <code>username</code>.netlify.app).


## GitHub Pages vs Netlify
Even though there are many differences between GitHub Pages and Netlify, I think only four of them are important in deploying portfolio websites:
1. How easy do you want to configure the website to work with your own domain?
   **Netlify**. GitHub Pages requires more DNS settings and you have to wait more than Netlify.
2. Does GitHub Pages's deployment time annoy you?
    **Netlify**. GitHub Pages is much slower than Netlify.
3. Do you want to authorize another service to connect to your repository and GitHub account?
    **GitHub Pages**. You need to authorize Netlify to read your GitHub's account information and your repository.
4. Do you want to public your portfolio website repository?
    **Netlify**. If your GitHub account is free and you set the repository to private, your website will disappear and you have to configure everything again to make it live. Since Netlify is authorized to read your repository, even though you make it private, Netlify can still deploy it.