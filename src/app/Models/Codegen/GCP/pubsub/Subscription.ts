import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SubscriptionRetryPolicy } from "../types/SubscriptionRetryPolicy";
import { SubscriptionBigqueryConfig } from "../types/SubscriptionBigqueryConfig";
import { SubscriptionCloudStorageConfig } from "../types/SubscriptionCloudStorageConfig";
import { SubscriptionDeadLetterPolicy } from "../types/SubscriptionDeadLetterPolicy";
import { SubscriptionExpirationPolicy } from "../types/SubscriptionExpirationPolicy";
import { SubscriptionPushConfig } from "../types/SubscriptionPushConfig";

export interface SubscriptionArgs {
  /*
A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.
RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message
Structure is documented below.
*/
  RetryPolicy?: SubscriptionRetryPolicy;

  /*
If delivery to BigQuery is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  BigqueryConfig?: SubscriptionBigqueryConfig;

  /*
If delivery to Cloud Storage is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  CloudStorageConfig?: SubscriptionCloudStorageConfig;

  /*
If `true`, Pub/Sub provides the following guarantees for the delivery
of a message with a given value of messageId on this Subscriptions':
- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
- An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
*/
  EnableExactlyOnceDelivery?: boolean;

  /*
If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order.
*/
  EnableMessageOrdering?: boolean;

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
  AckDeadlineSeconds?: number;

  /*
The subscription only delivers the messages that match the filter.
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.
*/
  Filter?: string;

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
  DeadLetterPolicy?: SubscriptionDeadLetterPolicy;

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
  ExpirationPolicy?: SubscriptionExpirationPolicy;

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
  MessageRetentionDuration?: string;

  /*
If push delivery is used with this subscription, this field is used to
configure it. An empty pushConfig signifies that the subscriber will
pull and ack messages using API methods.
Structure is documented below.
*/
  PushConfig?: SubscriptionPushConfig;

  /*
A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
(as in the id property of a google_pubsub_topic), or just a topic name if
the topic is in the same project as the subscription.


- - -
*/
  Topic?: string;

  /*
A set of key/value label pairs to assign to this Subscription.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the subscription.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Indicates whether to retain acknowledged messages. If `true`, then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.
*/
  RetainAckedMessages?: boolean;
}
export class Subscription extends Resource {
  // Name of the subscription.
  public Name?: string;

  /*
Indicates whether to retain acknowledged messages. If `true`, then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.
*/
  public RetainAckedMessages?: boolean;

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
  public MessageRetentionDuration?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
If push delivery is used with this subscription, this field is used to
configure it. An empty pushConfig signifies that the subscriber will
pull and ack messages using API methods.
Structure is documented below.
*/
  public PushConfig?: SubscriptionPushConfig;

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
  public AckDeadlineSeconds?: number;

  /*
If delivery to BigQuery is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  public BigqueryConfig?: SubscriptionBigqueryConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The subscription only delivers the messages that match the filter.
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.
*/
  public Filter?: string;

  /*
A set of key/value label pairs to assign to this Subscription.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
If delivery to Cloud Storage is used with this subscription, this field is used to configure it.
Either pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.
If all three are empty, then the subscriber will pull and ack messages using API methods.
Structure is documented below.
*/
  public CloudStorageConfig?: SubscriptionCloudStorageConfig;

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
  public ExpirationPolicy?: SubscriptionExpirationPolicy;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.
RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message
Structure is documented below.
*/
  public RetryPolicy?: SubscriptionRetryPolicy;

  /*
A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
(as in the id property of a google_pubsub_topic), or just a topic name if
the topic is in the same project as the subscription.


- - -
*/
  public Topic?: string;

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
  public DeadLetterPolicy?: SubscriptionDeadLetterPolicy;

  /*
If `true`, Pub/Sub provides the following guarantees for the delivery
of a message with a given value of messageId on this Subscriptions':
- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
- An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
*/
  public EnableExactlyOnceDelivery?: boolean;

  /*
If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order.
*/
  public EnableMessageOrdering?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CloudStorageConfig",
        "If delivery to Cloud Storage is used with this subscription, this field is used to configure it.\nEither pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.\nIf all three are empty, then the subscriber will pull and ack messages using API methods.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableMessageOrdering",
        "If `true`, messages published with the same orderingKey in PubsubMessage will be delivered to\nthe subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they\nmay be delivered in any order.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Topic",
        "A reference to a Topic resource, of the form projects/{project}/topics/{{name}}\n(as in the id property of a google_pubsub_topic), or just a topic name if\nthe topic is in the same project as the subscription.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "RetryPolicy",
        "A policy that specifies how Pub/Sub retries message delivery for this subscription.\nIf not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.\nRetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableExactlyOnceDelivery",
        "If `true`, Pub/Sub provides the following guarantees for the delivery\nof a message with a given value of messageId on this Subscriptions':\n- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.\n- An acknowledged message will not be resent to a subscriber.\nNote that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery`\nis true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values",
      ),
      new DynamicUIProps(
        InputType.String,
        "MessageRetentionDuration",
        'How long to retain unacknowledged messages in the subscription\'s\nbacklog, from the moment a message is published. If\nretain_acked_messages is true, then this also configures the retention\nof acknowledged messages, and thus configures how far back in time a\nsubscriptions.seek can be done. Defaults to 7 days. Cannot be more\nthan 7 days (`"604800s"`) or less than 10 minutes (`"600s"`).\nA duration in seconds with up to nine fractional digits, terminated\nby \'s\'. Example: `"600.5s"`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "PushConfig",
        "If push delivery is used with this subscription, this field is used to\nconfigure it. An empty pushConfig signifies that the subscriber will\npull and ack messages using API methods.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RetainAckedMessages",
        "Indicates whether to retain acknowledged messages. If `true`, then\nmessages are not expunged from the subscription's backlog, even if\nthey are acknowledged, until they fall out of the\nmessageRetentionDuration window.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "AckDeadlineSeconds",
        "This value is the maximum time after a subscriber receives a message\nbefore the subscriber should acknowledge the message. After message\ndelivery but before the ack deadline expires and before the message is\nacknowledged, it is an outstanding message and will not be delivered\nagain during that time (on a best-effort basis).\nFor pull subscriptions, this value is used as the initial value for\nthe ack deadline. To override this value for a given message, call\nsubscriptions.modifyAckDeadline with the corresponding ackId if using\npull. The minimum custom deadline you can specify is 10 seconds. The\nmaximum custom deadline you can specify is 600 seconds (10 minutes).\nIf this parameter is 0, a default value of 10 seconds is used.\nFor push delivery, this value is also used to set the request timeout\nfor the call to the push endpoint.\nIf the subscriber never acknowledges the message, the Pub/Sub system\nwill eventually redeliver the message.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The subscription only delivers the messages that match the filter.\nPub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages\nby their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,\nyou can't modify the filter.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ExpirationPolicy",
        'A policy that specifies the conditions for this subscription\'s expiration.\nA subscription is considered active as long as any connected subscriber\nis successfully consuming messages from the subscription or is issuing\noperations on the subscription. If expirationPolicy is not set, a default\npolicy with ttl of 31 days will be used.  If it is set but ttl is "", the\nresource never expires.  The minimum allowed value for expirationPolicy.ttl\nis 1 day.\nStructure is documented below.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to this Subscription.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the subscription."),
      new DynamicUIProps(
        InputType.String,
        "BigqueryConfig",
        "If delivery to BigQuery is used with this subscription, this field is used to configure it.\nEither pushConfig, bigQueryConfig or cloudStorageConfig can be set, but not combined.\nIf all three are empty, then the subscriber will pull and ack messages using API methods.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeadLetterPolicy",
        "A policy that specifies the conditions for dead lettering messages in\nthis subscription. If dead_letter_policy is not set, dead lettering\nis disabled.\nThe Cloud Pub/Sub service account associated with this subscription's\nparent project (i.e.,\nservice-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have\npermission to Acknowledge() messages on this subscription.\nStructure is documented below.",
      ),
    ];
  }
}
