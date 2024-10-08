import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface efs_getAccessPointPosixUser {
  // Group ID
  gid?: number;

  // Secondary group IDs
  secondaryGids?: Array<number>;

  // User Id
  uid?: number;
}

export function efs_getAccessPointPosixUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'gid',
      'Group ID',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'secondaryGids',
      'Secondary group IDs',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'uid',
      'User Id',
      () => [],
      true,
      false,
    ),
  ];
}
