import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue {
  // The display name for this template.
  displayName?: string;
}

export function datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display name for this template.',
      () => [],
      true,
      false,
    ),
  ];
}
