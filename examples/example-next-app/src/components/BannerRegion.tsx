"use client";
import { HeadlessXpmEditor } from 'headless-xpm-react'
import Image from 'next/image';

interface IHomepageData {
  bannerData: any
}

const BannerRegion = ({ bannerData }: IHomepageData) => {
  return (
    <div data-region={bannerData.name}>
      {
        bannerData?.map((item: any) => {
          return (
            <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`} key={item.itemId}>

              <article className="rich-text">
                <div className="hero">
                  <Image src={item.image.variants.edges[0].node.downloadUrl} alt="" data-aspect="3.3" width={994} height={301} style={{width:994, height:301}}/>
                  <div className="overlay overlay-tl ribbon">
                    <h1>{item.headline}</h1>
                  </div>
                </div>

                <div className="content" dangerouslySetInnerHTML={{ __html: item.articleBody[0].content.html }} />
              </article>

            </HeadlessXpmEditor>
          )
        })
      }
    </div>

  )
}

export default BannerRegion