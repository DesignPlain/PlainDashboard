import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketMetricFilter {
  // Object prefix for filtering (singular).
  prefix?: string;

  // Object tags for filtering (up to 10).
  tags?: Map<string, string>;

  // S3 Access Point ARN for filtering (singular).
  accessPoint?: string;
}

export function s3_BucketMetricFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object prefix for filtering (singular).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Object tags for filtering (up to 10).",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessPoint",
      "S3 Access Point ARN for filtering (singular).",
      () => [],
      false,
      false,
    ),
  ];
}
