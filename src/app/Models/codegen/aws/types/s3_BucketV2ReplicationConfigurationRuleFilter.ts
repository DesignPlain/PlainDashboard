import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketV2ReplicationConfigurationRuleFilter {
  // Object keyname prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.
  prefix?: string;

  /*
A map of tags that identifies subset of objects to which the rule applies.
The rule applies only to objects having all the tags in its tagset.
*/
  tags?: Map<string, string>;
}

export function s3_BucketV2ReplicationConfigurationRuleFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object keyname prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "A map of tags that identifies subset of objects to which the rule applies.\nThe rule applies only to objects having all the tags in its tagset.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
