import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_AlertPolicyAlertStrategyNotificationRateLimit {
  // Not more than one notification per period.
  Period?: string;
}

export function Monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Period",
      "Not more than one notification per period.",
      [],
      false,
      false,
    ),
  ];
}
