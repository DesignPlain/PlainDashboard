import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_ConfigurationSetVdmOptionsDashboardOptions {
  // Specifies the status of your VDM engagement metrics collection. Valid values: `ENABLED`, `DISABLED`.
  engagementMetrics?: string;
}

export function sesv2_ConfigurationSetVdmOptionsDashboardOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "engagementMetrics",
      "Specifies the status of your VDM engagement metrics collection. Valid values: `ENABLED`, `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
