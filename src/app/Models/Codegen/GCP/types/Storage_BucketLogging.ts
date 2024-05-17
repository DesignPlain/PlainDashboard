import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketLogging {
  /*
The object prefix for log objects. If it's not provided,
by default GCS sets this to this bucket's name.
*/
  LogObjectPrefix?: string;

  // The bucket that will receive log objects.
  LogBucket?: string;
}

export function Storage_BucketLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LogBucket",
      "The bucket that will receive log objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogObjectPrefix",
      "The object prefix for log objects. If it's not provided,\nby default GCS sets this to this bucket's name.",
      [],
      false,
      false,
    ),
  ];
}
