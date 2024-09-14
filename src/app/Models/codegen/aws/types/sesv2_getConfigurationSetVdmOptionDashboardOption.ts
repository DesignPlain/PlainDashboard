import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_getConfigurationSetVdmOptionDashboardOption {
  // Specifies the status of your VDM engagement metrics collection.
  engagementMetrics?: string;
}

export function sesv2_getConfigurationSetVdmOptionDashboardOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "engagementMetrics",
      "Specifies the status of your VDM engagement metrics collection.",
      () => [],
      true,
      false,
    ),
  ];
}