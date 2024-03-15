import { BucketLifecycleRuleAction } from "./BucketLifecycleRuleAction";
import { BucketLifecycleRuleCondition } from "./BucketLifecycleRuleCondition";

export interface BucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.
  Action?: BucketLifecycleRuleAction;

  // The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.
  Condition?: BucketLifecycleRuleCondition;
}
