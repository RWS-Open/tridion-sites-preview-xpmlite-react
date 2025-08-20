"use client";
import React, { Fragment } from "react";

import { HeadlessXpmEditor, HeadlessXpmProvider } from "headless-xpm-react"
import BannerRegion from "./BannerRegion";
import FurtherInfoRegion from "./FurtherInfoRegion";
interface IHomepage {
    pageData: any
}
const Home = ({ pageData }: IHomepage) => {

    return (
        <HeadlessXpmProvider
            editorUrl={process.env.NEXT_PUBLIC_TRIDION_SITES_EXPERIENCE_SPACE_URL as string}
            staging={process.env.NEXT_PUBLIC_TRIDION_STAGING}
            showPageEditorLink={true}
            showExpSpaceEditor={true}
        >
            <main className="page-row page-row-expanded" role="main">
                <HeadlessXpmEditor tcmId={`tcm:${pageData.publicationId}-${pageData.itemId}-${pageData.itemType}`} isPage={true}>
                    <div className="container-fluid page-border">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                {
                                    pageData.regions?.map((region: any) => {
                                        return (
                                            <Fragment key={region.name}>
                                                {
                                                    region.name === "Main" ? <BannerRegion bannerData={region.components} /> : null
                                                }
                                                {
                                                    region.name === "Further Info" ? <FurtherInfoRegion furtherInfo={region.components} /> : null
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </HeadlessXpmEditor>
            </main>
        </HeadlessXpmProvider>
    )
}

export default Home