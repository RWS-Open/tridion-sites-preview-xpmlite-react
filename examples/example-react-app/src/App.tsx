
import axios from "axios"
import CardComponent from "./components/CardComponent";

import { HeadlessXpmEditor } from "headless-xpm-react";
import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
import { useEffect, useState } from "react"
import type { IComponentProps } from "./types";

const App = () => {
  const [componentData, setCompnentData] = useState<IComponentProps | null>(null)

  useEffect(() => {
    getComponentData()
  }, [])

  const getComponentData = async () => {

    const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, {
      query: TYPED_COMPONENT_QUERY,
      variables: TYPED_COMPONENT_QUERY_VARIABLES
    })

    if (response.data.data.typedComponent !== null) {
      setCompnentData(response.data.data.typedComponent)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-lg m-auto">
      <HeadlessXpmEditor tcmId={`tcm:${componentData?.publicationId}-${componentData?.itemId}`}>
        <CardComponent componentData={componentData as IComponentProps} />
      </HeadlessXpmEditor>
    </div>
  )
}

export default App