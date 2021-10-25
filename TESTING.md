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