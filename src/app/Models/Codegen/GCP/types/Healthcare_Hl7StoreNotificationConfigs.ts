import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface healthcare_Hl7StoreNotificationConfigs {
  /*
Restricts notifications sent for messages matching a filter. If this is empty, all messages
are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings
Fields/functions available for filtering are:
- messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
- send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
- sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
- sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
- PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
- labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :- can be used to assert the existence of a label. For example, labels."priority":-.
*/
  filter?: string;

  /*
The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver
*/
  pubsubTopic?: string;
}

export function healthcare_Hl7StoreNotificationConfigs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pubsubTopic",
      "The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.\nPubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.\nIt is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message\nwas published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a\nproject. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given\nCloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.\nIf a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filter",
      'Restricts notifications sent for messages matching a filter. If this is empty, all messages\nare matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings\nFields/functions available for filtering are:\n* messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".\n* send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset\'s timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".\n* sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".\n* sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".\n* PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").\n* labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.',
      [],
      false,
      false,
    ),
  ];
}
