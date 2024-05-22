import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ivs_RecordingConfigurationDestinationConfigurationS3 {
  /*
S3 bucket name where recorded videos will be stored.

The following arguments are optional:
*/
  bucketName?: string;
}

export function ivs_RecordingConfigurationDestinationConfigurationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "S3 bucket name where recorded videos will be stored.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
  ];
}
