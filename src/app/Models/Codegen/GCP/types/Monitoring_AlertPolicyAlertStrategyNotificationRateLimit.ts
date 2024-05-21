import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface monitoring_AlertPolicyAlertStrategyNotificationRateLimit {
  // Not more than one notification per period.
  period?: string;
}

export function monitoring_AlertPolicyAlertStrategyNotificationRateLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "period",
      "Not more than one notification per period.",
      [],
      false,
      false,
    ),
  ];
}
