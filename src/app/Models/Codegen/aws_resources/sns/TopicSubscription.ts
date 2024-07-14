import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TopicSubscriptionArgs {
  // JSON String with the delivery policy (retries, backoff, etc.) that will be used in the subscription - this only applies to HTTP/S subscriptions. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html) for more details.
  deliveryPolicy?: string;

  // Endpoint to send data to. The contents vary with the protocol. See details below.
  endpoint?: string;

  // Whether the `filter_policy` applies to `MessageAttributes` (default) or `MessageBody`.
  filterPolicyScope?: string;

  // Protocol to use. Valid values are: `sqs`, `sms`, `lambda`, `firehose`, and `application`. Protocols `email`, `email-json`, `http` and `https` are also valid but partially supported. See details below.
  protocol?: string;

  // JSON String with the archived message replay policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-subscriber.html) for more details.
  replayPolicy?: string;

  /*
ARN of the SNS topic to subscribe to.

The following arguments are optional:
*/
  topic?: string;

  // Integer indicating number of minutes to wait in retrying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols. Default is `1`.
  confirmationTimeoutInMinutes?: number;

  // Whether the endpoint is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) (e.g., PagerDuty). Default is `false`.
  endpointAutoConfirms?: boolean;

  // JSON String with the filter policy that will be used in the subscription to filter messages seen by the target resource. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-filtering.html) for more details.
  filterPolicy?: string;

  // Whether to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property). Default is `false`.
  rawMessageDelivery?: boolean;

  // JSON String with the redrive policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html#how-messages-moved-into-dead-letter-queue) for more details.
  redrivePolicy?: string;

  // ARN of the IAM role to publish to Kinesis Data Firehose delivery stream. Refer to [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html).
  subscriptionRoleArn?: string;
}
export class TopicSubscription extends Resource {
  // Whether the subscription confirmation request was authenticated.
  public confirmationWasAuthenticated?: boolean;

  // JSON String with the delivery policy (retries, backoff, etc.) that will be used in the subscription - this only applies to HTTP/S subscriptions. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html) for more details.
  public deliveryPolicy?: string;

  // Endpoint to send data to. The contents vary with the protocol. See details below.
  public endpoint?: string;

  // JSON String with the filter policy that will be used in the subscription to filter messages seen by the target resource. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-filtering.html) for more details.
  public filterPolicy?: string;

  // AWS account ID of the subscription's owner.
  public ownerId?: string;

  // Integer indicating number of minutes to wait in retrying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols. Default is `1`.
  public confirmationTimeoutInMinutes?: number;

  // Whether the subscription has not been confirmed.
  public pendingConfirmation?: boolean;

  // Whether to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property). Default is `false`.
  public rawMessageDelivery?: boolean;

  // JSON String with the redrive policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html#how-messages-moved-into-dead-letter-queue) for more details.
  public redrivePolicy?: string;

  /*
ARN of the SNS topic to subscribe to.

The following arguments are optional:
*/
  public topic?: string;

  // Whether the `filter_policy` applies to `MessageAttributes` (default) or `MessageBody`.
  public filterPolicyScope?: string;

  // ARN of the subscription.
  public arn?: string;

  // Protocol to use. Valid values are: `sqs`, `sms`, `lambda`, `firehose`, and `application`. Protocols `email`, `email-json`, `http` and `https` are also valid but partially supported. See details below.
  public protocol?: string;

  // JSON String with the archived message replay policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-subscriber.html) for more details.
  public replayPolicy?: string;

  // ARN of the IAM role to publish to Kinesis Data Firehose delivery stream. Refer to [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html).
  public subscriptionRoleArn?: string;

  // Whether the endpoint is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) (e.g., PagerDuty). Default is `false`.
  public endpointAutoConfirms?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "filterPolicy",
        "JSON String with the filter policy that will be used in the subscription to filter messages seen by the target resource. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-filtering.html) for more details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filterPolicyScope",
        "Whether the `filter_policy` applies to `MessageAttributes` (default) or `MessageBody`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replayPolicy",
        "JSON String with the archived message replay policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-subscriber.html) for more details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Protocol to use. Valid values are: `sqs`, `sms`, `lambda`, `firehose`, and `application`. Protocols `email`, `email-json`, `http` and `https` are also valid but partially supported. See details below.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "topic",
        "ARN of the SNS topic to subscribe to.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "confirmationTimeoutInMinutes",
        "Integer indicating number of minutes to wait in retrying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols. Default is `1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "endpointAutoConfirms",
        "Whether the endpoint is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) (e.g., PagerDuty). Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "rawMessageDelivery",
        "Whether to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property). Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "redrivePolicy",
        "JSON String with the redrive policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html#how-messages-moved-into-dead-letter-queue) for more details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deliveryPolicy",
        "JSON String with the delivery policy (retries, backoff, etc.) that will be used in the subscription - this only applies to HTTP/S subscriptions. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html) for more details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpoint",
        "Endpoint to send data to. The contents vary with the protocol. See details below.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subscriptionRoleArn",
        "ARN of the IAM role to publish to Kinesis Data Firehose delivery stream. Refer to [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html).",
        [],
        false,
        false,
      ),
    ];
  }
}
