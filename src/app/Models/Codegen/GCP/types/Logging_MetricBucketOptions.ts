import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_MetricBucketOptionsExplicitBuckets,
  Logging_MetricBucketOptionsExplicitBuckets_GetTypes,
} from "./Logging_MetricBucketOptionsExplicitBuckets";
import {
  Logging_MetricBucketOptionsExponentialBuckets,
  Logging_MetricBucketOptionsExponentialBuckets_GetTypes,
} from "./Logging_MetricBucketOptionsExponentialBuckets";
import {
  Logging_MetricBucketOptionsLinearBuckets,
  Logging_MetricBucketOptionsLinearBuckets_GetTypes,
} from "./Logging_MetricBucketOptionsLinearBuckets";

export interface Logging_MetricBucketOptions {
  /*
Specifies a set of buckets with arbitrary widths.
Structure is documented below.
*/
  ExplicitBuckets?: Logging_MetricBucketOptionsExplicitBuckets;

  /*
Specifies an exponential sequence of buckets that have a width that is proportional to the value of
the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.
Structure is documented below.
*/
  ExponentialBuckets?: Logging_MetricBucketOptionsExponentialBuckets;

  /*
Specifies a linear sequence of buckets that all have the same width (except overflow and underflow).
Each bucket represents a constant absolute uncertainty on the specific value in the bucket.
Structure is documented below.
*/
  LinearBuckets?: Logging_MetricBucketOptionsLinearBuckets;
}

export function Logging_MetricBucketOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ExplicitBuckets",
      "Specifies a set of buckets with arbitrary widths.\nStructure is documented below.",
      Logging_MetricBucketOptionsExplicitBuckets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExponentialBuckets",
      "Specifies an exponential sequence of buckets that have a width that is proportional to the value of\nthe lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.\nStructure is documented below.",
      Logging_MetricBucketOptionsExponentialBuckets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LinearBuckets",
      "Specifies a linear sequence of buckets that all have the same width (except overflow and underflow).\nEach bucket represents a constant absolute uncertainty on the specific value in the bucket.\nStructure is documented below.",
      Logging_MetricBucketOptionsLinearBuckets_GetTypes(),
      false,
      false,
    ),
  ];
}
