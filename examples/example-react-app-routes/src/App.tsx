
import axios from "axios"

import { TYPED_COMPONENT_QUERY_VARIABLES } from "./typedComponentQueryVariables"
import { TYPED_COMPONENT_QUERY } from "./typedCompnentQuery";
import { useEffect, useState } from "react"
import type { IComponentProps, IQueryVariables } from "./types";

import CardComponent from "./components/CardComponent";
import { HeadlessXpmEditor } from "headless-xpm-react";

const App = () => {
  const [componentData, setCompnentData] = useState<IComponentProps | null>(null)
  useEffect(() => {
    getComponentData()
  }, [])

  const getComponentData = async () => {

    const typedComponentQueryVariables = {
      ...TYPED_COMPONENT_QUERY_VARIABLES,
      componentId: +import.meta.env.VITE_TRIDION_SITES_HOME_PAGE_COMPONENT_ID
    } as IQueryVariables

    const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, {
      query: TYPED_COMPONENT_QUERY,
      variables: typedComponentQueryVariables
    })

    if (response.data.data.typedComponent !== null) {
      setCompnentData(response.data.data.typedComponent)
    }
  }

  return (
      <HeadlessXpmEditor tcmId={`tcm:${componentData?.publicationId}-${componentData?.itemId}`}>
        <CardComponent componentData={componentData as IComponentProps} />
      </HeadlessXpmEditor>
  )
}

export default App