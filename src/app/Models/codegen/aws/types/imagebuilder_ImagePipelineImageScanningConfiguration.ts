import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration,
  imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes,
} from "./imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration";

export interface imagebuilder_ImagePipelineImageScanningConfiguration {
  // Configuration block with ECR configuration for image scanning. Detailed below.
  ecrConfiguration?: imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration;

  // Whether image scans are enabled. Defaults to `false`.
  imageScanningEnabled?: boolean;
}

export function imagebuilder_ImagePipelineImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ecrConfiguration",
      "Configuration block with ECR configuration for image scanning. Detailed below.",
      () =>
        imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "imageScanningEnabled",
      "Whether image scans are enabled. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
