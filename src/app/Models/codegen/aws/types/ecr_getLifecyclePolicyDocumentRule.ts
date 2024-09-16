import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecr_getLifecyclePolicyDocumentRuleSelection,
  ecr_getLifecyclePolicyDocumentRuleSelection_GetTypes,
} from './ecr_getLifecyclePolicyDocumentRuleSelection';
import {
  ecr_getLifecyclePolicyDocumentRuleAction,
  ecr_getLifecyclePolicyDocumentRuleAction_GetTypes,
} from './ecr_getLifecyclePolicyDocumentRuleAction';

export interface ecr_getLifecyclePolicyDocumentRule {
  // Sets the order in which rules are evaluated, lowest to highest. When you add rules to a lifecycle policy, you must give them each a unique value for `priority`. Values do not need to be sequential across rules in a policy. A rule with a `tag_status` value of "any" must have the highest value for `priority` and be evaluated last.
  priority?: number;

  // Collects parameters describing the selection criteria for the ECR lifecycle policy:
  selection?: ecr_getLifecyclePolicyDocumentRuleSelection;

  // Specifies the action type.
  action?: ecr_getLifecyclePolicyDocumentRuleAction;

  // Describes the purpose of a rule within a lifecycle policy.
  description?: string;
}

export function ecr_getLifecyclePolicyDocumentRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'Sets the order in which rules are evaluated, lowest to highest. When you add rules to a lifecycle policy, you must give them each a unique value for `priority`. Values do not need to be sequential across rules in a policy. A rule with a `tag_status` value of "any" must have the highest value for `priority` and be evaluated last.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'selection',
      'Collects parameters describing the selection criteria for the ECR lifecycle policy:',
      () => ecr_getLifecyclePolicyDocumentRuleSelection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'action',
      'Specifies the action type.',
      () => ecr_getLifecyclePolicyDocumentRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Describes the purpose of a rule within a lifecycle policy.',
      () => [],
      false,
      false,
    ),
  ];
}
