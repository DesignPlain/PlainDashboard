import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs,
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs_GetTypes,
} from "./mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs";
import {
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose,
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose_GetTypes,
} from "./mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose";
import {
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3,
  mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3_GetTypes,
} from "./mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDelivery {
  // Details about delivering logs to Amazon CloudWatch Logs. See `cloudwatch_logs` Block for details.
  cloudwatchLogs?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;

  // Details about delivering logs to Amazon Kinesis Data Firehose. See `firehose` Block for details.
  firehose?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose;

  // Details about delivering logs to Amazon S3. See `s3` Block for deetails.
  s3?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDelivery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "Details about delivering logs to Amazon CloudWatch Logs. See `cloudwatch_logs` Block for details.",
      () =>
        mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "Details about delivering logs to Amazon Kinesis Data Firehose. See `firehose` Block for details.",
      () => mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Details about delivering logs to Amazon S3. See `s3` Block for deetails.",
      () => mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3_GetTypes(),
      false,
      true,
    ),
  ];
}
