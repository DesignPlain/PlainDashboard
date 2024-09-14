import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_getImageImageScanningConfigurationEcrConfiguration,
  imagebuilder_getImageImageScanningConfigurationEcrConfiguration_GetTypes,
} from "./imagebuilder_getImageImageScanningConfigurationEcrConfiguration";

export interface imagebuilder_getImageImageScanningConfiguration {
  // Configuration block with ECR configuration.
  ecrConfigurations?: Array<imagebuilder_getImageImageScanningConfigurationEcrConfiguration>;

  // Indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
  imageScanningEnabled?: boolean;
}

export function imagebuilder_getImageImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ecrConfigurations",
      "Configuration block with ECR configuration.",
      () =>
        imagebuilder_getImageImageScanningConfigurationEcrConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "imageScanningEnabled",
      "Indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.",
      () => [],
      true,
      false,
    ),
  ];
}
