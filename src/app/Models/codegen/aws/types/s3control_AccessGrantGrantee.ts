import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_AccessGrantGrantee {
  // Grantee identifier.
  granteeIdentifier?: string;

  // Grantee types. Valid values: `DIRECTORY_USER`, `DIRECTORY_GROUP`, `IAM`.
  granteeType?: string;
}

export function s3control_AccessGrantGrantee_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'granteeIdentifier',
      'Grantee identifier.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'granteeType',
      'Grantee types. Valid values: `DIRECTORY_USER`, `DIRECTORY_GROUP`, `IAM`.',
      () => [],
      true,
      false,
    ),
  ];
}
