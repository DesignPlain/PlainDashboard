import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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

  // Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.
  retainRule?: dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule;

  // The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
  target?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfiguration",
      "The encryption settings for the copied snapshot. See the `encryption_configuration` block. Max of 1 per action.",
      dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retainRule",
      "Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.",
      dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "target",
      "The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.",
      [],
      true,
      false,
    ),
  ];
}
