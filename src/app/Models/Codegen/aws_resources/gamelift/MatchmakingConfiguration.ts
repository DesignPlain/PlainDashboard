import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gamelift_MatchmakingConfigurationGameProperty,
  gamelift_MatchmakingConfigurationGameProperty_GetTypes,
} from "../types/gamelift_MatchmakingConfigurationGameProperty";

export interface MatchmakingConfigurationArgs {
  // A rule set names for the matchmaking rule set to use with this configuration.
  ruleSetName?: string;

  // The number of player slots in a match to keep open for future players.
  additionalPlayerCount?: number;

  // Information to be added to all events related to this matchmaking configuration.
  customEventData?: string;

  // The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
  requestTimeoutSeconds?: number;

  // An SNS topic ARN that is set up to receive matchmaking notifications.
  notificationTarget?: string;

  // Indicates whether this matchmaking configuration is being used with GameLift hosting or as a standalone matchmaking solution.
  flexMatchMode?: string;

  // A set of custom game session properties.
  gameSessionData?: string;

  // Specifies if the match that was created with this configuration must be accepted by matched players.
  acceptanceRequired?: boolean;

  // The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
  acceptanceTimeoutSeconds?: number;

  // The method used to backfill game sessions that are created with this matchmaking configuration.
  backfillMode?: string;

  // Name of the matchmaking configuration
  name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A human-readable description of the matchmaking configuration.
  description?: string;

  // One or more custom game properties. See below.
  gameProperties?: Array<gamelift_MatchmakingConfigurationGameProperty>;

  // The ARNs of the GameLift game session queue resources.
  gameSessionQueueArns?: Array<string>;
}
export class MatchmakingConfiguration extends Resource {
  // The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
  public requestTimeoutSeconds?: number;

  // The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
  public acceptanceTimeoutSeconds?: number;

  // The number of player slots in a match to keep open for future players.
  public additionalPlayerCount?: number;

  // The time when the Matchmaking Configuration was created.
  public creationTime?: string;

  // One or more custom game properties. See below.
  public gameProperties?: Array<gamelift_MatchmakingConfigurationGameProperty>;

  // Name of the matchmaking configuration
  public name?: string;

  // An SNS topic ARN that is set up to receive matchmaking notifications.
  public notificationTarget?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Matchmaking Configuration ARN.
  public arn?: string;

  // Information to be added to all events related to this matchmaking configuration.
  public customEventData?: string;

  // A human-readable description of the matchmaking configuration.
  public description?: string;

  // A set of custom game session properties.
  public gameSessionData?: string;

  // A rule set names for the matchmaking rule set to use with this configuration.
  public ruleSetName?: string;

  // Specifies if the match that was created with this configuration must be accepted by matched players.
  public acceptanceRequired?: boolean;

  // The method used to backfill game sessions that are created with this matchmaking configuration.
  public backfillMode?: string;

  // Indicates whether this matchmaking configuration is being used with GameLift hosting or as a standalone matchmaking solution.
  public flexMatchMode?: string;

  // The ARNs of the GameLift game session queue resources.
  public gameSessionQueueArns?: Array<string>;

  //
  public ruleSetArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "gameSessionData",
        "A set of custom game session properties.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "acceptanceTimeoutSeconds",
        "The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the matchmaking configuration",
        [],
        false,
        true,
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
        "requestTimeoutSeconds",
        "The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "flexMatchMode",
        "Indicates whether this matchmaking configuration is being used with GameLift hosting or as a standalone matchmaking solution.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description of the matchmaking configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "additionalPlayerCount",
        "The number of player slots in a match to keep open for future players.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backfillMode",
        "The method used to backfill game sessions that are created with this matchmaking configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gameProperties",
        "One or more custom game properties. See below.",
        gamelift_MatchmakingConfigurationGameProperty_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gameSessionQueueArns",
        "The ARNs of the GameLift game session queue resources.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleSetName",
        "A rule set names for the matchmaking rule set to use with this configuration.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customEventData",
        "Information to be added to all events related to this matchmaking configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationTarget",
        "An SNS topic ARN that is set up to receive matchmaking notifications.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "acceptanceRequired",
        "Specifies if the match that was created with this configuration must be accepted by matched players.",
        [],
        false,
        false,
      ),
    ];
  }
}
