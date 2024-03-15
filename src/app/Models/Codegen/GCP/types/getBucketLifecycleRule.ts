import { getBucketLifecycleRuleAction } from "./getBucketLifecycleRuleAction";
import { getBucketLifecycleRuleCondition } from "./getBucketLifecycleRuleCondition";

export interface getBucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported.
  Actions?: Array<getBucketLifecycleRuleAction>;

  // The Lifecycle Rule's condition configuration.
  Conditions?: Array<getBucketLifecycleRuleCondition>;
}
