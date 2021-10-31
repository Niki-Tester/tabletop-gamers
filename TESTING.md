# DEVELOPMENT & POST DEVELOPMENT TESTING

## TABLE OF CONTENTS

* [Development Testing](#development-testing)


## Development Testing

Below is a list of issues found during the development process, detailing the issues found, the expected results, and any resolutions, along with the relevant commit if the issue was resolved.

---

**Issue Found:**

- HTML rendered without any styling. Only showing default browser style when viewing via GitHub Pages, styling loads correctly when viewed via GitPod.

**Expected Result:**

- Site to load with all implemented custom styling from style.css file to match that from local build in GitPod.

**Resolution:**

- Changed path from an absolute path to a relative path.

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

- logo.png not being rendered within header when viewing via GitHub Pages. Contents of alt attribute is visible. Logo is being rendered as expected when being viewed via GitPod.

**Expected Result:**

- logo.png expected to load within header element.

**Resolution:**

- Changed path from an absolute path to a relative path. 

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

- Nav-Menu dropdown for small screens, does not always sit at bottom of header, leaving a gap between the top of the nav-menu, and the bottom of the header. This means the content behind the menu is visible in that gap.

**Expected Result:**

- Menu should drop no lower than the bottom of the header, so that there is no gap between the bottom of the header and the top of the nav-menu.

**Resolution:**

- After researching I have found that it is possible to get the dimensions of an element, (inc. any margin and padding) in pixels using [HTMLElement.offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight) and [HTMLElement.offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth), although I only need to use the Height property to fix this issue.

- I did this by getting the height of the header and setting the yOffset of the Nav-Menu to that value, this means that regardless of how big the header is, the Nav-Menu will always line up at the bottom of the header.

**Commit:**
[900ee98676934828523c73fd266818bcabe61ec1](https://github.com/Niki-Tester/tabletop-gamers/commit/900ee98676934828523c73fd266818bcabe61ec1)

---

**Issue Found:**

- When clicking anchor link on hero section, page scrolls to the linked section, but the top of the section is cut-off by the header.

![Content Scrolling Past Header](doc/issues/images/issue-scrolling-past-header.png)

    Left Image: Showing content of page under header.

    Right Image: Showing expected result.

**Expected Result:**

- Site should scroll so that the top of the linked section is brought to the top of the page, but the start of the section should still be below the header.

**Resolution:**

- I found that the issue was being caused because the header is fixed to the top of the page. After sometime, reading [CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) on MDN, I found that it is possible to set a [scroll-padding](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) so that an offset can be set, to take into account the estimate hight of the header.

- I did this by giving the html element the [scroll-padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) property, and used the browsers developer tools to view the height of the header, and used that value to set the padding in pixels.

- Applying just the pixel height of the header to [scroll-padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) worked, but it still looked too close to the header, so I added an additional 10px to this property so that it looks more appealing.

- This will need to be adjusted for different screen sizes, especially if the headers height changes between screens.

**Commit:**
[941e575d8616a2a0c7d850fe0eeed44eced14ca6](https://github.com/Niki-Tester/tabletop-gamers/commit/941e575d8616a2a0c7d850fe0eeed44eced14ca6)

---

**Issue Found:**

- When toggling the menu button, visible on small screens, contained within the header, the menu renders above the menu & close button.

**Expected Result:**

- When the menu is displayed, it should be rendered below the header.

**Resolution:**

- Moved the navbar-container outside, and above the header, in index.html. This means that the Nav is rendered behind the header background.

**Commit:**
[869b740d7bf5b14fcb89891e77956abed026af9f](https://github.com/Niki-Tester/tabletop-gamers/commit/869b740d7bf5b14fcb89891e77956abed026af9f)

---

**Issue Found:**

- Menu is visible below the header, even when menu is closed.

![Menu is visible below the header](doc/issues/images/issue-menu-small-screen.png)

**Expected Result:**

- Menu should only be visible when the menu is open.

**Resolution:**

- Changed display property on navbar-container to fixed.

**Commit:**
[21dda936402788d004f6e0451d39a7995189ff47](https://github.com/Niki-Tester/tabletop-gamers/commit/21dda936402788d004f6e0451d39a7995189ff47)

---

**Issue Found:**

- Menu is not extending the full width of the screen.

**Expected Result:**

- Menu should extend the full width of the screen, and not be just show on the right side.

**Resolution:**

- Changed display property on navbar-container to fixed.

**Commit:**
[21dda936402788d004f6e0451d39a7995189ff47](https://github.com/Niki-Tester/tabletop-gamers/commit/21dda936402788d004f6e0451d39a7995189ff47)

---

**Issue Found:**

- When window is resized from above 767px to below 767px part of the navigation menu is visible under the header. When clicking the menu button the navigation menu is shown in full, which is expected, but when collapsing the navigation menu again it returns to still being visible under the header.

![Screen Resize Nav1 Image](doc/issues/images/issue-resize-window-nav1.png)
![Screen Resize Nav2 Image](doc/issues/images/issue-resize-window-nav2.png)

**Expected Result:**

- The navigation menu should not be visible under the header when closed.

**Resolution:**

- While the display property of the navbar-container is set to "none", it is removed from the DOM meaning the style applied from menu.js is not applied, such that when the screen size is reduced, the navbar-containers yOffset would be set to 0, when it needed to be set to the height of the navbar-container element.

- I resolved this by creating an event listener for "resize" on the window, so that once the navbar-container element is displayed the correct yOffset is recalculated and applied.

**Commit:**
[4cb83fe173df2d2f5a8566b6fc47ee7d77885b5b](https://github.com/Niki-Tester/tabletop-gamers/commit/4cb83fe173df2d2f5a8566b6fc47ee7d77885b5b)

---

**Issue Found:**

- hero-section text renders on top of navbar-container, meaning the text is visible if the menu is open and the page is scrolled up.

![Hero Text above Nav](doc/issues/images/issue-hero-text-above-nav.png)

**Expected Result:**

- When scrolling up and text / images on the page should be rendered behind the menu.

**Resolution:**

- Setting the Z-Index property to 1 on the navbar-container forces the menu to be rendered above anything else on the page

**Commit:**
[6987725c8a41cd67d9f7d2c8680b772483b68a25](https://github.com/Niki-Tester/tabletop-gamers/commit/6987725c8a41cd67d9f7d2c8680b772483b68a25)
