import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_BucketLogging {
  // The bucket that will receive log objects.
  logBucket?: string;

  /*
The object prefix for log objects. If it's not provided,
by default GCS sets this to this bucket's name.
*/
  logObjectPrefix?: string;
}

export function storage_BucketLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logBucket",
      "The bucket that will receive log objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logObjectPrefix",
      "The object prefix for log objects. If it's not provided,\nby default GCS sets this to this bucket's name.",
      [],
      false,
      false,
    ),
  ];
}
