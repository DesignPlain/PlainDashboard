import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2 {
  // The fully qualified name of the cloud function resource.
  name?: string;
}

export function monitoring_UptimeCheckConfigSyntheticMonitorCloudFunctionV2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The fully qualified name of the cloud function resource.",
      [],
      true,
      true,
    ),
  ];
}
