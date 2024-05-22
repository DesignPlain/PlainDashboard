import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
