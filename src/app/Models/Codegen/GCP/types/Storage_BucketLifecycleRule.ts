import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_BucketLifecycleRuleAction,
  Storage_BucketLifecycleRuleAction_GetTypes,
} from "./Storage_BucketLifecycleRuleAction";
import {
  Storage_BucketLifecycleRuleCondition,
  Storage_BucketLifecycleRuleCondition_GetTypes,
} from "./Storage_BucketLifecycleRuleCondition";

export interface Storage_BucketLifecycleRule {
  // The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.
  Action?: Storage_BucketLifecycleRuleAction;

  // The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.
  Condition?: Storage_BucketLifecycleRuleCondition;
}

export function Storage_BucketLifecycleRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Action",
      "The Lifecycle Rule's action configuration. A single block of this type is supported. Structure is documented below.",
      Storage_BucketLifecycleRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "The Lifecycle Rule's condition configuration. A single block of this type is supported. Structure is documented below.",
      Storage_BucketLifecycleRuleCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
