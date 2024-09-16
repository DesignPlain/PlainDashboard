import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pubsub_LiteTopicPartitionConfig,
  pubsub_LiteTopicPartitionConfig_GetTypes,
} from '../types/pubsub_LiteTopicPartitionConfig';
import {
  pubsub_LiteTopicReservationConfig,
  pubsub_LiteTopicReservationConfig_GetTypes,
} from '../types/pubsub_LiteTopicReservationConfig';
import {
  pubsub_LiteTopicRetentionConfig,
  pubsub_LiteTopicRetentionConfig_GetTypes,
} from '../types/pubsub_LiteTopicRetentionConfig';

export interface LiteTopicArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the pubsub lite topic.
  region?: string;

  /*
The settings for this topic's Reservation usage.
Structure is documented below.
*/
  reservationConfig?: pubsub_LiteTopicReservationConfig;

  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  retentionConfig?: pubsub_LiteTopicRetentionConfig;

  // The zone of the pubsub lite topic.
  zone?: string;

  /*
Name of the topic.


- - -
*/
  name?: string;

  /*
The settings for this topic's partitions.
Structure is documented below.
*/
  partitionConfig?: pubsub_LiteTopicPartitionConfig;
}
export class LiteTopic extends DS_Resource {
  /*
Name of the topic.


- - -
*/
  public name?: string;

  /*
The settings for this topic's partitions.
Structure is documented below.
*/
  public partitionConfig?: pubsub_LiteTopicPartitionConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the pubsub lite topic.
  public region?: string;

  /*
The settings for this topic's Reservation usage.
Structure is documented below.
*/
  public reservationConfig?: pubsub_LiteTopicReservationConfig;

  /*
The settings for a topic's message retention.
Structure is documented below.
*/
  public retentionConfig?: pubsub_LiteTopicRetentionConfig;

  // The zone of the pubsub lite topic.
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'retentionConfig',
        "The settings for a topic's message retention.\nStructure is documented below.",
        () => pubsub_LiteTopicRetentionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'zone',
        'The zone of the pubsub lite topic.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the topic.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'partitionConfig',
        "The settings for this topic's partitions.\nStructure is documented below.",
        () => pubsub_LiteTopicPartitionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The region of the pubsub lite topic.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'reservationConfig',
        "The settings for this topic's Reservation usage.\nStructure is documented below.",
        () => pubsub_LiteTopicReservationConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
