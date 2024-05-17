import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Pubsub_LiteTopicRetentionConfig,
  Pubsub_LiteTopicRetentionConfig_GetTypes,
} from "../types/Pubsub_LiteTopicRetentionConfig";
import {
  Pubsub_LiteTopicPartitionConfig,
  Pubsub_LiteTopicPartitionConfig_GetTypes,
} from "../types/Pubsub_LiteTopicPartitionConfig";
import {
  Pubsub_LiteTopicReservationConfig,
  Pubsub_LiteTopicReservationConfig_GetTypes,
} from "../types/Pubsub_LiteTopicReservationConfig";

export interface LiteTopicArgs {
  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  RetentionConfig?: Pubsub_LiteTopicRetentionConfig;

  // The zone of the pubsub lite topic.
  Zone?: string;

  /*
Name of the topic.


- - -
*/
  Name?: string;

  /*
The settings for this topic's partitions.
Structure is documented below.
*/
  PartitionConfig?: Pubsub_LiteTopicPartitionConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the pubsub lite topic.
  Region?: string;

  /*
The settings for this topic's Reservation usage.
Structure is documented below.
*/
  ReservationConfig?: Pubsub_LiteTopicReservationConfig;
}
export class LiteTopic extends Resource {
  // The region of the pubsub lite topic.
  public Region?: string;

  /*
The settings for this topic's Reservation usage.
Structure is documented below.
*/
  public ReservationConfig?: Pubsub_LiteTopicReservationConfig;

  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  public RetentionConfig?: Pubsub_LiteTopicRetentionConfig;

  // The zone of the pubsub lite topic.
  public Zone?: string;

  /*
Name of the topic.


- - -
*/
  public Name?: string;

  /*
The settings for this topic's partitions.
Structure is documented below.
*/
  public PartitionConfig?: Pubsub_LiteTopicPartitionConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ReservationConfig",
        "The settings for this topic's Reservation usage.\nStructure is documented below.",
        Pubsub_LiteTopicReservationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RetentionConfig",
        "The settings for a topic's message retention.\nStructure is documented below.",
        Pubsub_LiteTopicRetentionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone of the pubsub lite topic.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the topic.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PartitionConfig",
        "The settings for this topic's partitions.\nStructure is documented below.",
        Pubsub_LiteTopicPartitionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the pubsub lite topic.",
        [],
        false,
        false,
      ),
    ];
  }
}
