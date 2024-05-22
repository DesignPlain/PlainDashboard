import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketV2Logging {
  // Name of the bucket that will receive the log objects.
  targetBucket?: string;

  // To specify a key prefix for log objects.
  targetPrefix?: string;
}

export function s3_BucketV2Logging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetBucket",
      "Name of the bucket that will receive the log objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetPrefix",
      "To specify a key prefix for log objects.",
      [],
      false,
      false,
    ),
  ];
}
