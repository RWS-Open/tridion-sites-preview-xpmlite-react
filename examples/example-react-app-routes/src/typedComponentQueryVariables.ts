import type { IQueryVariables } from "./types";

export const TYPED_COMPONENT_QUERY_VARIABLES:IQueryVariables = {
    "componentId": +import.meta.env.VITE_TRIDION_SITES_HOME_PAGE_COMPONENT_ID,
    "namespaceId": 1,
    "publicationId": +import.meta.env.VITE_TRIDION_SITES_PUBLICATION_ID
  }