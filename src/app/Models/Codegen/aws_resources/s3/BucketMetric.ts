import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketMetricFilter,
  s3_BucketMetricFilter_GetTypes,
} from "../types/s3_BucketMetricFilter";

export interface BucketMetricArgs {
  // Name of the bucket to put metric configuration.
  bucket?: string;

  // [Object filtering](http://docs.aws.amazon.com/AmazonS3/latest/dev/metrics-configurations.html#metrics-configurations-filter) that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).
  filter?: s3_BucketMetricFilter;

  // Unique identifier of the metrics configuration for the bucket. Must be less than or equal to 64 characters in length.
  name?: string;
}
export class BucketMetric extends Resource {
  // Name of the bucket to put metric configuration.
  public bucket?: string;

  // [Object filtering](http://docs.aws.amazon.com/AmazonS3/latest/dev/metrics-configurations.html#metrics-configurations-filter) that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).
  public filter?: s3_BucketMetricFilter;

  // Unique identifier of the metrics configuration for the bucket. Must be less than or equal to 64 characters in length.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket to put metric configuration.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "filter",
        "[Object filtering](http://docs.aws.amazon.com/AmazonS3/latest/dev/metrics-configurations.html#metrics-configurations-filter) that accepts a prefix, tags, or a logical AND of prefix and tags (documented below).",
        s3_BucketMetricFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique identifier of the metrics configuration for the bucket. Must be less than or equal to 64 characters in length.",
        [],
        false,
        true,
      ),
    ];
  }
}
