import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecr_RepositoryImageScanningConfiguration {
  // Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).
  scanOnPush?: boolean;
}

export function ecr_RepositoryImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'scanOnPush',
      'Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false).',
      () => [],
      true,
      false,
    ),
  ];
}
