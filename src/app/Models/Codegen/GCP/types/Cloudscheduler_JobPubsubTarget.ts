import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudscheduler_JobPubsubTarget {
  /*
Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
*/
  Attributes?: Map<string, string>;

  /*
The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
A base64-encoded string.
*/
  Data?: string;

  /*
The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>--NOTE:--
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. `projects/my-project/topics/my-topic`.
*/
  TopicName?: string;
}

export function Cloudscheduler_JobPubsubTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Attributes",
      "Attributes for PubsubMessage.\nPubsub message must contain either non-empty data, or at least one attribute.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Data",
      "The message payload for PubsubMessage.\nPubsub message must contain either non-empty data, or at least one attribute.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TopicName",
      "The full resource name for the Cloud Pub/Sub topic to which\nmessages will be published when a job is delivered. ~>**NOTE:**\nThe topic name must be in the same format as required by PubSub's\nPublishRequest.name, e.g. `projects/my-project/topics/my-topic`.",
      [],
      true,
      false,
    ),
  ];
}
