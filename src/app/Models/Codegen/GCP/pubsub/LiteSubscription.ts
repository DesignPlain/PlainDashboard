import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { LiteSubscriptionDeliveryConfig } from "../types/LiteSubscriptionDeliveryConfig";

export interface LiteSubscriptionArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the pubsub lite topic.
  Region?: string;

  // A reference to a Topic resource.
  Topic?: string;

  // The zone of the pubsub lite topic.
  Zone?: string;

  /*
The settings for this subscription's message delivery.
Structure is documented below.
*/
  DeliveryConfig?: LiteSubscriptionDeliveryConfig;

  /*
Name of the subscription.


- - -
*/
  Name?: string;
}
export class LiteSubscription extends Resource {
  // The region of the pubsub lite topic.
  public Region?: string;

  // A reference to a Topic resource.
  public Topic?: string;

  // The zone of the pubsub lite topic.
  public Zone?: string;

  /*
The settings for this subscription's message delivery.
Structure is documented below.
*/
  public DeliveryConfig?: LiteSubscriptionDeliveryConfig;

  /*
Name of the subscription.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "Topic",
        "A reference to a Topic resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone of the pubsub lite topic.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeliveryConfig",
        "The settings for this subscription's message delivery.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the subscription.\n\n\n- - -",
      ),
    ];
  }
}
