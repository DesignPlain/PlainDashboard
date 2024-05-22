import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pubsub_SubscriptionExpirationPolicy,
  pubsub_SubscriptionExpirationPolicy_GetTypes,
} from "../types/pubsub_SubscriptionExpirationPolicy";
import {
  pubsub_SubscriptionPushConfig,
  pubsub_SubscriptionPushConfig_GetTypes,
} from "../types/pubsub_SubscriptionPushConfig";
import {
  pubsub_SubscriptionDeadLetterPolicy,
  pubsub_SubscriptionDeadLetterPolicy_GetTypes,
} from "../types/pubsub_SubscriptionDeadLetterPolicy";
import {
  pubsub_SubscriptionRetryPolicy,
  pubsub_SubscriptionRetryPolicy_GetTypes,
} from "../types/pubsub_SubscriptionRetryPolicy";
import {
  pubsub_SubscriptionBigqueryConfig,
  pubsub_SubscriptionBigqueryConfig_GetTypes,
} from "../types/pubsub_SubscriptionBigqueryConfig";
import {
  pubsub_SubscriptionCloudStorageConfig,
  pubsub_SubscriptionCloudStorageConfig_GetTypes,
} from "../types/pubsub_SubscriptionCloudStorageConfig";

export interface SubscriptionArgs {
  /*
A policy that specifies the conditions for this subscription's expiration.
A subscription is considered active as long as any connected subscriber
is successfully consuming messages from the subscription or is issuing
operations on the subscription. If expirationPolicy is not set, a default
policy with ttl of 31 days will be used.  If it is set but ttl is "", the
resource never expires.  The minimum allowed value for expirationPolicy.ttl
is 1 day.
Structure is documented below.
*/
  expirationPolicy?: pubsub_SubscriptionExpirationPolicy;

  /*
If push delivery is used with this subscription, this field is used to
configure it. An empty pushConfig signifies that the subscriber will
pull and ack messages using API methods.
Structure is documented below.
*/
  pushConfig?: pubsub_SubscriptionPushConfig;

  /*
A policy that specifies the conditions for dead lettering messages in
this subscription. If dead_letter_policy is not set, dead lettering
is disabled.
The Cloud Pub/Sub service account associated with this subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Acknowledge() messages on this subscription.
Structure is documented below.
*/
  deadLetterPolicy?: pubsub_SubscriptionDeadLetterPolicy;

  /*
A set of key/value label pairs to assign to this Subscription.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Indicates whether to retain acknowledged messages. If `true`, then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.
*/
  retainAckedMessages?: boolean;

  /*
A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.
RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message
Structure is documented below.
*/
  retryPolicy?: pubsub_SubscriptionRetryPolicy;

  /*
This value is the maximum time after a subscriber receives a message
before the subscriber should acknowledge the message. After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).
For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.
For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.
*/
  ackDeadlineSeconds?: number;

  /*
If `true`, Pub/Sub provides the following guarantees for the delivery
of a message with a given value of messageId on this Subscriptions':
- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
- An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
*/
  enableExactlyOnceDelivery?: boolean;

  /*
The subscription only delivers the messages that match the filter.
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.
*/
  filter?: string;

  /*
How long to retain unacknowledged messages in the subscription's
backlog, from the moment a message is published. If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days (`"604800s"`) or less than 10 minutes (`"600s"`).
A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: `"600.5s"`.
*/
  messageRetentionDuration?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
If delivery to BigQuery is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  bigqueryConfig?: pubsub_SubscriptionBigqueryConfig;

  /*
If delivery to Cloud Storage is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  cloudStorageConfig?: pubsub_SubscriptionCloudStorageConfig;

  /*
If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order.
*/
  enableMessageOrdering?: boolean;

  // Name of the subscription.
  name?: string;

  /*
A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
(as in the id property of a google_pubsub_topic), or just a topic name if
the topic is in the same project as the subscription.


- - -
*/
  topic?: string;
}
export class Subscription extends Resource {
  /*
If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order.
*/
  public enableMessageOrdering?: boolean;

  /*
A set of key/value label pairs to assign to this Subscription.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
How long to retain unacknowledged messages in the subscription's
backlog, from the moment a message is published. If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days (`"604800s"`) or less than 10 minutes (`"600s"`).
A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: `"600.5s"`.
*/
  public messageRetentionDuration?: string;

  /*
A policy that specifies the conditions for dead lettering messages in
this subscription. If dead_letter_policy is not set, dead lettering
is disabled.
The Cloud Pub/Sub service account associated with this subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Acknowledge() messages on this subscription.
Structure is documented below.
*/
  public deadLetterPolicy?: pubsub_SubscriptionDeadLetterPolicy;

  /*
A policy that specifies the conditions for this subscription's expiration.
A subscription is considered active as long as any connected subscriber
is successfully consuming messages from the subscription or is issuing
operations on the subscription. If expirationPolicy is not set, a default
policy with ttl of 31 days will be used.  If it is set but ttl is "", the
resource never expires.  The minimum allowed value for expirationPolicy.ttl
is 1 day.
Structure is documented below.
*/
  public expirationPolicy?: pubsub_SubscriptionExpirationPolicy;

  // Name of the subscription.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Indicates whether to retain acknowledged messages. If `true`, then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.
*/
  public retainAckedMessages?: boolean;

  /*
If delivery to BigQuery is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  public bigqueryConfig?: pubsub_SubscriptionBigqueryConfig;

  /*
The subscription only delivers the messages that match the filter.
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.
*/
  public filter?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
If push delivery is used with this subscription, this field is used to
configure it. An empty pushConfig signifies that the subscriber will
pull and ack messages using API methods.
Structure is documented below.
*/
  public pushConfig?: pubsub_SubscriptionPushConfig;

  /*
A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.
RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message
Structure is documented below.
*/
  public retryPolicy?: pubsub_SubscriptionRetryPolicy;

  /*
If delivery to Cloud Storage is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  public cloudStorageConfig?: pubsub_SubscriptionCloudStorageConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
If `true`, Pub/Sub provides the following guarantees for the delivery
of a message with a given value of messageId on this Subscriptions':
- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
- An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
*/
  public enableExactlyOnceDelivery?: boolean;

  /*
A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
(as in the id property of a google_pubsub_topic), or just a topic name if
the topic is in the same project as the subscription.


- - -
*/
  public topic?: string;

  /*
This value is the maximum time after a subscriber receives a message
before the subscriber should acknowledge the message. After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).
For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.
For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.
*/
  public ackDeadlineSeconds?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "topic",
        "A reference to a Topic resource, of the form projects/{project}/topics/{{name}}\n(as in the id property of a google_pubsub_topic), or just a topic name if\nthe topic is in the same project as the subscription.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pushConfig",
        "If push delivery is used with this subscription, this field is used to\nconfigure it. An empty pushConfig signifies that the subscriber will\npull and ack messages using API methods.\nStructure is documented below.",
        pubsub_SubscriptionPushConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retryPolicy",
        "A policy that specifies how Pub/Sub retries message delivery for this subscription.\nIf not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.\nRetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message\nStructure is documented below.",
        pubsub_SubscriptionRetryPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudStorageConfig",
        "If delivery to Cloud Storage is used with this subscription, this field is used to configure it.\nEither pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.\nIf all three are empty, then the subscriber will pull and ack messages using API methods.\nStructure is documented below.",
        pubsub_SubscriptionCloudStorageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "messageRetentionDuration",
        'How long to retain unacknowledged messages in the subscription\'s\nbacklog, from the moment a message is published. If\nretain_acked_messages is true, then this also configures the retention\nof acknowledged messages, and thus configures how far back in time a\nsubscriptions.seek can be done. Defaults to 7 days. Cannot be more\nthan 7 days (`"604800s"`) or less than 10 minutes (`"600s"`).\nA duration in seconds with up to nine fractional digits, terminated\nby \'s\'. Example: `"600.5s"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deadLetterPolicy",
        "A policy that specifies the conditions for dead lettering messages in\nthis subscription. If dead_letter_policy is not set, dead lettering\nis disabled.\nThe Cloud Pub/Sub service account associated with this subscription's\nparent project (i.e.,\nservice-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have\npermission to Acknowledge() messages on this subscription.\nStructure is documented below.",
        pubsub_SubscriptionDeadLetterPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "retainAckedMessages",
        "Indicates whether to retain acknowledged messages. If `true`, then\nmessages are not expunged from the subscription's backlog, even if\nthey are acknowledged, until they fall out of the\nmessageRetentionDuration window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filter",
        "The subscription only delivers the messages that match the filter.\nPub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages\nby their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,\nyou can't modify the filter.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "expirationPolicy",
        'A policy that specifies the conditions for this subscription\'s expiration.\nA subscription is considered active as long as any connected subscriber\nis successfully consuming messages from the subscription or is issuing\noperations on the subscription. If expirationPolicy is not set, a default\npolicy with ttl of 31 days will be used.  If it is set but ttl is "", the\nresource never expires.  The minimum allowed value for expirationPolicy.ttl\nis 1 day.\nStructure is documented below.',
        pubsub_SubscriptionExpirationPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this Subscription.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableMessageOrdering",
        "If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to\nthe subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they\nmay be delivered in any order.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the subscription.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ackDeadlineSeconds",
        "This value is the maximum time after a subscriber receives a message\nbefore the subscriber should acknowledge the message. After message\ndelivery but before the ack deadline expires and before the message is\nacknowledged, it is an outstanding message and will not be delivered\nagain during that time (on a best-effort basis).\nFor pull subscriptions, this value is used as the initial value for\nthe ack deadline. To override this value for a given message, call\nsubscriptions.modifyAckDeadline with the corresponding ackId if using\npull. The minimum custom deadline you can specify is 10 seconds. The\nmaximum custom deadline you can specify is 600 seconds (10 minutes).\nIf this parameter is 0, a default value of 10 seconds is used.\nFor push delivery, this value is also used to set the request timeout\nfor the call to the push endpoint.\nIf the subscriber never acknowledges the message, the Pub/Sub system\nwill eventually redeliver the message.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableExactlyOnceDelivery",
        "If `true`, Pub/Sub provides the following guarantees for the delivery\nof a message with a given value of messageId on this Subscriptions':\n- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.\n- An acknowledged message will not be resent to a subscriber.\nNote that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`\nis true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bigqueryConfig",
        "If delivery to BigQuery is used with this subscription, this field is used to configure it.\nEither pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.\nIf all three are empty, then the subscriber will pull and ack messages using API methods.\nStructure is documented below.",
        pubsub_SubscriptionBigqueryConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
