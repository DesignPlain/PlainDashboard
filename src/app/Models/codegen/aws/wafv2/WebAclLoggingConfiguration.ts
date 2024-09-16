import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclLoggingConfigurationRedactedField,
  wafv2_WebAclLoggingConfigurationRedactedField_GetTypes,
} from '../types/wafv2_WebAclLoggingConfigurationRedactedField';
import {
  wafv2_WebAclLoggingConfigurationLoggingFilter,
  wafv2_WebAclLoggingConfigurationLoggingFilter_GetTypes,
} from '../types/wafv2_WebAclLoggingConfigurationLoggingFilter';

export interface WebAclLoggingConfigurationArgs {
  // Configuration block that specifies which web requests are kept in the logs and which are dropped. It allows filtering based on the rule action and the web request labels applied by matching rules during web ACL evaluation. For more details, refer to the Logging Filter section below.
  loggingFilter?: wafv2_WebAclLoggingConfigurationLoggingFilter;

  // Configuration for parts of the request that you want to keep out of the logs. Up to 100 `redacted_fields` blocks are supported. See Redacted Fields below for more details.
  redactedFields?: Array<wafv2_WebAclLoggingConfigurationRedactedField>;

  // Amazon Resource Name (ARN) of the web ACL that you want to associate with `log_destination_configs`.
  resourceArn?: string;

  // Configuration block that allows you to associate Amazon Kinesis Data Firehose, Cloudwatch Log log group, or S3 bucket Amazon Resource Names (ARNs) with the web ACL. --Note:-- data firehose, log group, or bucket name --must-- be prefixed with `aws-waf-logs-`, e.g. `aws-waf-logs-example-firehose`, `aws-waf-logs-example-log-group`, or `aws-waf-logs-example-bucket`.
  logDestinationConfigs?: Array<string>;
}
export class WebAclLoggingConfiguration extends DS_Resource {
  // Configuration for parts of the request that you want to keep out of the logs. Up to 100 `redacted_fields` blocks are supported. See Redacted Fields below for more details.
  public redactedFields?: Array<wafv2_WebAclLoggingConfigurationRedactedField>;

  // Amazon Resource Name (ARN) of the web ACL that you want to associate with `log_destination_configs`.
  public resourceArn?: string;

  // Configuration block that allows you to associate Amazon Kinesis Data Firehose, Cloudwatch Log log group, or S3 bucket Amazon Resource Names (ARNs) with the web ACL. --Note:-- data firehose, log group, or bucket name --must-- be prefixed with `aws-waf-logs-`, e.g. `aws-waf-logs-example-firehose`, `aws-waf-logs-example-log-group`, or `aws-waf-logs-example-bucket`.
  public logDestinationConfigs?: Array<string>;

  // Configuration block that specifies which web requests are kept in the logs and which are dropped. It allows filtering based on the rule action and the web request labels applied by matching rules during web ACL evaluation. For more details, refer to the Logging Filter section below.
  public loggingFilter?: wafv2_WebAclLoggingConfigurationLoggingFilter;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'loggingFilter',
        'Configuration block that specifies which web requests are kept in the logs and which are dropped. It allows filtering based on the rule action and the web request labels applied by matching rules during web ACL evaluation. For more details, refer to the Logging Filter section below.',
        () => wafv2_WebAclLoggingConfigurationLoggingFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'redactedFields',
        'Configuration for parts of the request that you want to keep out of the logs. Up to 100 `redacted_fields` blocks are supported. See Redacted Fields below for more details.',
        () => wafv2_WebAclLoggingConfigurationRedactedField_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'Amazon Resource Name (ARN) of the web ACL that you want to associate with `log_destination_configs`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'logDestinationConfigs',
        'Configuration block that allows you to associate Amazon Kinesis Data Firehose, Cloudwatch Log log group, or S3 bucket Amazon Resource Names (ARNs) with the web ACL. **Note:** data firehose, log group, or bucket name **must** be prefixed with `aws-waf-logs-`, e.g. `aws-waf-logs-example-firehose`, `aws-waf-logs-example-log-group`, or `aws-waf-logs-example-bucket`.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
