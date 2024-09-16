import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityhub_AutomationRuleActionFindingFieldsUpdate,
  securityhub_AutomationRuleActionFindingFieldsUpdate_GetTypes,
} from './securityhub_AutomationRuleActionFindingFieldsUpdate';

export interface securityhub_AutomationRuleAction {
  // A block that specifies that the automation rule action is an update to a finding field.  Documented below.
  findingFieldsUpdate?: securityhub_AutomationRuleActionFindingFieldsUpdate;

  // Specifies that the rule action should update the `Types` finding field. The `Types` finding field classifies findings in the format of namespace/category/classifier.
  type?: string;
}

export function securityhub_AutomationRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'findingFieldsUpdate',
      'A block that specifies that the automation rule action is an update to a finding field.  Documented below.',
      () => securityhub_AutomationRuleActionFindingFieldsUpdate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Specifies that the rule action should update the `Types` finding field. The `Types` finding field classifies findings in the format of namespace/category/classifier.',
      () => [],
      false,
      false,
    ),
  ];
}
