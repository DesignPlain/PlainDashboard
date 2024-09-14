import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_TopicRuleErrorActionHttp,
  iot_TopicRuleErrorActionHttp_GetTypes,
} from "./iot_TopicRuleErrorActionHttp";
import {
  iot_TopicRuleErrorActionKafka,
  iot_TopicRuleErrorActionKafka_GetTypes,
} from "./iot_TopicRuleErrorActionKafka";
import {
  iot_TopicRuleErrorActionSns,
  iot_TopicRuleErrorActionSns_GetTypes,
} from "./iot_TopicRuleErrorActionSns";
import {
  iot_TopicRuleErrorActionFirehose,
  iot_TopicRuleErrorActionFirehose_GetTypes,
} from "./iot_TopicRuleErrorActionFirehose";
import {
  iot_TopicRuleErrorActionStepFunctions,
  iot_TopicRuleErrorActionStepFunctions_GetTypes,
} from "./iot_TopicRuleErrorActionStepFunctions";
import {
  iot_TopicRuleErrorActionCloudwatchAlarm,
  iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchAlarm";
import {
  iot_TopicRuleErrorActionIotAnalytics,
  iot_TopicRuleErrorActionIotAnalytics_GetTypes,
} from "./iot_TopicRuleErrorActionIotAnalytics";
import {
  iot_TopicRuleErrorActionCloudwatchLogs,
  iot_TopicRuleErrorActionCloudwatchLogs_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchLogs";
import {
  iot_TopicRuleErrorActionSqs,
  iot_TopicRuleErrorActionSqs_GetTypes,
} from "./iot_TopicRuleErrorActionSqs";
import {
  iot_TopicRuleErrorActionCloudwatchMetric,
  iot_TopicRuleErrorActionCloudwatchMetric_GetTypes,
} from "./iot_TopicRuleErrorActionCloudwatchMetric";
import {
  iot_TopicRuleErrorActionS3,
  iot_TopicRuleErrorActionS3_GetTypes,
} from "./iot_TopicRuleErrorActionS3";
import {
  iot_TopicRuleErrorActionIotEvents,
  iot_TopicRuleErrorActionIotEvents_GetTypes,
} from "./iot_TopicRuleErrorActionIotEvents";
import {
  iot_TopicRuleErrorActionLambda,
  iot_TopicRuleErrorActionLambda_GetTypes,
} from "./iot_TopicRuleErrorActionLambda";
import {
  iot_TopicRuleErrorActionTimestream,
  iot_TopicRuleErrorActionTimestream_GetTypes,
} from "./iot_TopicRuleErrorActionTimestream";
import {
  iot_TopicRuleErrorActionDynamodbv2,
  iot_TopicRuleErrorActionDynamodbv2_GetTypes,
} from "./iot_TopicRuleErrorActionDynamodbv2";
import {
  iot_TopicRuleErrorActionDynamodb,
  iot_TopicRuleErrorActionDynamodb_GetTypes,
} from "./iot_TopicRuleErrorActionDynamodb";
import {
  iot_TopicRuleErrorActionRepublish,
  iot_TopicRuleErrorActionRepublish_GetTypes,
} from "./iot_TopicRuleErrorActionRepublish";
import {
  iot_TopicRuleErrorActionKinesis,
  iot_TopicRuleErrorActionKinesis_GetTypes,
} from "./iot_TopicRuleErrorActionKinesis";
import {
  iot_TopicRuleErrorActionElasticsearch,
  iot_TopicRuleErrorActionElasticsearch_GetTypes,
} from "./iot_TopicRuleErrorActionElasticsearch";

export interface iot_TopicRuleErrorAction {
  //
  iotEvents?: iot_TopicRuleErrorActionIotEvents;

  //
  kafka?: iot_TopicRuleErrorActionKafka;

  //
  kinesis?: iot_TopicRuleErrorActionKinesis;

  //
  lambda?: iot_TopicRuleErrorActionLambda;

  //
  sns?: iot_TopicRuleErrorActionSns;

  //
  cloudwatchLogs?: iot_TopicRuleErrorActionCloudwatchLogs;

  //
  elasticsearch?: iot_TopicRuleErrorActionElasticsearch;

  //
  sqs?: iot_TopicRuleErrorActionSqs;

  //
  timestream?: iot_TopicRuleErrorActionTimestream;

  //
  cloudwatchAlarm?: iot_TopicRuleErrorActionCloudwatchAlarm;

  //
  dynamodbv2?: iot_TopicRuleErrorActionDynamodbv2;

  //
  http?: iot_TopicRuleErrorActionHttp;

  //
  iotAnalytics?: iot_TopicRuleErrorActionIotAnalytics;

  //
  cloudwatchMetric?: iot_TopicRuleErrorActionCloudwatchMetric;

  //
  firehose?: iot_TopicRuleErrorActionFirehose;

  //
  s3?: iot_TopicRuleErrorActionS3;

  //
  stepFunctions?: iot_TopicRuleErrorActionStepFunctions;

  //
  dynamodb?: iot_TopicRuleErrorActionDynamodb;

  //
  republish?: iot_TopicRuleErrorActionRepublish;
}

export function iot_TopicRuleErrorAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dynamodb",
      "",
      () => iot_TopicRuleErrorActionDynamodb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesis",
      "",
      () => iot_TopicRuleErrorActionKinesis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynamodbv2",
      "",
      () => iot_TopicRuleErrorActionDynamodbv2_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "iotAnalytics",
      "",
      () => iot_TopicRuleErrorActionIotAnalytics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchMetric",
      "",
      () => iot_TopicRuleErrorActionCloudwatchMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "",
      () => iot_TopicRuleErrorActionFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "http",
      "",
      () => iot_TopicRuleErrorActionHttp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "iotEvents",
      "",
      () => iot_TopicRuleErrorActionIotEvents_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kafka",
      "",
      () => iot_TopicRuleErrorActionKafka_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqs",
      "",
      () => iot_TopicRuleErrorActionSqs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timestream",
      "",
      () => iot_TopicRuleErrorActionTimestream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchAlarm",
      "",
      () => iot_TopicRuleErrorActionCloudwatchAlarm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "",
      () => iot_TopicRuleErrorActionS3_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "stepFunctions",
      "",
      () => iot_TopicRuleErrorActionStepFunctions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "republish",
      "",
      () => iot_TopicRuleErrorActionRepublish_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambda",
      "",
      () => iot_TopicRuleErrorActionLambda_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sns",
      "",
      () => iot_TopicRuleErrorActionSns_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "",
      () => iot_TopicRuleErrorActionCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "elasticsearch",
      "",
      () => iot_TopicRuleErrorActionElasticsearch_GetTypes(),
      false,
      false,
    ),
  ];
}
