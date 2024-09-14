import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storage_getBucketLogging {
  // The bucket that will receive log objects.
  logBucket?: string;

  // The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
  logObjectPrefix?: string;
}

export function storage_getBucketLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logBucket",
      "The bucket that will receive log objects.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logObjectPrefix",
      "The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.",
      () => [],
      true,
      false,
    ),
  ];
}
