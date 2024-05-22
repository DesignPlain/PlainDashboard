import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
  // Details about delivering logs to Amazon CloudWatch Logs. See below.
  cloudwatchLogs?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;

  // Details about delivering logs to Amazon Kinesis Data Firehose. See below.
  firehose?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose;

  // Details about delivering logs to Amazon S3. See below.
  s3?: mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDelivery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "Details about delivering logs to Amazon CloudWatch Logs. See below.",
      mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "Details about delivering logs to Amazon Kinesis Data Firehose. See below.",
      mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Details about delivering logs to Amazon S3. See below.",
      mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3_GetTypes(),
      false,
      true,
    ),
  ];
}
