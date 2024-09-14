import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_getTrafficPolicyDocumentRuleItem {
  //
  endpointReference?: string;

  //
  healthCheck?: string;
}

export function route53_getTrafficPolicyDocumentRuleItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointReference",
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
  ];
}
