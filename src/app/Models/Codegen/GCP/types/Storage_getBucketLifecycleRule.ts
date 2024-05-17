import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_getBucketLifecycleRuleAction,
  Storage_getBucketLifecycleRuleAction_GetTypes,
} from "./Storage_getBucketLifecycleRuleAction";
import {
  Storage_getBucketLifecycleRuleCondition,
  Storage_getBucketLifecycleRuleCondition_GetTypes,
} from "./Storage_getBucketLifecycleRuleCondition";

export interface Storage_getBucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported.
  Actions?: Array<Storage_getBucketLifecycleRuleAction>;

  // The Lifecycle Rule's condition configuration.
  Conditions?: Array<Storage_getBucketLifecycleRuleCondition>;
}

export function Storage_getBucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Actions",
      "The Lifecycle Rule's action configuration. A single block of this type is supported.",
      Storage_getBucketLifecycleRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "The Lifecycle Rule's condition configuration.",
      Storage_getBucketLifecycleRuleCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
