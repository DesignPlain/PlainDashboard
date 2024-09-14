import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_TopicRuleSns,
  iot_TopicRuleSns_GetTypes,
} from "../types/iot_TopicRuleSns";
import {
  iot_TopicRuleIotAnalytic,
  iot_TopicRuleIotAnalytic_GetTypes,
} from "../types/iot_TopicRuleIotAnalytic";
import {
  iot_TopicRuleCloudwatchLog,
  iot_TopicRuleCloudwatchLog_GetTypes,
} from "../types/iot_TopicRuleCloudwatchLog";
import {
  iot_TopicRuleIotEvent,
  iot_TopicRuleIotEvent_GetTypes,
} from "../types/iot_TopicRuleIotEvent";
import {
  iot_TopicRuleFirehose,
  iot_TopicRuleFirehose_GetTypes,
} from "../types/iot_TopicRuleFirehose";
import {
  iot_TopicRuleDynamodbv2,
  iot_TopicRuleDynamodbv2_GetTypes,
} from "../types/iot_TopicRuleDynamodbv2";
import {
  iot_TopicRuleStepFunction,
  iot_TopicRuleStepFunction_GetTypes,
} from "../types/iot_TopicRuleStepFunction";
import {
  iot_TopicRuleDynamodb,
  iot_TopicRuleDynamodb_GetTypes,
} from "../types/iot_TopicRuleDynamodb";
import {
  iot_TopicRuleCloudwatchAlarm,
  iot_TopicRuleCloudwatchAlarm_GetTypes,
} from "../types/iot_TopicRuleCloudwatchAlarm";
import {
  iot_TopicRuleSqs,
  iot_TopicRuleSqs_GetTypes,
} from "../types/iot_TopicRuleSqs";
import {
  iot_TopicRuleHttp,
  iot_TopicRuleHttp_GetTypes,
} from "../types/iot_TopicRuleHttp";
import {
  iot_TopicRuleKinesis,
  iot_TopicRuleKinesis_GetTypes,
} from "../types/iot_TopicRuleKinesis";
import {
  iot_TopicRuleLambda,
  iot_TopicRuleLambda_GetTypes,
} from "../types/iot_TopicRuleLambda";
import {
  iot_TopicRuleS3,
  iot_TopicRuleS3_GetTypes,
} from "../types/iot_TopicRuleS3";
import {
  iot_TopicRuleCloudwatchMetric,
  iot_TopicRuleCloudwatchMetric_GetTypes,
} from "../types/iot_TopicRuleCloudwatchMetric";
import {
  iot_TopicRuleTimestream,
  iot_TopicRuleTimestream_GetTypes,
} from "../types/iot_TopicRuleTimestream";
import {
  iot_TopicRuleErrorAction,
  iot_TopicRuleErrorAction_GetTypes,
} from "../types/iot_TopicRuleErrorAction";
import {
  iot_TopicRuleKafka,
  iot_TopicRuleKafka_GetTypes,
} from "../types/iot_TopicRuleKafka";
import {
  iot_TopicRuleRepublish,
  iot_TopicRuleRepublish_GetTypes,
} from "../types/iot_TopicRuleRepublish";
import {
  iot_TopicRuleElasticsearch,
  iot_TopicRuleElasticsearch_GetTypes,
} from "../types/iot_TopicRuleElasticsearch";

export interface TopicRuleArgs {
  // The name of the rule.
  name?: string;

  //
  sns?: Array<iot_TopicRuleSns>;

  // Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.
  errorAction?: iot_TopicRuleErrorAction;

  //
  firehoses?: Array<iot_TopicRuleFirehose>;

  //
  iotAnalytics?: Array<iot_TopicRuleIotAnalytic>;

  //
  kafkas?: Array<iot_TopicRuleKafka>;

  //
  republishes?: Array<iot_TopicRuleRepublish>;

  // The description of the rule.
  description?: string;

  //
  https?: Array<iot_TopicRuleHttp>;

  //
  kineses?: Array<iot_TopicRuleKinesis>;

  //
  lambdas?: Array<iot_TopicRuleLambda>;

  //
  s3?: Array<iot_TopicRuleS3>;

  //
  stepFunctions?: Array<iot_TopicRuleStepFunction>;

  //
  cloudwatchLogs?: Array<iot_TopicRuleCloudwatchLog>;

  //
  elasticsearch?: Array<iot_TopicRuleElasticsearch>;

  //
  dynamodbs?: Array<iot_TopicRuleDynamodb>;

  //
  dynamodbv2s?: Array<iot_TopicRuleDynamodbv2>;

  // Specifies whether the rule is enabled.
  enabled?: boolean;

  //
  iotEvents?: Array<iot_TopicRuleIotEvent>;

  // The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
  sql?: string;

  // The version of the SQL rules engine to use when evaluating the rule.
  sqlVersion?: string;

  //
  cloudwatchAlarms?: Array<iot_TopicRuleCloudwatchAlarm>;

  //
  cloudwatchMetrics?: Array<iot_TopicRuleCloudwatchMetric>;

  //
  timestreams?: Array<iot_TopicRuleTimestream>;

  //
  sqs?: Array<iot_TopicRuleSqs>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class TopicRule extends DS_Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public cloudwatchAlarms?: Array<iot_TopicRuleCloudwatchAlarm>;

  //
  public dynamodbv2s?: Array<iot_TopicRuleDynamodbv2>;

  //
  public https?: Array<iot_TopicRuleHttp>;

  //
  public lambdas?: Array<iot_TopicRuleLambda>;

  //
  public dynamodbs?: Array<iot_TopicRuleDynamodb>;

  //
  public elasticsearch?: Array<iot_TopicRuleElasticsearch>;

  //
  public firehoses?: Array<iot_TopicRuleFirehose>;

  //
  public iotAnalytics?: Array<iot_TopicRuleIotAnalytic>;

  //
  public kineses?: Array<iot_TopicRuleKinesis>;

  //
  public s3?: Array<iot_TopicRuleS3>;

  //
  public sns?: Array<iot_TopicRuleSns>;

  // The description of the rule.
  public description?: string;

  // Specifies whether the rule is enabled.
  public enabled?: boolean;

  // Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.
  public errorAction?: iot_TopicRuleErrorAction;

  //
  public sqs?: Array<iot_TopicRuleSqs>;

  //
  public cloudwatchMetrics?: Array<iot_TopicRuleCloudwatchMetric>;

  //
  public stepFunctions?: Array<iot_TopicRuleStepFunction>;

  //
  public timestreams?: Array<iot_TopicRuleTimestream>;

  // The ARN of the topic rule
  public arn?: string;

  //
  public iotEvents?: Array<iot_TopicRuleIotEvent>;

  //
  public republishes?: Array<iot_TopicRuleRepublish>;

  //
  public cloudwatchLogs?: Array<iot_TopicRuleCloudwatchLog>;

  // The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
  public sql?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public kafkas?: Array<iot_TopicRuleKafka>;

  // The name of the rule.
  public name?: string;

  // The version of the SQL rules engine to use when evaluating the rule.
  public sqlVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "errorAction",
        "Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.",
        () => iot_TopicRuleErrorAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iotAnalytics",
        "",
        () => iot_TopicRuleIotAnalytic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lambdas",
        "",
        () => iot_TopicRuleLambda_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "s3",
        "",
        () => iot_TopicRuleS3_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dynamodbv2s",
        "",
        () => iot_TopicRuleDynamodbv2_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sqlVersion",
        "The version of the SQL rules engine to use when evaluating the rule.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "timestreams",
        "",
        () => iot_TopicRuleTimestream_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sqs",
        "",
        () => iot_TopicRuleSqs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "firehoses",
        "",
        () => iot_TopicRuleFirehose_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "republishes",
        "",
        () => iot_TopicRuleRepublish_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kineses",
        "",
        () => iot_TopicRuleKinesis_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchLogs",
        "",
        () => iot_TopicRuleCloudwatchLog_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "elasticsearch",
        "",
        () => iot_TopicRuleElasticsearch_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Specifies whether the rule is enabled.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchMetrics",
        "",
        () => iot_TopicRuleCloudwatchMetric_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sns",
        "",
        () => iot_TopicRuleSns_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "https",
        "",
        () => iot_TopicRuleHttp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dynamodbs",
        "",
        () => iot_TopicRuleDynamodb_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kafkas",
        "",
        () => iot_TopicRuleKafka_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the rule.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "stepFunctions",
        "",
        () => iot_TopicRuleStepFunction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iotEvents",
        "",
        () => iot_TopicRuleIotEvent_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sql",
        "The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchAlarms",
        "",
        () => iot_TopicRuleCloudwatchAlarm_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
