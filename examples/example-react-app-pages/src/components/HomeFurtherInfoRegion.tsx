import CompanyNews from "./CompanyNews"
import OfficeLocation from "./OfficeLocation"

interface IRegion {
    region: any
}
const HomeFurtherInfoRegion = ({ region }: IRegion) => {
    return (
        <div data-region={region.name}>
            <div className="row">
                {
                    region.components?.map((item: any, idx: number) => {
                        return (
                            <div className="col-sm-6 col-md-4" key={idx}>
                                {idx === 0 ? <OfficeLocation item={item}/> : <CompanyNews item={item}/>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeFurtherInfoRegion