import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig {
  // The host machine path.
  path?: string;

  // The StorageClass name that PVs will be created with.
  storageClass?: string;
}

export function gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'The host machine path.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'storageClass',
      'The StorageClass name that PVs will be created with.',
      () => [],
      true,
      false,
    ),
  ];
}
