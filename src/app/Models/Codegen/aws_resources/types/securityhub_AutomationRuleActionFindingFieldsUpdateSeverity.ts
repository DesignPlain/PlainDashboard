import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_AutomationRuleActionFindingFieldsUpdateSeverity {
  // The severity value of the finding. The allowed values are the following `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH` and `CRITICAL`.
  label?: string;

  // The native severity as defined by the AWS service or integrated partner product that generated the finding.
  product?: number;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdateSeverity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "product",
      "The native severity as defined by the AWS service or integrated partner product that generated the finding.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "label",
      "The severity value of the finding. The allowed values are the following `INFORMATIONAL`, `LOW`, `MEDIUM`, `HIGH` and `CRITICAL`.",
      [],
      false,
      false,
    ),
  ];
}
