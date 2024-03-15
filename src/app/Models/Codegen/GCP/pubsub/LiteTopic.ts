import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { LiteTopicPartitionConfig } from "../types/LiteTopicPartitionConfig";
import { LiteTopicReservationConfig } from "../types/LiteTopicReservationConfig";
import { LiteTopicRetentionConfig } from "../types/LiteTopicRetentionConfig";

export interface LiteTopicArgs {
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
  PartitionConfig?: LiteTopicPartitionConfig;

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
  ReservationConfig?: LiteTopicReservationConfig;

  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  RetentionConfig?: LiteTopicRetentionConfig;
}
export class LiteTopic extends Resource {
  /*
The settings for this topic's Reservation usage.
Structure is documented below.
*/
  public ReservationConfig?: LiteTopicReservationConfig;

  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  public RetentionConfig?: LiteTopicRetentionConfig;

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
  public PartitionConfig?: LiteTopicPartitionConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the pubsub lite topic.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone of the pubsub lite topic.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the topic.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "PartitionConfig",
        "The settings for this topic's partitions.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the pubsub lite topic.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservationConfig",
        "The settings for this topic's Reservation usage.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RetentionConfig",
        "The settings for a topic's message retention.\nStructure is documented below.",
      ),
    ];
  }
}
