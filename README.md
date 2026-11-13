# Voyara Travel Website

## Run the website
1. Extract `voyara_working_website.zip`.
2. Open the extracted folder in Visual Studio Code.
3. Install/use the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The site opens in your browser. Use the navigation to visit Destinations and Contact.

A local web server is recommended because the Destinations page loads `data/portfolio.json` using JavaScript `fetch()`.

## Included features
- Responsive Home, Destinations and Contact pages.
- Destination cards and category filters.
- Click a destination image to open the lightbox; close with X, outside click or Escape.
- Mobile navigation menu.
- Contact form validation. On submit it opens a pre-filled email draft.

## Important before publishing
- Replace `hello@voyaratravel.com` in `contact.html` and `js/script.js` with your actual business email.
- The contact form uses `mailto:`. It does not save enquiries to a database. For online form submissions without an email app, connect a form service or backend.
- Photos and Google Fonts load from the internet.
- Voyara is a sample brand name; check trademark/domain availability before commercial use.

## Publish and get a public website link
You need a hosting service. A simple option is Netlify: create/sign in to a Netlify account, choose Add new site / Deploy manually, and drag the extracted website folder (the folder containing `index.html`) into the upload area. Netlify will provide a public URL. This project itself does not include a hosted public URL yet.
