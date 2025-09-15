
# 🧩 Example Vite React App with Tridion Sites Experience Space Integration

This example demonstrates how to integrate the [headless-xpm-react](https://www.npmjs.com/package/headless-xpm-react) package into a modern Vite + React + TypeScript application to enable edit links to RWS Tridion Sites Experience Space (XPM) for pages or components.


## 🔧 Installation & Setup

### 1. Create new React App


```bash
npm create vite@latest my-tridion-app -- --template react-ts
cd my-tridion-app
npm install
```


### 2. Install Dependencies

```bash
npm install headless-xpm-react axios
```

✅ headless-xpm-react adds support for Tridion Experience Space edit links

✅ axios is used for fetching data via GraphQL



### 3. Configure Environment Variables

- Create a `.env` file in the root of your project:

    ```env
        VITE_EXP_SPACE_EDITOR_URL=https://domain.com/ui/editor
        VITE_TRIDION_SITES_GRAPHQL_URL=https://domain:8081/cd/api
        VITE_TRIDION_SITES_PUBLICATION_ID=5
        VITE_TRIDION_SITES_COMPONENT_ID=283
        VITE_TRIDION_SITES_STAGING=true
    ```

    > These values are used to configure the editor and backend data sources.


## ⚙️ App Integration


### 4. Create GraphQL Files

`typedCompnentQuery.ts`

```tsx
export const TYPED_COMPONENT_QUERY = `query typedComponent($componentId:Int!, $publicationId:Int!, $namespaceId:Int!){
    typedComponent(componentId: $componentId, publicationId: $publicationId, namespaceId: $namespaceId){
    title
    ... on Article{
        itemId
        publicationId
        title
        headline
        articleBody{
        subheading
        content{
            html
        }
        media{
            ... on BinaryComponent{
            variants{
                edges{
                node{
                    downloadUrl
                }
                }
            }
            }
        }
        }
    }
    }
}`
```

`typedComponentQueryVariables.ts`

```tsx
export const TYPED_COMPONENT_QUERY_VARIABLES = {
    componentId: +import.meta.env.VITE_TRIDION_SITES_COMPONENT_ID,
    namespaceId: 1,
    publicationId: +import.meta.env.VITE_TRIDION_SITES_PUBLICATION_ID,
}
```

---

### 5. Create the `CardComponent.tsx` to Display Data 

`src/components/CardComponent.tsx`

```tsx

import { HeadlessXpmEditor } from "headless-xpm-react";

interface CardComponentProps {
  componentData: any; // Replace with proper type if available
}

const CardComponent = ({ componentData }: CardComponentProps) => {
  return (
    <HeadlessXpmEditor
      tcmId={`tcm:${componentData?.publicationId}-${componentData?.itemId}`}
      isPage={true}
    >
      <div>
        <h2>{componentData?.headline}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: componentData?.articleBody[0]?.content?.html as string,
          }}
        />
      </div>
    </HeadlessXpmEditor>
  );
};

export default CardComponent;

```
---

### 6. App.tsx

```tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeadlessXpmProvider } from "headless-xpm-react";
import { TYPED_COMPONENT_QUERY } from "./typedComponentQuery";
import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables";
import CardComponent from "./components/CardComponent";

const App = () => {
  const [componentData, setCompnentData] = useState(null);

  useEffect(() => {
    getComponentData();
  }, []);

  const getComponentData = async () => {
    const query = {
      query: TYPED_COMPONENT_QUERY,
      variables: TYPED_COMPONENT_QUERY_VARIABLES,
    };

    const response = await axios.post(
      import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL,
      query
    );

    if (response.data?.data?.typedComponent) {
      setCompnentData(response.data.data.typedComponent);
    }
  };

  return (
    <HeadlessXpmProvider
      editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
      staging={import.meta.env.VITE_TRIDION_SITES_STAGING === "true"}
      showExpSpaceEditor={true}
      showPageEditorLink={true}
    >
      <div className="flex items-center justify-center h-screen w-lg m-auto">
        {componentData && (
          <CardComponent componentData={componentData} />
        )}
      </div>
    </HeadlessXpmProvider>
  );
};

export default App;
```
        
## 🎨 Tailwind Setup (Optional)
   
You can use Tailwind CSS for styling, especially if you want to style the toolbar or card.

1. Install Tailwind & Vite Plugin
    ``` bash

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

    ```

2. Configure Tailwind
	
   - update vite.config.ts as below
	
    ```ts	
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'
        
        export default defineConfig({
            plugins: [
                tailwindcss(),
            ],
        })
    ```	
   - Remove default css style 

3. Import Tailwind in `src/index.css`
	
	`@import "tailwindcss";`
	

## ▶️ Run the App

```bash
    npm run dev
```

Then open your browser at:

👉 `http://localhost:5173`

If everything is set up correctly, your component will render and show an **edit icon** linking to the relevant **Tridion Experience Space** item (if viewed in staging).



## 📎 Resources

- [`headless-xpm-react` on NPM](www.npmjs.com/package/headless-xpm-react)
- [RWS Tridion Sits](https://www.rws.com/content-management/tridion/sites/)
- [Example Codebase on GitHub](https://github.com/RWS-Open/tridion-sites-preview-xpmlite-react/tree/main/examples)
