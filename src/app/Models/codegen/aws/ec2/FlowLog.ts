import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_FlowLogDestinationOptions,
  ec2_FlowLogDestinationOptions_GetTypes,
} from '../types/ec2_FlowLogDestinationOptions';

export interface FlowLogArgs {
  // --Deprecated:-- Use `log_destination` instead. The name of the CloudWatch log group. Either `log_group_name` or `log_destination` must be set.
  logGroupName?: string;

  // Subnet ID to attach to
  subnetId?: string;

  // The type of traffic to capture. Valid values: `ACCEPT`,`REJECT`, `ALL`.
  trafficType?: string;

  // Transit Gateway Attachment ID to attach to
  transitGatewayAttachmentId?: string;

  // Elastic Network Interface ID to attach to
  eniId?: string;

  // The fields to include in the flow log record. Accepted format example: `"$${interface-id} $${srcaddr} $${dstaddr} $${srcport} $${dstport}"`.
  logFormat?: string;

  /*
The maximum interval of time
during which a flow of packets is captured and aggregated into a flow
log record. Valid Values: `60` seconds (1 minute) or `600` seconds (10
minutes). Default: `600`. When `transit_gateway_id` or `transit_gateway_attachment_id` is specified, `max_aggregation_interval` -must- be 60 seconds (1 minute).
*/
  maxAggregationInterval?: number;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Transit Gateway ID to attach to
  transitGatewayId?: string;

  // Describes the destination options for a flow log. More details below.
  destinationOptions?: ec2_FlowLogDestinationOptions;

  // The type of the logging destination. Valid values: `cloud-watch-logs`, `s3`, `kinesis-data-firehose`. Default: `cloud-watch-logs`.
  logDestinationType?: string;

  // VPC ID to attach to
  vpcId?: string;

  // ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
  deliverCrossAccountRole?: string;

  // The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group
  iamRoleArn?: string;

  // The ARN of the logging destination. Either `log_destination` or `log_group_name` must be set.
  logDestination?: string;
}
export class FlowLog extends DS_Resource {
  // Describes the destination options for a flow log. More details below.
  public destinationOptions?: ec2_FlowLogDestinationOptions;

  // The ARN of the logging destination. Either `log_destination` or `log_group_name` must be set.
  public logDestination?: string;

  // --Deprecated:-- Use `log_destination` instead. The name of the CloudWatch log group. Either `log_group_name` or `log_destination` must be set.
  public logGroupName?: string;

  // The fields to include in the flow log record. Accepted format example: `"$${interface-id} $${srcaddr} $${dstaddr} $${srcport} $${dstport}"`.
  public logFormat?: string;

  // VPC ID to attach to
  public vpcId?: string;

  // The ARN of the Flow Log.
  public arn?: string;

  // ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
  public deliverCrossAccountRole?: string;

  // The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group
  public iamRoleArn?: string;

  // The type of traffic to capture. Valid values: `ACCEPT`,`REJECT`, `ALL`.
  public trafficType?: string;

  // Transit Gateway Attachment ID to attach to
  public transitGatewayAttachmentId?: string;

  // Transit Gateway ID to attach to
  public transitGatewayId?: string;

  // Elastic Network Interface ID to attach to
  public eniId?: string;

  /*
The maximum interval of time
during which a flow of packets is captured and aggregated into a flow
log record. Valid Values: `60` seconds (1 minute) or `600` seconds (10
minutes). Default: `600`. When `transit_gateway_id` or `transit_gateway_attachment_id` is specified, `max_aggregation_interval` -must- be 60 seconds (1 minute).
*/
  public maxAggregationInterval?: number;

  // Subnet ID to attach to
  public subnetId?: string;

  // The type of the logging destination. Valid values: `cloud-watch-logs`, `s3`, `kinesis-data-firehose`. Default: `cloud-watch-logs`.
  public logDestinationType?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'logGroupName',
        '**Deprecated:** Use `log_destination` instead. The name of the CloudWatch log group. Either `log_group_name` or `log_destination` must be set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'trafficType',
        'The type of traffic to capture. Valid values: `ACCEPT`,`REJECT`, `ALL`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'logDestinationType',
        'The type of the logging destination. Valid values: `cloud-watch-logs`, `s3`, `kinesis-data-firehose`. Default: `cloud-watch-logs`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'logDestination',
        'The ARN of the logging destination. Either `log_destination` or `log_group_name` must be set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayAttachmentId',
        'Transit Gateway Attachment ID to attach to',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'eniId',
        'Elastic Network Interface ID to attach to',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'logFormat',
        'The fields to include in the flow log record. Accepted format example: `"$${interface-id} $${srcaddr} $${dstaddr} $${srcport} $${dstport}"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayId',
        'Transit Gateway ID to attach to',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deliverCrossAccountRole',
        'ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxAggregationInterval',
        'The maximum interval of time\nduring which a flow of packets is captured and aggregated into a flow\nlog record. Valid Values: `60` seconds (1 minute) or `600` seconds (10\nminutes). Default: `600`. When `transit_gateway_id` or `transit_gateway_attachment_id` is specified, `max_aggregation_interval` *must* be 60 seconds (1 minute).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'destinationOptions',
        'Describes the destination options for a flow log. More details below.',
        () => ec2_FlowLogDestinationOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'Subnet ID to attach to',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'VPC ID to attach to',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamRoleArn',
        "The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group",
        () => [],
        false,
        true,
      ),
    ];
  }
}
