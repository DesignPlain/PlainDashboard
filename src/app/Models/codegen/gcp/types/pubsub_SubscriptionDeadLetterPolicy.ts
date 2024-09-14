import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pubsub_SubscriptionDeadLetterPolicy {
  /*
The name of the topic to which dead letter messages should be published.
Format is `projects/{project}/topics/{topic}`.
The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.
The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.
*/
  deadLetterTopic?: string;

  /*
The maximum number of delivery attempts for any message. The value must be
between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).
A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.
This field will be honored on a best effort basis.
If this parameter is 0, a default value of 5 is used.
*/
  maxDeliveryAttempts?: number;
}

export function pubsub_SubscriptionDeadLetterPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deadLetterTopic",
      "The name of the topic to which dead letter messages should be published.\nFormat is `projects/{project}/topics/{topic}`.\nThe Cloud Pub/Sub service account associated with the enclosing subscription's\nparent project (i.e.,\nservice-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have\npermission to Publish() to this topic.\nThe operation will fail if the topic does not exist.\nUsers should ensure that there is a subscription attached to this topic\nsince messages published to a topic with no subscriptions are lost.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxDeliveryAttempts",
      "The maximum number of delivery attempts for any message. The value must be\nbetween 5 and 100.\nThe number of delivery attempts is defined as 1 + (the sum of number of\nNACKs and number of times the acknowledgement deadline has been exceeded for the message).\nA NACK is any call to ModifyAckDeadline with a 0 deadline. Note that\nclient libraries may automatically extend ack_deadlines.\nThis field will be honored on a best effort basis.\nIf this parameter is 0, a default value of 5 is used.",
      () => [],
      false,
      false,
    ),
  ];
}
