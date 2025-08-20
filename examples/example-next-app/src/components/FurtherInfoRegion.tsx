"use client";

import { HeadlessXpmEditor } from 'headless-xpm-react'
import React from 'react'
interface IFurtherInfo {
    furtherInfo: any
}
const FurtherInfoRegion = ({ furtherInfo }: IFurtherInfo) => {
    return (
        <div data-region="Further Info">
            <div className="row">
                {
                    furtherInfo.map((item:any) => {
                        return (
                            <div className="col-sm-6 col-md-4" key={item.itemId}>
                                <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`}>
                                <div className="teaser teaser-desc-inner">
                                    <div>
                                        <img src={item.image.variants.edges[0].node.downloadUrl} alt="" data-aspect="1.62" width={311} height={193} className="teaser-img loader-img" />
                                    </div>
                                    <h3 className="teaser-heading overlay overlay-top ribbon">
                                       {item.metadata.standardMeta.name}
                                    </h3>
                                    <p className="teaser-description overlay overlay-bottom ribbon">{item.metadata.standardMeta.introText}</p>
                                </div>
                                </HeadlessXpmEditor>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default FurtherInfoRegion