import MainHeading from "../MainHeading"
import DesktopPlanTable from "./DesktopPlanTable"
import MobilePlanTabs from "./MobilePlanTabs"

const PricingComparison = () => (
    <div id="plans-comparison" className="min-h-screen bg-[#00010C] py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <MainHeading title1="Compare Plans" />
            </div>

            <MobilePlanTabs />
            <DesktopPlanTable />
        </div>
    </div>
)

export default PricingComparison
