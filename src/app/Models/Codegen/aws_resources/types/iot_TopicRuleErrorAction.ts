import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iot_TopicRuleErrorActionCloudwatchMetric,
  iot_TopicRuleErrorActionCloudwatchMetric_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchMetric";
import {
  iot_TopicRuleErrorActionIotEvents,
  iot_TopicRuleErrorActionIotEvents_GetTypes,
} from "./iot_TopicRuleErrorActionIotEvents";
import {
  iot_TopicRuleErrorActionDynamodb,
  iot_TopicRuleErrorActionDynamodb_GetTypes,
} from "./iot_TopicRuleErrorActionDynamodb";
import {
  iot_TopicRuleErrorActionSns,
  iot_TopicRuleErrorActionSns_GetTypes,
} from "./iot_TopicRuleErrorActionSns";
import {
  iot_TopicRuleErrorActionRepublish,
  iot_TopicRuleErrorActionRepublish_GetTypes,
} from "./iot_TopicRuleErrorActionRepublish";
import {
  iot_TopicRuleErrorActionSqs,
  iot_TopicRuleErrorActionSqs_GetTypes,
} from "./iot_TopicRuleErrorActionSqs";
import {
  iot_TopicRuleErrorActionCloudwatchLogs,
  iot_TopicRuleErrorActionCloudwatchLogs_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchLogs";
import {
  iot_TopicRuleErrorActionTimestream,
  iot_TopicRuleErrorActionTimestream_GetTypes,
} from "./iot_TopicRuleErrorActionTimestream";
import {
  iot_TopicRuleErrorActionCloudwatchAlarm,
  iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchAlarm";
import {
  iot_TopicRuleErrorActionDynamodbv2,
  iot_TopicRuleErrorActionDynamodbv2_GetTypes,
} from "./iot_TopicRuleErrorActionDynamodbv2";
import {
  iot_TopicRuleErrorActionStepFunctions,
  iot_TopicRuleErrorActionStepFunctions_GetTypes,
} from "./iot_TopicRuleErrorActionStepFunctions";
import {
  iot_TopicRuleErrorActionLambda,
  iot_TopicRuleErrorActionLambda_GetTypes,
} from "./iot_TopicRuleErrorActionLambda";
import {
  iot_TopicRuleErrorActionIotAnalytics,
  iot_TopicRuleErrorActionIotAnalytics_GetTypes,
} from "./iot_TopicRuleErrorActionIotAnalytics";
import {
  iot_TopicRuleErrorActionKinesis,
  iot_TopicRuleErrorActionKinesis_GetTypes,
} from "./iot_TopicRuleErrorActionKinesis";
import {
  iot_TopicRuleErrorActionFirehose,
  iot_TopicRuleErrorActionFirehose_GetTypes,
} from "./iot_TopicRuleErrorActionFirehose";
import {
  iot_TopicRuleErrorActionHttp,
  iot_TopicRuleErrorActionHttp_GetTypes,
} from "./iot_TopicRuleErrorActionHttp";
import {
  iot_TopicRuleErrorActionElasticsearch,
  iot_TopicRuleErrorActionElasticsearch_GetTypes,
} from "./iot_TopicRuleErrorActionElasticsearch";
import {
  iot_TopicRuleErrorActionKafka,
  iot_TopicRuleErrorActionKafka_GetTypes,
} from "./iot_TopicRuleErrorActionKafka";
import {
  iot_TopicRuleErrorActionS3,
  iot_TopicRuleErrorActionS3_GetTypes,
} from "./iot_TopicRuleErrorActionS3";

export interface iot_TopicRuleErrorAction {
  //
  elasticsearch?: iot_TopicRuleErrorActionElasticsearch;

  //
  kafka?: iot_TopicRuleErrorActionKafka;

  //
  stepFunctions?: iot_TopicRuleErrorActionStepFunctions;

  //
  dynamodb?: iot_TopicRuleErrorActionDynamodb;

  //
  lambda?: iot_TopicRuleErrorActionLambda;

  //
  s3?: iot_TopicRuleErrorActionS3;

  //
  sns?: iot_TopicRuleErrorActionSns;

  //
  iotAnalytics?: iot_TopicRuleErrorActionIotAnalytics;

  //
  kinesis?: iot_TopicRuleErrorActionKinesis;

  //
  republish?: iot_TopicRuleErrorActionRepublish;

  //
  sqs?: iot_TopicRuleErrorActionSqs;

  //
  cloudwatchAlarm?: iot_TopicRuleErrorActionCloudwatchAlarm;

  //
  cloudwatchLogs?: iot_TopicRuleErrorActionCloudwatchLogs;

  //
  cloudwatchMetric?: iot_TopicRuleErrorActionCloudwatchMetric;

  //
  dynamodbv2?: iot_TopicRuleErrorActionDynamodbv2;

  //
  firehose?: iot_TopicRuleErrorActionFirehose;

  //
  http?: iot_TopicRuleErrorActionHttp;

  //
  iotEvents?: iot_TopicRuleErrorActionIotEvents;

  //
  timestream?: iot_TopicRuleErrorActionTimestream;
}

export function iot_TopicRuleErrorAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lambda",
      "",
      iot_TopicRuleErrorActionLambda_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "iotAnalytics",
      "",
      iot_TopicRuleErrorActionIotAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "",
      iot_TopicRuleErrorActionCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynamodbv2",
      "",
      iot_TopicRuleErrorActionDynamodbv2_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "stepFunctions",
      "",
      iot_TopicRuleErrorActionStepFunctions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timestream",
      "",
      iot_TopicRuleErrorActionTimestream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kafka",
      "",
      iot_TopicRuleErrorActionKafka_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynamodb",
      "",
      iot_TopicRuleErrorActionDynamodb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sns",
      "",
      iot_TopicRuleErrorActionSns_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqs",
      "",
      iot_TopicRuleErrorActionSqs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchAlarm",
      "",
      iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http",
      "",
      iot_TopicRuleErrorActionHttp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "iotEvents",
      "",
      iot_TopicRuleErrorActionIotEvents_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "elasticsearch",
      "",
      iot_TopicRuleErrorActionElasticsearch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "",
      iot_TopicRuleErrorActionS3_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesis",
      "",
      iot_TopicRuleErrorActionKinesis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "republish",
      "",
      iot_TopicRuleErrorActionRepublish_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchMetric",
      "",
      iot_TopicRuleErrorActionCloudwatchMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "",
      iot_TopicRuleErrorActionFirehose_GetTypes(),
      false,
      false,
    ),
  ];
}
