// app/page.tsx

import Home from "@/components/Home";
import { getPageData } from "./actions/action";
import { TYPED_PAGE_QUERY } from "@/graphqilquery/typedPageQuery";
import { TYPED_PAGE_VARIABLES } from "@/graphqilquery/typedPageVariables";

export default async function Page() {

  const componentQuery = {
    query: TYPED_PAGE_QUERY,
    variables: TYPED_PAGE_VARIABLES
  };
  
  const response = await getPageData(componentQuery);

  return (
    <Home pageData={response.data.typedPage} />
  );
}
