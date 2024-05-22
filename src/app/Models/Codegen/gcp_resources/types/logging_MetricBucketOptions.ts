import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_MetricBucketOptionsExponentialBuckets,
  logging_MetricBucketOptionsExponentialBuckets_GetTypes,
} from "./logging_MetricBucketOptionsExponentialBuckets";
import {
  logging_MetricBucketOptionsLinearBuckets,
  logging_MetricBucketOptionsLinearBuckets_GetTypes,
} from "./logging_MetricBucketOptionsLinearBuckets";
import {
  logging_MetricBucketOptionsExplicitBuckets,
  logging_MetricBucketOptionsExplicitBuckets_GetTypes,
} from "./logging_MetricBucketOptionsExplicitBuckets";

export interface logging_MetricBucketOptions {
  /*
Specifies a linear sequence of buckets that all have the same width (except overflow and underflow).
Each bucket represents a constant absolute uncertainty on the specific value in the bucket.
Structure is documented below.
*/
  linearBuckets?: logging_MetricBucketOptionsLinearBuckets;

  /*
Specifies a set of buckets with arbitrary widths.
Structure is documented below.
*/
  explicitBuckets?: logging_MetricBucketOptionsExplicitBuckets;

  /*
Specifies an exponential sequence of buckets that have a width that is proportional to the value of
the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.
Structure is documented below.
*/
  exponentialBuckets?: logging_MetricBucketOptionsExponentialBuckets;
}

export function logging_MetricBucketOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "linearBuckets",
      "Specifies a linear sequence of buckets that all have the same width (except overflow and underflow).\nEach bucket represents a constant absolute uncertainty on the specific value in the bucket.\nStructure is documented below.",
      logging_MetricBucketOptionsLinearBuckets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "explicitBuckets",
      "Specifies a set of buckets with arbitrary widths.\nStructure is documented below.",
      logging_MetricBucketOptionsExplicitBuckets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exponentialBuckets",
      "Specifies an exponential sequence of buckets that have a width that is proportional to the value of\nthe lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.\nStructure is documented below.",
      logging_MetricBucketOptionsExponentialBuckets_GetTypes(),
      false,
      false,
    ),
  ];
}
