# 🧩 headless-xpm-react

A lightweight React package that adds edit links to your components or pages, enabling quick access to [RWS](https://rws.com) [Tridion Sites Experience Space](https://www.rws.com/content-management/tridion/sites/) (XPM) — ideal for headless CMS setups.


## ✨ Features

- Adds a visual edit icon/toolbar over React components

- Opens Tridion Experience Space (XPM) directly to the associated item (Page or Component)

- Works in staging environments only (as required by XPM)

- Lightweight and non-intrusive

## 🛠 Requirements

- Tridion Sites 10.1+ 

## 📦 Installation

```sh
    npm install headless-xpm-react
```
## 🔧 Basic Usage

1. Wrap your app in <HeadlessXpmProvider />

```tsx

    import {  HeadlessXpmProvider } from "headless-xpm-react";

    <HeadlessXpmProvider 
        editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
        staging={true} 
        showExpSpaceEditor={true} 
        showPageEditorLink={true}
    >
        <App />
    </HeadlessXpmProvider>
        
```

2. Add an edit icon with <HeadlessXpmEditor />
   
```jsx
    import { HeadlessXpmEditor } from "headless-xpm-react"

    <HeadlessXpmEditor
        tcmId="tcm:5-283"
        isPage={false}
    >
        <div>
            <h1>Article Title</h1>
            <p>Content body...</p>
        </div>
    </HeadlessXpmEditor>
```

When viewed in a staging environment, an edit icon will appear that opens the corresponding item in Experience Space.

## 🧩 API Reference

### `<HeadlessXpmProvider />` Props


| Prop                 | Type                  | Description                     | Required?               |
| -------------------- | --------------------- | ------------------------------- | ----------------------- |
| `editorUrl`          | `string`              | URL to the Experience Space editor | ✅ Yes                   |
| `children`           | `React.ReactNode`     | The app or section to wrap              | ✅ Yes                   |
| `staging`            | `boolean`             | Enable the toolbar only in staging | ❌ No (default: `false`) | 
| `icon`               | `React.ReactNode`     | Custom icon element                 | ❌ No                    |
| `showExpSpaceEditor` | `boolean`             | Show/hide the editor toolbar             | ❌ No (default: `true`)  |
| `showPageEditorLink` | `boolean`             | Show an extra link for the current page           | ❌ No (default: `false`) |

---


### `<HeadlessXpmEditor />` Props

| Prop                 | Type                  | Description                         | Required?                     |
| ---------------------| ----------------------| ----------------------------------- | --------------------------    |
| `tcmId`              | `string`              | TCM URI of the Page or Component    | ✅ Yes                       |
| `children`           | `React.ReactNode`     | The content to wrap                    | ✅ Yes                       |
| `isPage`             | `boolean`             | Is this a Page (true) or Component (false)? | ❌ No (default: `false`)     |
| `linkStyle`          | `React.CSSProperties` | Custom CSS for the link element     | ❌ No                        |
| `iconStyle`          | `React.CSSProperties` | CSS for the icon                 | ❌ No                        |
| `containerStyle`     | `React.CSSProperties` | CSS for the outer wrapper                  | ❌ No                        |
| `contentStyle`       | `React.CSSProperties` | CSS for the editable content area              | ❌ No                        |


## 👉 Example React Apps

See a working implementation in the example project:

- [Example React App](https://github.com/RWS-Open/tridion-sites-preview-xpmlite-react)


## 🛠 Best Practices

- Works only in staging environments where Experience Space is accessible

- Use valid TCM URIs (tcm:pubId-itemId) for pages or components

- Hide the edit toolbar in production by setting staging={false}