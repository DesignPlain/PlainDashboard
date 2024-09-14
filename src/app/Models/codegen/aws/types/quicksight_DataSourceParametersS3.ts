import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSourceParametersS3ManifestFileLocation,
  quicksight_DataSourceParametersS3ManifestFileLocation_GetTypes,
} from "./quicksight_DataSourceParametersS3ManifestFileLocation";

export interface quicksight_DataSourceParametersS3 {
  // An object containing the S3 location of the S3 manifest file.
  manifestFileLocation?: quicksight_DataSourceParametersS3ManifestFileLocation;
}

export function quicksight_DataSourceParametersS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "manifestFileLocation",
      "An object containing the S3 location of the S3 manifest file.",
      () => quicksight_DataSourceParametersS3ManifestFileLocation_GetTypes(),
      true,
      false,
    ),
  ];
}
