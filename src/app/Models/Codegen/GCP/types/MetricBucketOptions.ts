import { MetricBucketOptionsExplicitBuckets } from "./MetricBucketOptionsExplicitBuckets";
import { MetricBucketOptionsExponentialBuckets } from "./MetricBucketOptionsExponentialBuckets";
import { MetricBucketOptionsLinearBuckets } from "./MetricBucketOptionsLinearBuckets";

export interface MetricBucketOptions {
  /*
Specifies a set of buckets with arbitrary widths.
Structure is documented below.
*/
  ExplicitBuckets?: MetricBucketOptionsExplicitBuckets;

  /*
Specifies an exponential sequence of buckets that have a width that is proportional to the value of
the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.
Structure is documented below.
*/
  ExponentialBuckets?: MetricBucketOptionsExponentialBuckets;

  /*
Specifies a linear sequence of buckets that all have the same width (except overflow and underflow).
Each bucket represents a constant absolute uncertainty on the specific value in the bucket.
Structure is documented below.
*/
  LinearBuckets?: MetricBucketOptionsLinearBuckets;
}
