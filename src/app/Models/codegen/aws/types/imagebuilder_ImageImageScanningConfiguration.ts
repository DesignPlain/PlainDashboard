import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_ImageImageScanningConfigurationEcrConfiguration,
  imagebuilder_ImageImageScanningConfigurationEcrConfiguration_GetTypes,
} from './imagebuilder_ImageImageScanningConfigurationEcrConfiguration';

export interface imagebuilder_ImageImageScanningConfiguration {
  // Indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image. Defaults to `false`.
  imageScanningEnabled?: boolean;

  // Configuration block with ECR configuration. Detailed below.
  ecrConfiguration?: imagebuilder_ImageImageScanningConfigurationEcrConfiguration;
}

export function imagebuilder_ImageImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'imageScanningEnabled',
      'Indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image. Defaults to `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ecrConfiguration',
      'Configuration block with ECR configuration. Detailed below.',
      () =>
        imagebuilder_ImageImageScanningConfigurationEcrConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
