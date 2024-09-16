import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pubsub_LiteSubscriptionDeliveryConfig,
  pubsub_LiteSubscriptionDeliveryConfig_GetTypes,
} from '../types/pubsub_LiteSubscriptionDeliveryConfig';

export interface LiteSubscriptionArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the pubsub lite topic.
  region?: string;

  // A reference to a Topic resource.
  topic?: string;

  // The zone of the pubsub lite topic.
  zone?: string;

  /*
The settings for this subscription's message delivery.
Structure is documented below.
*/
  deliveryConfig?: pubsub_LiteSubscriptionDeliveryConfig;

  /*
Name of the subscription.


- - -
*/
  name?: string;
}
export class LiteSubscription extends DS_Resource {
  /*
The settings for this subscription's message delivery.
Structure is documented below.
*/
  public deliveryConfig?: pubsub_LiteSubscriptionDeliveryConfig;

  /*
Name of the subscription.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the pubsub lite topic.
  public region?: string;

  // A reference to a Topic resource.
  public topic?: string;

  // The zone of the pubsub lite topic.
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'zone',
        'The zone of the pubsub lite topic.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'deliveryConfig',
        "The settings for this subscription's message delivery.\nStructure is documented below.",
        () => pubsub_LiteSubscriptionDeliveryConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the subscription.\n\n\n- - -',
        () => [],
        false,
        true,
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
        InputType.String,
        'topic',
        'A reference to a Topic resource.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
