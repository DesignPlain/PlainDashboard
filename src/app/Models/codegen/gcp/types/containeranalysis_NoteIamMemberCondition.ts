import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface containeranalysis_NoteIamMemberCondition {
  //
  description?: string;

  //
  expression?: string;

  //
  title?: string;
}

export function containeranalysis_NoteIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'expression',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, 'title', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'description',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
