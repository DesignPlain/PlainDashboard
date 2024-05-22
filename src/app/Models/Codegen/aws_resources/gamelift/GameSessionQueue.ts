import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gamelift_GameSessionQueuePlayerLatencyPolicy,
  gamelift_GameSessionQueuePlayerLatencyPolicy_GetTypes,
} from "../types/gamelift_GameSessionQueuePlayerLatencyPolicy";

export interface GameSessionQueueArgs {
  // An SNS topic ARN that is set up to receive game session placement notifications.
  notificationTarget?: string;

  // One or more policies used to choose fleet based on player latency. See below.
  playerLatencyPolicies?: Array<gamelift_GameSessionQueuePlayerLatencyPolicy>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Maximum time a game session request can remain in the queue.
  timeoutInSeconds?: number;

  // Information to be added to all events that are related to this game session queue.
  customEventData?: string;

  // List of fleet/alias ARNs used by session queue for placing game sessions.
  destinations?: Array<string>;

  // Name of the session queue.
  name?: string;
}
export class GameSessionQueue extends Resource {
  // One or more policies used to choose fleet based on player latency. See below.
  public playerLatencyPolicies?: Array<gamelift_GameSessionQueuePlayerLatencyPolicy>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Maximum time a game session request can remain in the queue.
  public timeoutInSeconds?: number;

  // Information to be added to all events that are related to this game session queue.
  public customEventData?: string;

  // An SNS topic ARN that is set up to receive game session placement notifications.
  public notificationTarget?: string;

  // Name of the session queue.
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Game Session Queue ARN.
  public arn?: string;

  // List of fleet/alias ARNs used by session queue for placing game sessions.
  public destinations?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "notificationTarget",
        "An SNS topic ARN that is set up to receive game session placement notifications.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "playerLatencyPolicies",
        "One or more policies used to choose fleet based on player latency. See below.",
        gamelift_GameSessionQueuePlayerLatencyPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutInSeconds",
        "Maximum time a game session request can remain in the queue.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customEventData",
        "Information to be added to all events that are related to this game session queue.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinations",
        "List of fleet/alias ARNs used by session queue for placing game sessions.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the session queue.",
        [],
        false,
        true,
      ),
    ];
  }
}
