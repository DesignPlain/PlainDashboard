import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ivs_RecordingConfigurationDestinationConfigurationS3,
  ivs_RecordingConfigurationDestinationConfigurationS3_GetTypes,
} from "./ivs_RecordingConfigurationDestinationConfigurationS3";

export interface ivs_RecordingConfigurationDestinationConfiguration {
  // S3 destination configuration where recorded videos will be stored.
  s3?: ivs_RecordingConfigurationDestinationConfigurationS3;
}

export function ivs_RecordingConfigurationDestinationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "S3 destination configuration where recorded videos will be stored.",
      ivs_RecordingConfigurationDestinationConfigurationS3_GetTypes(),
      true,
      false,
    ),
  ];
}
