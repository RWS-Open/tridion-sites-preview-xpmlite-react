import axios from 'axios'
import CardComponent from './CardComponent'
import { HeadlessXpmEditor } from 'headless-xpm-react'
import type { IComponentProps, IQueryVariables } from '@/types'
import { useEffect, useState } from 'react'
import { TYPED_COMPONENT_QUERY } from '@/typedCompnentQuery'
import { TYPED_COMPONENT_QUERY_VARIABLES } from '@/typedComponentQueryVariables'

const Article = () => {
    const [componentData, setCompnentData] = useState<IComponentProps | null>(null)
    useEffect(() => {
        getArticleComponentData()
    }, [])

    const getArticleComponentData = async () => {

        const typedComponentQueryVariables = {
            ...TYPED_COMPONENT_QUERY_VARIABLES,
            componentId: +import.meta.env.VITE_TRIDION_SITES_ARTICLES_PAGE_COMPONENT_ID
        } as IQueryVariables;

        const response = await axios.post(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL, {
            query: TYPED_COMPONENT_QUERY,
            variables: typedComponentQueryVariables
        })
        if (response.data.data.typedComponent !== null) {
            setCompnentData(response.data.data.typedComponent)
        }
    }

    return (
        <HeadlessXpmEditor
            tcmId={`tcm:${componentData?.publicationId}-${componentData?.itemId}`}>
            <CardComponent componentData={componentData as IComponentProps} />
        </HeadlessXpmEditor>
    )
}

export default Article