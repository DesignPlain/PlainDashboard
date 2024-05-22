import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iot_TopicRuleDynamodbv2,
  iot_TopicRuleDynamodbv2_GetTypes,
} from "../types/iot_TopicRuleDynamodbv2";
import {
  iot_TopicRuleSqs,
  iot_TopicRuleSqs_GetTypes,
} from "../types/iot_TopicRuleSqs";
import {
  iot_TopicRuleCloudwatchMetric,
  iot_TopicRuleCloudwatchMetric_GetTypes,
} from "../types/iot_TopicRuleCloudwatchMetric";
import {
  iot_TopicRuleErrorAction,
  iot_TopicRuleErrorAction_GetTypes,
} from "../types/iot_TopicRuleErrorAction";
import {
  iot_TopicRuleRepublish,
  iot_TopicRuleRepublish_GetTypes,
} from "../types/iot_TopicRuleRepublish";
import {
  iot_TopicRuleHttp,
  iot_TopicRuleHttp_GetTypes,
} from "../types/iot_TopicRuleHttp";
import {
  iot_TopicRuleKinesis,
  iot_TopicRuleKinesis_GetTypes,
} from "../types/iot_TopicRuleKinesis";
import {
  iot_TopicRuleFirehose,
  iot_TopicRuleFirehose_GetTypes,
} from "../types/iot_TopicRuleFirehose";
import {
  iot_TopicRuleIotEvent,
  iot_TopicRuleIotEvent_GetTypes,
} from "../types/iot_TopicRuleIotEvent";
import {
  iot_TopicRuleSns,
  iot_TopicRuleSns_GetTypes,
} from "../types/iot_TopicRuleSns";
import {
  iot_TopicRuleElasticsearch,
  iot_TopicRuleElasticsearch_GetTypes,
} from "../types/iot_TopicRuleElasticsearch";
import {
  iot_TopicRuleDynamodb,
  iot_TopicRuleDynamodb_GetTypes,
} from "../types/iot_TopicRuleDynamodb";
import {
  iot_TopicRuleLambda,
  iot_TopicRuleLambda_GetTypes,
} from "../types/iot_TopicRuleLambda";
import {
  iot_TopicRuleTimestream,
  iot_TopicRuleTimestream_GetTypes,
} from "../types/iot_TopicRuleTimestream";
import {
  iot_TopicRuleS3,
  iot_TopicRuleS3_GetTypes,
} from "../types/iot_TopicRuleS3";
import {
  iot_TopicRuleStepFunction,
  iot_TopicRuleStepFunction_GetTypes,
} from "../types/iot_TopicRuleStepFunction";
import {
  iot_TopicRuleIotAnalytic,
  iot_TopicRuleIotAnalytic_GetTypes,
} from "../types/iot_TopicRuleIotAnalytic";
import {
  iot_TopicRuleCloudwatchAlarm,
  iot_TopicRuleCloudwatchAlarm_GetTypes,
} from "../types/iot_TopicRuleCloudwatchAlarm";
import {
  iot_TopicRuleCloudwatchLog,
  iot_TopicRuleCloudwatchLog_GetTypes,
} from "../types/iot_TopicRuleCloudwatchLog";
import {
  iot_TopicRuleKafka,
  iot_TopicRuleKafka_GetTypes,
} from "../types/iot_TopicRuleKafka";

export interface TopicRuleArgs {
  // The description of the rule.
  description?: string;

  //
  elasticsearch?: Array<iot_TopicRuleElasticsearch>;

  //
  https?: Array<iot_TopicRuleHttp>;

  //
  kafkas?: Array<iot_TopicRuleKafka>;

  //
  kineses?: Array<iot_TopicRuleKinesis>;

  //
  timestreams?: Array<iot_TopicRuleTimestream>;

  // The name of the rule.
  name?: string;

  //
  s3?: Array<iot_TopicRuleS3>;

  // The version of the SQL rules engine to use when evaluating the rule.
  sqlVersion?: string;

  //
  stepFunctions?: Array<iot_TopicRuleStepFunction>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  dynamodbs?: Array<iot_TopicRuleDynamodb>;

  //
  dynamodbv2s?: Array<iot_TopicRuleDynamodbv2>;

  // Specifies whether the rule is enabled.
  enabled?: boolean;

  //
  firehoses?: Array<iot_TopicRuleFirehose>;

  //
  iotAnalytics?: Array<iot_TopicRuleIotAnalytic>;

  //
  lambdas?: Array<iot_TopicRuleLambda>;

  //
  sqs?: Array<iot_TopicRuleSqs>;

  // The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
  sql?: string;

  //
  cloudwatchAlarms?: Array<iot_TopicRuleCloudwatchAlarm>;

  //
  cloudwatchLogs?: Array<iot_TopicRuleCloudwatchLog>;

  //
  cloudwatchMetrics?: Array<iot_TopicRuleCloudwatchMetric>;

  // Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.
  errorAction?: iot_TopicRuleErrorAction;

  //
  iotEvents?: Array<iot_TopicRuleIotEvent>;

  //
  republishes?: Array<iot_TopicRuleRepublish>;

  //
  sns?: Array<iot_TopicRuleSns>;
}
export class TopicRule extends Resource {
  //
  public iotAnalytics?: Array<iot_TopicRuleIotAnalytic>;

  //
  public stepFunctions?: Array<iot_TopicRuleStepFunction>;

  //
  public dynamodbv2s?: Array<iot_TopicRuleDynamodbv2>;

  // Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.
  public errorAction?: iot_TopicRuleErrorAction;

  //
  public elasticsearch?: Array<iot_TopicRuleElasticsearch>;

  // Specifies whether the rule is enabled.
  public enabled?: boolean;

  //
  public kineses?: Array<iot_TopicRuleKinesis>;

  //
  public s3?: Array<iot_TopicRuleS3>;

  //
  public sns?: Array<iot_TopicRuleSns>;

  // The version of the SQL rules engine to use when evaluating the rule.
  public sqlVersion?: string;

  //
  public cloudwatchLogs?: Array<iot_TopicRuleCloudwatchLog>;

  //
  public cloudwatchMetrics?: Array<iot_TopicRuleCloudwatchMetric>;

  //
  public dynamodbs?: Array<iot_TopicRuleDynamodb>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public cloudwatchAlarms?: Array<iot_TopicRuleCloudwatchAlarm>;

  // The description of the rule.
  public description?: string;

  //
  public sqs?: Array<iot_TopicRuleSqs>;

  // The ARN of the topic rule
  public arn?: string;

  // The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.
  public sql?: string;

  //
  public kafkas?: Array<iot_TopicRuleKafka>;

  // The name of the rule.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public https?: Array<iot_TopicRuleHttp>;

  //
  public iotEvents?: Array<iot_TopicRuleIotEvent>;

  //
  public republishes?: Array<iot_TopicRuleRepublish>;

  //
  public timestreams?: Array<iot_TopicRuleTimestream>;

  //
  public firehoses?: Array<iot_TopicRuleFirehose>;

  //
  public lambdas?: Array<iot_TopicRuleLambda>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "dynamodbv2s",
        "",
        iot_TopicRuleDynamodbv2_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lambdas",
        "",
        iot_TopicRuleLambda_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "errorAction",
        "Configuration block with error action to be associated with the rule. See the documentation for `cloudwatch_alarm`, `cloudwatch_logs`, `cloudwatch_metric`, `dynamodb`, `dynamodbv2`, `elasticsearch`, `firehose`, `http`, `iot_analytics`, `iot_events`, `kafka`, `kinesis`, `lambda`, `republish`, `s3`, `sns`, `sqs`, `step_functions`, `timestream` configuration blocks for further configuration details.",
        iot_TopicRuleErrorAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sns",
        "",
        iot_TopicRuleSns_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "s3",
        "",
        iot_TopicRuleS3_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "stepFunctions",
        "",
        iot_TopicRuleStepFunction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "firehoses",
        "",
        iot_TopicRuleFirehose_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchLogs",
        "",
        iot_TopicRuleCloudwatchLog_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "elasticsearch",
        "",
        iot_TopicRuleElasticsearch_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "https",
        "",
        iot_TopicRuleHttp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kineses",
        "",
        iot_TopicRuleKinesis_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchAlarms",
        "",
        iot_TopicRuleCloudwatchAlarm_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cloudwatchMetrics",
        "",
        iot_TopicRuleCloudwatchMetric_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iotEvents",
        "",
        iot_TopicRuleIotEvent_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "republishes",
        "",
        iot_TopicRuleRepublish_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "timestreams",
        "",
        iot_TopicRuleTimestream_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dynamodbs",
        "",
        iot_TopicRuleDynamodb_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Specifies whether the rule is enabled.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sqs",
        "",
        iot_TopicRuleSqs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iotAnalytics",
        "",
        iot_TopicRuleIotAnalytic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sql",
        "The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference (http://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference) in the AWS IoT Developer Guide.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "kafkas",
        "",
        iot_TopicRuleKafka_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sqlVersion",
        "The version of the SQL rules engine to use when evaluating the rule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
