import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  storage_getBucketLifecycleRuleAction,
  storage_getBucketLifecycleRuleAction_GetTypes,
} from "./storage_getBucketLifecycleRuleAction";
import {
  storage_getBucketLifecycleRuleCondition,
  storage_getBucketLifecycleRuleCondition_GetTypes,
} from "./storage_getBucketLifecycleRuleCondition";

export interface storage_getBucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported.
  actions?: Array<storage_getBucketLifecycleRuleAction>;

  // The Lifecycle Rule's condition configuration.
  conditions?: Array<storage_getBucketLifecycleRuleCondition>;
}

export function storage_getBucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "The Lifecycle Rule's condition configuration.",
      () => storage_getBucketLifecycleRuleCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "The Lifecycle Rule's action configuration. A single block of this type is supported.",
      () => storage_getBucketLifecycleRuleAction_GetTypes(),
      true,
      false,
    ),
  ];
}
