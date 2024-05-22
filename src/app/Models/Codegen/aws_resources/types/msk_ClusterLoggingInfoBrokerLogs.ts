import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs,
  msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs_GetTypes,
} from "./msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs";
import {
  msk_ClusterLoggingInfoBrokerLogsFirehose,
  msk_ClusterLoggingInfoBrokerLogsFirehose_GetTypes,
} from "./msk_ClusterLoggingInfoBrokerLogsFirehose";
import {
  msk_ClusterLoggingInfoBrokerLogsS3,
  msk_ClusterLoggingInfoBrokerLogsS3_GetTypes,
} from "./msk_ClusterLoggingInfoBrokerLogsS3";

export interface msk_ClusterLoggingInfoBrokerLogs {
  //
  cloudwatchLogs?: msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs;

  //
  firehose?: msk_ClusterLoggingInfoBrokerLogsFirehose;

  //
  s3?: msk_ClusterLoggingInfoBrokerLogsS3;
}

export function msk_ClusterLoggingInfoBrokerLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "",
      msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "",
      msk_ClusterLoggingInfoBrokerLogsFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "",
      msk_ClusterLoggingInfoBrokerLogsS3_GetTypes(),
      false,
      false,
    ),
  ];
}
