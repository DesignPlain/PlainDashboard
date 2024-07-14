import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule";
import {
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule,
  dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
  // The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS encryption. If this argument is not specified, the default KMS key for the account is used.
  cmkArn?: string;

  // Whether to copy all user-defined tags from the source snapshot to the cross-region snapshot copy.
  copyTags?: boolean;

  // The AMI deprecation rule for cross-Region AMI copies created by the rule. See the `deprecate_rule` block.
  deprecateRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;

  // To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.
  encrypted?: boolean;

  // Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.
  retainRule?: dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;

  // The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
  target?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cmkArn",
      "The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS encryption. If this argument is not specified, the default KMS key for the account is used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "copyTags",
      "Whether to copy all user-defined tags from the source snapshot to the cross-region snapshot copy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deprecateRule",
      "The AMI deprecation rule for cross-Region AMI copies created by the rule. See the `deprecate_rule` block.",
      dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encrypted",
      "To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retainRule",
      "Specifies the retention rule for cross-Region snapshot copies. See the `retain_rule` block. Max of 1 per action.",
      dlm_LifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule_GetTypes(),
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
