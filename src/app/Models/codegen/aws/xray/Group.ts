import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  xray_GroupInsightsConfiguration,
  xray_GroupInsightsConfiguration_GetTypes,
} from "../types/xray_GroupInsightsConfiguration";

export interface GroupArgs {
  // Configuration options for enabling insights.
  insightsConfiguration?: xray_GroupInsightsConfiguration;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // The filter expression defining criteria by which to group traces. more info can be found in official [docs](https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html).
  filterExpression?: string;

  // The name of the group.
  groupName?: string;
}
export class Group extends DS_Resource {
  // The ARN of the Group.
  public arn?: string;

  // The filter expression defining criteria by which to group traces. more info can be found in official [docs](https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html).
  public filterExpression?: string;

  // The name of the group.
  public groupName?: string;

  // Configuration options for enabling insights.
  public insightsConfiguration?: xray_GroupInsightsConfiguration;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filterExpression",
        "The filter expression defining criteria by which to group traces. more info can be found in official [docs](https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "The name of the group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "insightsConfiguration",
        "Configuration options for enabling insights.",
        () => xray_GroupInsightsConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
