import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface HealthCheckArgs {
  // For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
  childHealthchecks?: Array<string>;

  // The CloudWatchRegion that the CloudWatch alarm was created in.
  cloudwatchAlarmRegion?: string;

  /*
A boolean value that stops Route 53 from performing health checks. When set to true, Route 53 will do the following depending on the type of health check:
- For health checks that check the health of endpoints, Route5 53 stops submitting requests to your application, server, or other resource.
- For calculated health checks, Route 53 stops aggregating the status of the referenced health checks.
- For health checks that monitor CloudWatch alarms, Route 53 stops monitoring the corresponding CloudWatch metrics.

> --Note:-- After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of `invert_healthcheck`.
*/
  disabled?: boolean;

  // A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
  regions?: Array<string>;

  // A map of tags to assign to the health check. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The number of consecutive health checks that an endpoint must pass or fail.
  failureThreshold?: number;

  // The fully qualified domain name of the endpoint to be checked. If a value is set for `ip_address`, the value set for `fqdn` will be passed in the `Host` header.
  fqdn?: string;

  // The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
  insufficientDataHealthStatus?: string;

  // A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
  invertHealthcheck?: boolean;

  // A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
  measureLatency?: boolean;

  // The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
  requestInterval?: number;

  // String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
  searchString?: string;

  // The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
  childHealthThreshold?: number;

  // The name of the CloudWatch alarm.
  cloudwatchAlarmName?: string;

  // The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED`, `CLOUDWATCH_METRIC` and `RECOVERY_CONTROL`.
  type?: string;

  // A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
  enableSni?: boolean;

  // The IP address of the endpoint to be checked.
  ipAddress?: string;

  // The port of the endpoint to be checked.
  port?: number;

  /*
This is a reference name used in Caller Reference
(helpful for identifying single health_check set amongst others)
*/
  referenceName?: string;

  // The path that you want Amazon Route 53 to request when performing health checks.
  resourcePath?: string;

  // The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control. This is used when health check type is `RECOVERY_CONTROL`
  routingControlArn?: string;
}
export class HealthCheck extends DS_Resource {
  // The Amazon Resource Name (ARN) of the Health Check.
  public arn?: string;

  // The CloudWatchRegion that the CloudWatch alarm was created in.
  public cloudwatchAlarmRegion?: string;

  // A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.
  public enableSni?: boolean;

  // The fully qualified domain name of the endpoint to be checked. If a value is set for `ip_address`, the value set for `fqdn` will be passed in the `Host` header.
  public fqdn?: string;

  // The IP address of the endpoint to be checked.
  public ipAddress?: string;

  // The port of the endpoint to be checked.
  public port?: number;

  /*
This is a reference name used in Caller Reference
(helpful for identifying single health_check set amongst others)
*/
  public referenceName?: string;

  // The path that you want Amazon Route 53 to request when performing health checks.
  public resourcePath?: string;

  // String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.
  public searchString?: string;

  // For a specified parent health check, a list of HealthCheckId values for the associated child health checks.
  public childHealthchecks?: Array<string>;

  // The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.
  public insufficientDataHealthStatus?: string;

  // A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.
  public invertHealthcheck?: boolean;

  // A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.
  public measureLatency?: boolean;

  // The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED`, `CLOUDWATCH_METRIC` and `RECOVERY_CONTROL`.
  public type?: string;

  // The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive
  public childHealthThreshold?: number;

  // A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.
  public regions?: Array<string>;

  // The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.
  public requestInterval?: number;

  // The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control. This is used when health check type is `RECOVERY_CONTROL`
  public routingControlArn?: string;

  // A map of tags to assign to the health check. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the CloudWatch alarm.
  public cloudwatchAlarmName?: string;

  /*
A boolean value that stops Route 53 from performing health checks. When set to true, Route 53 will do the following depending on the type of health check:
- For health checks that check the health of endpoints, Route5 53 stops submitting requests to your application, server, or other resource.
- For calculated health checks, Route 53 stops aggregating the status of the referenced health checks.
- For health checks that monitor CloudWatch alarms, Route 53 stops monitoring the corresponding CloudWatch metrics.

> --Note:-- After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of `invert_healthcheck`.
*/
  public disabled?: boolean;

  // The number of consecutive health checks that an endpoint must pass or fail.
  public failureThreshold?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'cloudwatchAlarmRegion',
        'The CloudWatchRegion that the CloudWatch alarm was created in.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'invertHealthcheck',
        'A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'searchString',
        'String searched in the first 5120 bytes of the response body for check to be considered healthy. Only valid with `HTTP_STR_MATCH` and `HTTPS_STR_MATCH`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disabled',
        'A boolean value that stops Route 53 from performing health checks. When set to true, Route 53 will do the following depending on the type of health check:\n* For health checks that check the health of endpoints, Route5 53 stops submitting requests to your application, server, or other resource.\n* For calculated health checks, Route 53 stops aggregating the status of the referenced health checks.\n* For health checks that monitor CloudWatch alarms, Route 53 stops monitoring the corresponding CloudWatch metrics.\n\n> **Note:** After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of `invert_healthcheck`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'regions',
        'A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'fqdn',
        'The fully qualified domain name of the endpoint to be checked. If a value is set for `ip_address`, the value set for `fqdn` will be passed in the `Host` header.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED`, `CLOUDWATCH_METRIC` and `RECOVERY_CONTROL`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'referenceName',
        'This is a reference name used in Caller Reference\n(helpful for identifying single health_check set amongst others)',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the health check. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'failureThreshold',
        'The number of consecutive health checks that an endpoint must pass or fail.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'childHealthThreshold',
        'The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'routingControlArn',
        'The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control. This is used when health check type is `RECOVERY_CONTROL`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableSni',
        'A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS\' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddress',
        'The IP address of the endpoint to be checked.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'port',
        'The port of the endpoint to be checked.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'childHealthchecks',
        'For a specified parent health check, a list of HealthCheckId values for the associated child health checks.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'insufficientDataHealthStatus',
        'The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'measureLatency',
        'A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'requestInterval',
        'The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cloudwatchAlarmName',
        'The name of the CloudWatch alarm.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourcePath',
        'The path that you want Amazon Route 53 to request when performing health checks.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
