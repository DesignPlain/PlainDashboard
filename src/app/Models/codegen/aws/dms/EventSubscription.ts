import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EventSubscriptionArgs {
  // SNS topic arn to send events on.
  snsTopicArn?: string;

  // Ids of sources to listen to. If you don't specify a value, notifications are provided for all sources.
  sourceIds?: Array<string>;

  // Type of source for events. Valid values: `replication-instance` or `replication-task`
  sourceType?: string;

  // Map of resource tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether the event subscription should be enabled.
  enabled?: boolean;

  // List of event categories to listen for, see `DescribeEventCategories` for a canonical list.
  eventCategories?: Array<string>;

  // Name of event subscription.
  name?: string;
}
export class EventSubscription extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether the event subscription should be enabled.
  public enabled?: boolean;

  // SNS topic arn to send events on.
  public snsTopicArn?: string;

  // Type of source for events. Valid values: `replication-instance` or `replication-task`
  public sourceType?: string;

  // Ids of sources to listen to. If you don't specify a value, notifications are provided for all sources.
  public sourceIds?: Array<string>;

  // Map of resource tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the DMS Event Subscription.
  public arn?: string;

  // List of event categories to listen for, see `DescribeEventCategories` for a canonical list.
  public eventCategories?: Array<string>;

  // Name of event subscription.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "eventCategories",
        "List of event categories to listen for, see `DescribeEventCategories` for a canonical list.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of event subscription.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snsTopicArn",
        "SNS topic arn to send events on.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourceIds",
        "Ids of sources to listen to. If you don't specify a value, notifications are provided for all sources.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceType",
        "Type of source for events. Valid values: `replication-instance` or `replication-task`",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the event subscription should be enabled.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
