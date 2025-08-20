
# Vite React App with Headless Tridion Integration

This README provides a step-by-step guide to create a new React application using **Vite**, and integrate the <a href="https://www.npmjs.com/package/headless-xpm-react" target="_blank">`headless-xpm-react`</a> package to enable Tridion Experience Space (XPM) editing features.

---

### Prerequisites

- Node.js - Latest
- Tridion Sites 10 - Don't have <a href="https://www.rws.com/content-management/tridion/sites/">Tridion Sites</a> installed, Reach out to <a href="https://rws.com" title="rws" target="_blank">RWS</a> Sales

---

## Installation

### Create new React App

- Create a New Vite React App by running the below command in command prompt

    ```bash
    npm create vite@latest my-tridion-app -- --template react-ts
    cd my-tridion-app
    npm install
    ```

---

### Install headless-xpm-react 

```bash
    npm install headless-xpm-react
```
The package is available in the npm repository <a href="https://www.npmjs.com/package/headless-xpm-react" target="_blank">headless-react-app</a>

> The above package adds support for Tridion XPM integration with React components.

### Install axios 

```bash
npm install axios
```

---

### Configure Environment Variables

- Create a `.env` file in the project root:

    ```env
        VITE_EXP_SPACE_EDITOR_URL=https://domain.com/ui/editor
        VITE_TRIDION_SITES_GRAPHQL_URL=https://domain.com/cd/api
        VITE_TRIDION_SITES_PUBLICATION_ID=5
        VITE_TRIDION_SITES_COMPONENT_ID=283
    ```

    > These values are used to configure the editor and backend data sources.

---

## Update App.tsx

- Remove the entire content of the /src/App.tsx and update as below

    `App.tsx`

    ```tsx
        const App = () => {
            return(

            )
        }
        export default App
    ```

- Import the following react packages in src/App.tsx

    - import React from 'react';
    - import axios from 'axios';


- Create Graphql query and variables files inside the src/ directory as below

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
    }`;
    ```

    `typedComponentQueryVariables.ts`

    ```tsx
    export const TYPED_COMPONENT_QUERY_VARIABLES = {
        componentId: +import.meta.env.VITE_TRIDION_SITES_COMPONENT_ID,
        namespaceId: 1,
        publicationId: +import.meta.env.VITE_TRIDION_SITES_PUBLICATION_ID,
    };
    ```
---

- import graphql query and variables as below

    `App.tsx`

    ```tsx
        import React from 'react';
        import axios from 'axios';
        import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
        import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
        
        const App = () => {
            return(

            )
        }
        export default App
        
    ```
---

### Import HeadlessXpmProvider

### `<HeadlessXpmProvider />`
	
- import HeadlessXpmProvider from headless-xpm-react
	
- Insert the HeadlessXpmProvider to App.tsx component as shown below
	
    `App.tsx`

    ```tsx
        import { HeadlessXpmProvider } from 'headless-xpm-react';
        import React from 'react';
        import axios from 'axios';
        import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
        import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
        
        const App = () => {
            return(
                <HeadlessXpmProvider
                    editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
                    staging={true}
                    showExpSpaceEditor={true}
                    showPageEditorLink={true}
                >
                
                </HeadlessXpmProvider>
            )
        }
        export default App
        
    ```
    - editorUrl: import.meta.env.VITE_EXP_SPACE_EDITOR_URL : Tridion sites experience space editor url
	- showExpSpaceEditor : Show/Hide bottom Tridion Bar
	- showPageEditorLink: Show/hide page edit button in the bottom Tridion Bar
	
---

### Fetch Component Data

- Create new function in src/App.tsx inside the app component to fetch the component data and set its response to state as shown below

    ```tsx
        const getComponentData = async () => {
            const typedComponentQuery = {
                query: TYPED_COMPONENT_QUERY,
                variables: TYPED_COMPONENT_QUERY_VARIABLES
            }
            const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, typedComponentQuery)
            if(response.data.data.typedComponent!==null){
                setCompnentData(response.data.data.typedComponent)
            }
    ```

    `App.tsx`

    ```tsx
        import { HeadlessXpmProvider } from 'headless-xpm-react';
        import React,{useState, useEffect} from 'react';
        import axios from 'axios';
        import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
        import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
        
        const App = () => {
        
            const [componentData, setCompnentData] = useState<IComponentProps | null>(null)
            useEffect(() => {
                getComponentData()
            }, [])

            const getComponentData = async () => {
                const typedComponentQuery = {
                    query: TYPED_COMPONENT_QUERY,
                    variables: TYPED_COMPONENT_QUERY_VARIABLES
                }
                const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, typedComponentQuery)
                if(response.data.data.typedComponent!==null){
                    setCompnentData(response.data.data.typedComponent)
                }
            }
            
            return(
                <HeadlessXpmProvider 
                    editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL} 
                    staging={true}
                    showExpSpaceEditor={true} 
                    showPageEditorLink={true}
                >
                    <div className="flex items-center justify-center h-screen w-lg m-auto">
                            
                    </div>
                </HeadlessXpmProvider>
            )
        }
        export default App
        
    ```

## Create CardComponent.tsx 

- Create a new component as CardComponent.tsx inside src/components folder to display the component data and update the code as below 

- HeadlessXpmEditor : headless-xpm-react component from react package
	
    `CardComponent.tsx`

    ```tsx
        interface CardComponentProps {
            componentData: IComponentProps
        }
        import { HeadlessXpmEditor } from "headless-xpm-react";

        const CardComponent = ({ componentData }: CardComponentProps) => {
            return (
                <HeadlessXpmEditor tcmId={`tcm:${componentData?.publicationId}-${componentData?.itemId}`}>
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


## Import CardComponent.tsx

- Import the CardComponent to App.tsx 
- Pass the componentData as props to CardComponent

    ```tsx
        <CardComponent componentData={componentData as IComponentProps} />
    ```

    `App.tsx`

    ```tsx
        import { HeadlessXpmProvider } from 'headless-xpm-react';
        import React,{useState, useEffect} from 'react';
        import axios from 'axios';
        import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables";
        import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
        
        import CardComponent from "./components/CardComponent"; 
        
        const App = () => {
        
            const [componentData, setCompnentData] = useState<IComponentProps | null>(null)
            useEffect(() => {
                getComponentData()
            }, [])

            const getComponentData = async () => {
                const typedComponentQuery = {
                    query: TYPED_COMPONENT_QUERY,
                    variables: TYPED_COMPONENT_QUERY_VARIABLES
                }
                const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, typedComponentQuery)
                if(response.data.data.typedComponent!==null){
                    setCompnentData(response.data.data.typedComponent)
                }
            }
            
            return(
                <HeadlessXpmProvider 
                    editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL} 
                    staging={true}
                    showExpSpaceEditor={true} 
                    showPageEditorLink={true}                
                >
                    <div className="flex items-center justify-center h-screen w-lg m-auto">
                        <CardComponent componentData={componentData as IComponentProps} />
                    </div>
                </HeadlessXpmProvider>
            )
        }
        export default App
        
    ```
---

## Install tailwindcss

- Install Tailwind css for styling the editor

    ```bash
        npm install tailwindcss @tailwindcss/vite
    ```


	
## Configure the Vite plugin
	
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
    
    Remove default css style from src/index.css and src/app.css

## Import tailwindcss

- Import Tailwind css to src/index.css 
	
	`@import "tailwindcss";`
	
---

## Run application 
 
- Navigate to root directory and run the below command in command prompt

    ```bash
        npm run dev
    ```

Visit `http://localhost:5173`

---

