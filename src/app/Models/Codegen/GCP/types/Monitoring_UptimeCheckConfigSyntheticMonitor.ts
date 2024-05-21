import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2,
  monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes,
} from "./monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2";

export interface monitoring_UptimeCheckConfigSyntheticMonitor {
  /*
Target a Synthetic Monitor GCFv2 Instance
Structure is documented below.


<a name="nested_cloud_function_v2"></a>The `cloud_function_v2` block supports:
*/
  cloudFunctionV2?: monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2;
}

export function monitoring_UptimeCheckConfigSyntheticMonitor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudFunctionV2",
      'Target a Synthetic Monitor GCFv2 Instance\nStructure is documented below.\n\n\n<a name="nested_cloud_function_v2"></a>The `cloud_function_v2` block supports:',
      monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes(),
      true,
      true,
    ),
  ];
}
