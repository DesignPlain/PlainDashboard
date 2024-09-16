import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecr_getLifecyclePolicyDocumentRuleAction {
  // The supported value is `expire`.
  type?: string;
}

export function ecr_getLifecyclePolicyDocumentRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The supported value is `expire`.',
      () => [],
      true,
      false,
    ),
  ];
}
