import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2 {
  // The fully qualified name of the cloud function resource.
  Name?: string;
}

export function Monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The fully qualified name of the cloud function resource.",
      [],
      true,
      true,
    ),
  ];
}
