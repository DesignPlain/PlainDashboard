import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_BucketLifecycleRuleAction,
  storage_BucketLifecycleRuleAction_GetTypes,
} from "./storage_BucketLifecycleRuleAction";
import {
  storage_BucketLifecycleRuleCondition,
  storage_BucketLifecycleRuleCondition_GetTypes,
} from "./storage_BucketLifecycleRuleCondition";

export interface storage_BucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.
  action?: storage_BucketLifecycleRuleAction;

  // The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.
  condition?: storage_BucketLifecycleRuleCondition;
}

export function storage_BucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.",
      storage_BucketLifecycleRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.",
      storage_BucketLifecycleRuleCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
