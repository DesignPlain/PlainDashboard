import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2,
  Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes,
} from "./Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2";

export interface Monitoring_UptimeCheckConfigSyntheticMonitor {
  /*
Target a Synthetic Monitor GCFv2 Instance
Structure is documented below.


<a name="nested_cloud_function_v2"></a>The `cloud_function_v2` block supports:
*/
  CloudFunctionV2?: Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2;
}

export function Monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudFunctionV2",
      'Target a Synthetic Monitor GCFv2 Instance\nStructure is documented below.\n\n\n<a name="nested_cloud_function_v2"></a>The `cloud_function_v2` block supports:',
      Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes(),
      true,
      true,
    ),
  ];
}
