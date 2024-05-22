import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ivschat_RoomMessageReviewHandler,
  ivschat_RoomMessageReviewHandler_GetTypes,
} from "../types/ivschat_RoomMessageReviewHandler";

export interface RoomArgs {
  // Room name.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
List of Logging Configuration
ARNs to attach to the room.
*/
  loggingConfigurationIdentifiers?: Array<string>;

  /*
Maximum number of characters in a single
message. Messages are expected to be UTF-8 encoded and this limit applies
specifically to rune/code-point count, not number of bytes.
*/
  maximumMessageLength?: number;

  /*
Maximum number of messages per
second that can be sent to the room (by all clients).
*/
  maximumMessageRatePerSecond?: number;

  /*
Configuration information for optional
review of messages.
*/
  messageReviewHandler?: ivschat_RoomMessageReviewHandler;
}
export class Room extends Resource {
  /*
List of Logging Configuration
ARNs to attach to the room.
*/
  public loggingConfigurationIdentifiers?: Array<string>;

  /*
Maximum number of characters in a single
message. Messages are expected to be UTF-8 encoded and this limit applies
specifically to rune/code-point count, not number of bytes.
*/
  public maximumMessageLength?: number;

  /*
Maximum number of messages per
second that can be sent to the room (by all clients).
*/
  public maximumMessageRatePerSecond?: number;

  /*
Configuration information for optional
review of messages.
*/
  public messageReviewHandler?: ivschat_RoomMessageReviewHandler;

  // Room name.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Room.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "maximumMessageRatePerSecond",
        "Maximum number of messages per\nsecond that can be sent to the room (by all clients).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "messageReviewHandler",
        "Configuration information for optional\nreview of messages.",
        ivschat_RoomMessageReviewHandler_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Room name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loggingConfigurationIdentifiers",
        "List of Logging Configuration\nARNs to attach to the room.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumMessageLength",
        "Maximum number of characters in a single\nmessage. Messages are expected to be UTF-8 encoded and this limit applies\nspecifically to rune/code-point count, not number of bytes.",
        [],
        false,
        false,
      ),
    ];
  }
}
