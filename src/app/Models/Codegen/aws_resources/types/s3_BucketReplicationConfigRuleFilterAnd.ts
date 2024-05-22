import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketReplicationConfigRuleFilterAnd {
  // Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.
  prefix?: string;

  // Map of tags (key and value pairs) that identifies a subset of objects to which the rule applies. The rule applies only to objects having all the tags in its tagset.
  tags?: Map<string, string>;
}

export function s3_BucketReplicationConfigRuleFilterAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Map of tags (key and value pairs) that identifies a subset of objects to which the rule applies. The rule applies only to objects having all the tags in its tagset.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
