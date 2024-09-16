import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration {
  // The group attribute field.
  groupAttributeField?: string;

  // The user name attribute field.
  userNameAttributeField?: string;
}

export function kendra_getIndexUserTokenConfigurationJsonTokenTypeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userNameAttributeField',
      'The user name attribute field.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'groupAttributeField',
      'The group attribute field.',
      () => [],
      true,
      false,
    ),
  ];
}
