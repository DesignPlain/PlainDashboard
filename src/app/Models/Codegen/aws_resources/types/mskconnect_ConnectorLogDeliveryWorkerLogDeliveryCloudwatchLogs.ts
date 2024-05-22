import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
  // Whether log delivery to Amazon CloudWatch Logs is enabled.
  enabled?: boolean;

  // The name of the CloudWatch log group that is the destination for log delivery.
  logGroup?: string;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether log delivery to Amazon CloudWatch Logs is enabled.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroup",
      "The name of the CloudWatch log group that is the destination for log delivery.",
      [],
      false,
      true,
    ),
  ];
}
