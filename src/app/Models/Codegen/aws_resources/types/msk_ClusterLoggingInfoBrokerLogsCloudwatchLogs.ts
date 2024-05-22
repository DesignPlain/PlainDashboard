import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs {
  // Controls whether provisioned throughput is enabled or not. Default value: `false`.
  enabled?: boolean;

  // Name of the Cloudwatch Log Group to deliver logs to.
  logGroup?: string;
}

export function msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Controls whether provisioned throughput is enabled or not. Default value: `false`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroup",
      "Name of the Cloudwatch Log Group to deliver logs to.",
      [],
      false,
      false,
    ),
  ];
}
