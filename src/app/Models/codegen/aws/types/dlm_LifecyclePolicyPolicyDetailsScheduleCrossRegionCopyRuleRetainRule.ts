import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
  //
  intervalUnit?: string;

  //
  interval?: number;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "intervalUnit",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "interval", "", () => [], true, false),
  ];
}
