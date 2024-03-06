import { Box } from "@mui/system";
import DashboardTextCard from "../dashboard/components/DashboardTextCard";
import BasicTable from "./components/BasicTable";
import GoogleSearchVolume from "./components/GoogleSearchVolume";
import MetricComponent from "./components/MetricComponent";

export default function PageTwo() {
    return (<>
    <DashboardTextCard></DashboardTextCard>
    <GoogleSearchVolume></GoogleSearchVolume>
    <MetricComponent></MetricComponent>
   

    <BasicTable></BasicTable>

    </>)
}