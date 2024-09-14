import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_BucketLifecycleConfigurationRuleFilter {
  // Object prefix for rule filtering.
  prefix?: string;

  // Key-value map of object tags for rule filtering.
  tags?: Map<string, string>;
}

export function s3control_BucketLifecycleConfigurationRuleFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object prefix for rule filtering.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Key-value map of object tags for rule filtering.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
