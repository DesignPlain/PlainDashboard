import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_AutomationRuleCriteriaComplianceStatus {
  // The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.
  comparison?: string;

  // A date range value for the date filter, provided as an Integer.
  value?: string;
}

export function securityhub_AutomationRuleCriteriaComplianceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comparison",
      "The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "A date range value for the date filter, provided as an Integer.",
      [],
      true,
      false,
    ),
  ];
}
