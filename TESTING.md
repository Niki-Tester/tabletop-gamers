# DEVELOPMENT & POST DEVELOPMENT TESTING

## TABLE OF CONTENTS

* [Development Testing](#development-testing)


## Development Testing

Below is a list of issues found during the development process, detailing the issues found, the expected results, and any resolutions, along with the relevant commit if the issue was resolved.

---

**Issue Found:**
HTML rendered without any styling. Only showing default browser style when viewing via GitHub Pages, styling loads correctly when viewed via GitPod.

**Expected Result:**
Site to load with all implemented custom styling from style.css file to match that from local build in GitPod.

**Resolution:**
Changed path from an absolute path to a relative path.

Previous Path:
 ```html
<link rel="stylesheet" href="/assets/css/style.css">
```

Updated Path:
```html
<link rel="stylesheet" href="assets/css/style.css">
```

**Commit:**
[8827bb1194a1c89e4e46f653d2b2ee64c1c9b2e1](https://github.com/Niki-Tester/tabletop-gamers/commit/8827bb1194a1c89e4e46f653d2b2ee64c1c9b2e1)

---

**Issue Found:**
logo.png not being rendered within header when viewing via GitHub Pages. Contents of alt attribute is visible. Logo is being rendered as expected when being viewed via GitPod.

**Expected Result:**
logo.png expected to load within header element.

**Resolution:**
Changed path from an absolute path to a relative path. 

Previous Path:
```html 
<img src="/assets/images/logo.png" alt="Tabletop Gamers Logo - Small">
```
Updated Path:
```html 
<img src="assets/images/logo.png" alt="Tabletop Gamers Logo - Small">
```

**Commit:**
[8827bb1194a1c89e4e46f653d2b2ee64c1c9b2e1](https://github.com/Niki-Tester/tabletop-gamers/commit/8827bb1194a1c89e4e46f653d2b2ee64c1c9b2e1)

---
**Issue Found:**
Nav-Menu dropdown for small screens, does not always sit at bottom of header, leaving a gap between the top of the nav-menu, and the bottom of the header. This means the content behind the menu is visible in that gap.

**Expected Result:**
Menu should drop no lower than the bottom of the header, so that there is no gap between the bottom of the header and the top of the nav-menu.

**Resolution:**
After researching I have found that it is possible to get the dimensions of an element, (inc. any margin and padding) in pixels using [HTMLElement.offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight) and [HTMLElement.offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth), although I only need to use the Height property to fix this issue.

I did this by getting the height of the header and setting the yOffset of the Nav-Menu to that value, this means that regardless of how big the header is, the Nav-Menu will always line up at the bottom of the header.

**Commit:**
[900ee98676934828523c73fd266818bcabe61ec1](https://github.com/Niki-Tester/tabletop-gamers/commit/900ee98676934828523c73fd266818bcabe61ec1)

---