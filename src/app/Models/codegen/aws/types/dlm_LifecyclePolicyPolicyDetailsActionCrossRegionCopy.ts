import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration,
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration";
import {
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule,
  dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule";

export interface dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy {
  // The encryption settings for the copied snapshot. See the `encryption_configuration` block. Max of 1 per action.
  encryptionConfiguration?: dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;

  //
  retainRule?: dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule;

  //
  target?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "target", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfiguration",
      "The encryption settings for the copied snapshot. See the `encryption_configuration` block. Max of 1 per action.",
      () =>
        dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retainRule",
      "",
      () =>
        dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule_GetTypes(),
      false,
      false,
    ),
  ];
}
