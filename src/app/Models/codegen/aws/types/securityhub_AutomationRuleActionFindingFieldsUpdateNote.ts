import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityhub_AutomationRuleActionFindingFieldsUpdateNote {
  // The principal that updated the note.
  updatedBy?: string;

  // The updated note text.
  text?: string;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdateNote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'updatedBy',
      'The principal that updated the note.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'text',
      'The updated note text.',
      () => [],
      true,
      false,
    ),
  ];
}
