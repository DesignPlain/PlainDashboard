import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Healthcare_FhirStoreNotificationConfig {
  /*
Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.
*/
  SendPreviousResourceOnDelete?: boolean;

  /*
The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
*/
  PubsubTopic?: string;

  /*
Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.
Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.
*/
  SendFullResource?: boolean;
}

export function Healthcare_FhirStoreNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "SendPreviousResourceOnDelete",
      'Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to\ntrue does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a\nresource change is too large or during heavy traffic, only the resource name will be sent. Clients should always\ncheck the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous\nresource as a separate operation.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PubsubTopic",
      "The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.\nPubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.\nIt is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message\nwas published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a\nproject. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given\nCloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "SendFullResource",
      'Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.\nNote that setting this to true does not guarantee that all resources will be sent in the format of\nfull FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be\nsent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether\nit needs to fetch the full resource as a separate operation.',
      [],
      false,
      false,
    ),
  ];
}
