import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface efs_getAccessPointRootDirectoryCreationInfo {
  // POSIX owner group ID
  ownerGid?: number;

  // POSIX owner user ID
  ownerUid?: number;

  // POSIX permissions mode
  permissions?: string;
}

export function efs_getAccessPointRootDirectoryCreationInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'ownerGid',
      'POSIX owner group ID',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ownerUid',
      'POSIX owner user ID',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'permissions',
      'POSIX permissions mode',
      () => [],
      true,
      false,
    ),
  ];
}
