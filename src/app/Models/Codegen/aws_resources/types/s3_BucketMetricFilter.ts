import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketMetricFilter {
  // S3 Access Point ARN for filtering (singular).
  accessPoint?: string;

  // Object prefix for filtering (singular).
  prefix?: string;

  // Object tags for filtering (up to 10).
  tags?: Map<string, string>;
}

export function s3_BucketMetricFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessPoint",
      "S3 Access Point ARN for filtering (singular).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object prefix for filtering (singular).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Object tags for filtering (up to 10).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
