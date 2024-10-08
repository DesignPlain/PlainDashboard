import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cleanrooms_CollaborationDataEncryptionMetadata {
  //
  allowClearText?: boolean;

  //
  allowDuplicates?: boolean;

  //
  allowJoinsOnColumnsWithDifferentNames?: boolean;

  //
  preserveNulls?: boolean;
}

export function cleanrooms_CollaborationDataEncryptionMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowJoinsOnColumnsWithDifferentNames',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'preserveNulls',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowClearText',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowDuplicates',
      '',
      () => [],
      true,
      true,
    ),
  ];
}
