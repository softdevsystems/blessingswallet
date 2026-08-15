# Blessings Wallet Website

A simple, responsive static website designed to match the Blessings Wallet Android app.

## Included

- Responsive landing page
- Supplied Blessings Wallet logo used in the header, hero, and favicon
- Simple responsive app screenshot gallery
- Features and app explanation
- About the App / About Us
- Privacy Policy
- Terms & Conditions
- Data Safety page
- APK download button
- Google Play placeholder button
- Mobile navigation
- 404 page
- No external frameworks or CDNs

## Publish on GitHub Pages

Upload the contents of this folder to a GitHub repository and publish the repository as a GitHub Pages site.

The site uses only HTML, CSS, JavaScript, SVG, and WEBP files, so no build process is required.

## APK Download Button

The website automatically detects a standard GitHub Pages URL and builds a latest-release link using an APK named:

`Blessings-Wallet.apk`

Create a GitHub Release and upload your signed APK with exactly that filename.

You can also set your own direct APK URL in:

`assets/js/config.js`

```js
apkUrl: "https://your-download-link/Blessings-Wallet.apk"
```

## Google Play Link

After the app is published, edit `assets/js/config.js`:

```js
playStoreUrl: "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME"
```

## Support Email

Before publishing the legal pages, replace the placeholder support email in:

`assets/js/config.js`

```js
supportEmail: "your-real-support-email@example.com"
```

## Important

The privacy and Data Safety text assumes the Android app remains local-first and has:

- no online account
- no ads
- no cloud synchronization
- no analytics
- no remote crash reporting
- no bank/e-wallet connection
- no expense tracking

If the final Android application changes, update the public legal pages and Google Play declarations to match the actual release.
