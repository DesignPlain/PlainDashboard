import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_getTrafficPolicyDocumentRuleSecondary {
  //
  endpointReference?: string;

  //
  evaluateTargetHealth?: boolean;

  //
  healthCheck?: string;

  //
  ruleReference?: string;
}

export function route53_getTrafficPolicyDocumentRuleSecondary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "evaluateTargetHealth",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleReference",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
