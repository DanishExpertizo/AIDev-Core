import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { features, plans } from "../data"
import MobilePlanCard from "./MobilePlanCard"

const MobilePlanTabs = () => (
    <div className="block lg:hidden sr-general">
        <Tabs defaultValue="starter" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-900/50 p-1 rounded-lg">
                {plans.map((plan) => (
                    <TabsTrigger
                        key={plan.name}
                        value={plan.name.toLowerCase()}
                        className="data-[state=active]:bg-slate-800 data-[state=active]:text-white text-gray-400 rounded-md"
                    >
                        {plan.name}
                    </TabsTrigger>
                ))}
            </TabsList>

            {plans.map((plan) => (
                <TabsContent key={plan.name} value={plan.name.toLowerCase()}>
                    <MobilePlanCard plan={plan} features={features} />
                </TabsContent>
            ))}
        </Tabs>
    </div>
)

export default MobilePlanTabs;