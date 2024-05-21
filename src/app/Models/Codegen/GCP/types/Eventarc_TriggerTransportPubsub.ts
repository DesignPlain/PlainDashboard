import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eventarc_TriggerTransportPubsub {
  // Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.
  topic?: string;

  // Output only. The name of the Pub/Sub subscription created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`.
  subscription?: string;
}

export function eventarc_TriggerTransportPubsub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topic",
      "Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subscription",
      "Output only. The name of the Pub/Sub subscription created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`.",
      [],
      false,
      false,
    ),
  ];
}
