import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketAclV2AccessControlPolicyOwner {
  // Display name of the owner.
  displayName?: string;

  // ID of the owner.
  id?: string;
}

export function s3_BucketAclV2AccessControlPolicyOwner_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'ID of the owner.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'Display name of the owner.',
      () => [],
      false,
      false,
    ),
  ];
}
