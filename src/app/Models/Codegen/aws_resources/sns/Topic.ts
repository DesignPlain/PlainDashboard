import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TopicArgs {
  // The IAM role permitted to receive success feedback for this topic
  applicationSuccessFeedbackRoleArn?: string;

  // Boolean indicating whether or not to create a FIFO (first-in-first-out) topic (default is `false`).
  fifoTopic?: boolean;

  // IAM role for failure feedback
  sqsFailureFeedbackRoleArn?: string;

  // The name of the topic. Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the `.fifo` suffix. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`
  name?: string;

  // The message archive policy for FIFO topics. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-topic-owner.html).
  archivePolicy?: string;

  // IAM role for failure feedback
  firehoseFailureFeedbackRoleArn?: string;

  // Percentage of success to sample
  httpSuccessFeedbackSampleRate?: number;

  // Percentage of success to sample
  applicationSuccessFeedbackSampleRate?: number;

  // IAM role for failure feedback
  httpFailureFeedbackRoleArn?: string;

  // The fully-formed AWS policy as JSON.
  policy?: string;

  // Percentage of success to sample
  sqsSuccessFeedbackSampleRate?: number;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The SNS delivery policy. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html).
  deliveryPolicy?: string;

  // The display name for the topic
  displayName?: string;

  // Percentage of success to sample
  firehoseSuccessFeedbackSampleRate?: number;

  // IAM role for failure feedback
  lambdaFailureFeedbackRoleArn?: string;

  // Percentage of success to sample
  lambdaSuccessFeedbackSampleRate?: number;

  // The IAM role permitted to receive success feedback for this topic
  sqsSuccessFeedbackRoleArn?: string;

  // Tracing mode of an Amazon SNS topic. Valid values: `"PassThrough"`, `"Active"`.
  tracingConfig?: string;

  // IAM role for failure feedback
  applicationFailureFeedbackRoleArn?: string;

  // The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)
  kmsMasterKeyId?: string;

  // If `SignatureVersion` should be [1 (SHA1) or 2 (SHA256)](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html). The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
  signatureVersion?: number;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`
  namePrefix?: string;

  // Enables content-based deduplication for FIFO topics. For more information, see the [related documentation](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html)
  contentBasedDeduplication?: boolean;

  // The IAM role permitted to receive success feedback for this topic
  firehoseSuccessFeedbackRoleArn?: string;

  // The IAM role permitted to receive success feedback for this topic
  httpSuccessFeedbackRoleArn?: string;

  // The IAM role permitted to receive success feedback for this topic
  lambdaSuccessFeedbackRoleArn?: string;
}
export class Topic extends Resource {
  // Percentage of success to sample
  public applicationSuccessFeedbackSampleRate?: number;

  // The name of the topic. Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the `.fifo` suffix. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`
  public name?: string;

  // The AWS Account ID of the SNS topic owner
  public owner?: string;

  // IAM role for failure feedback
  public firehoseFailureFeedbackRoleArn?: string;

  // The IAM role permitted to receive success feedback for this topic
  public httpSuccessFeedbackRoleArn?: string;

  // IAM role for failure feedback
  public applicationFailureFeedbackRoleArn?: string;

  // The IAM role permitted to receive success feedback for this topic
  public sqsSuccessFeedbackRoleArn?: string;

  // The IAM role permitted to receive success feedback for this topic
  public applicationSuccessFeedbackRoleArn?: string;

  // The message archive policy for FIFO topics. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-topic-owner.html).
  public archivePolicy?: string;

  // The oldest timestamp at which a FIFO topic subscriber can start a replay.
  public beginningArchiveTime?: string;

  // The display name for the topic
  public displayName?: string;

  // Percentage of success to sample
  public firehoseSuccessFeedbackSampleRate?: number;

  // Percentage of success to sample
  public httpSuccessFeedbackSampleRate?: number;

  // The IAM role permitted to receive success feedback for this topic
  public lambdaSuccessFeedbackRoleArn?: string;

  // Percentage of success to sample
  public sqsSuccessFeedbackSampleRate?: number;

  // Tracing mode of an Amazon SNS topic. Valid values: `"PassThrough"`, `"Active"`.
  public tracingConfig?: string;

  // Enables content-based deduplication for FIFO topics. For more information, see the [related documentation](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html)
  public contentBasedDeduplication?: boolean;

  // The IAM role permitted to receive success feedback for this topic
  public firehoseSuccessFeedbackRoleArn?: string;

  // The fully-formed AWS policy as JSON.
  public policy?: string;

  // The ARN of the SNS topic, as a more obvious property (clone of id)
  public arn?: string;

  // The SNS delivery policy. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html).
  public deliveryPolicy?: string;

  // IAM role for failure feedback
  public httpFailureFeedbackRoleArn?: string;

  // Percentage of success to sample
  public lambdaSuccessFeedbackSampleRate?: number;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`
  public namePrefix?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Boolean indicating whether or not to create a FIFO (first-in-first-out) topic (default is `false`).
  public fifoTopic?: boolean;

  // The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)
  public kmsMasterKeyId?: string;

  // IAM role for failure feedback
  public lambdaFailureFeedbackRoleArn?: string;

  // If `SignatureVersion` should be [1 (SHA1) or 2 (SHA256)](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html). The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
  public signatureVersion?: number;

  // IAM role for failure feedback
  public sqsFailureFeedbackRoleArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "sqsSuccessFeedbackSampleRate",
        "Percentage of success to sample",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name for the topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "archivePolicy",
        "The message archive policy for FIFO topics. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/message-archiving-and-replay-topic-owner.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationFailureFeedbackRoleArn",
        "IAM role for failure feedback",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "contentBasedDeduplication",
        "Enables content-based deduplication for FIFO topics. For more information, see the [related documentation](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lambdaSuccessFeedbackRoleArn",
        "The IAM role permitted to receive success feedback for this topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "fifoTopic",
        "Boolean indicating whether or not to create a FIFO (first-in-first-out) topic (default is `false`).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the topic. Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the `.fifo` suffix. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deliveryPolicy",
        "The SNS delivery policy. More details in the [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tracingConfig",
        'Tracing mode of an Amazon SNS topic. Valid values: `"PassThrough"`, `"Active"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "httpSuccessFeedbackSampleRate",
        "Percentage of success to sample",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "firehoseSuccessFeedbackSampleRate",
        "Percentage of success to sample",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lambdaFailureFeedbackRoleArn",
        "IAM role for failure feedback",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "lambdaSuccessFeedbackSampleRate",
        "Percentage of success to sample",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firehoseSuccessFeedbackRoleArn",
        "The IAM role permitted to receive success feedback for this topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "applicationSuccessFeedbackSampleRate",
        "Percentage of success to sample",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sqsSuccessFeedbackRoleArn",
        "The IAM role permitted to receive success feedback for this topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpSuccessFeedbackRoleArn",
        "The IAM role permitted to receive success feedback for this topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firehoseFailureFeedbackRoleArn",
        "IAM role for failure feedback",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationSuccessFeedbackRoleArn",
        "The IAM role permitted to receive success feedback for this topic",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sqsFailureFeedbackRoleArn",
        "IAM role for failure feedback",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpFailureFeedbackRoleArn",
        "IAM role for failure feedback",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The fully-formed AWS policy as JSON.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsMasterKeyId",
        "The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "signatureVersion",
        "If `SignatureVersion` should be [1 (SHA1) or 2 (SHA256)](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html). The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.",
        [],
        false,
        false,
      ),
    ];
  }
}
