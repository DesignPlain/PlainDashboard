import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_getRepositoryImageScanningConfiguration {
  // Whether images are scanned after being pushed to the repository.
  scanOnPush?: boolean;
}

export function ecr_getRepositoryImageScanningConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "scanOnPush",
      "Whether images are scanned after being pushed to the repository.",
      () => [],
      true,
      false,
    ),
  ];
}
