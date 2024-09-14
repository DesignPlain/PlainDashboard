import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentGroupEc2TagSetEc2TagFilter {
  // The key of the tag filter.
  key?: string;

  // The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
  type?: string;

  /*
The value of the tag filter.

Multiple occurrences of `ec2_tag_filter` are allowed, where any instance that matches to at least one of the tag filters is selected.
*/
  value?: string;
}

export function codedeploy_DeploymentGroupEc2TagSetEc2TagFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the tag filter.\n\nMultiple occurrences of `ec2_tag_filter` are allowed, where any instance that matches to at least one of the tag filters is selected.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the tag filter.",
      () => [],
      false,
      false,
    ),
  ];
}
