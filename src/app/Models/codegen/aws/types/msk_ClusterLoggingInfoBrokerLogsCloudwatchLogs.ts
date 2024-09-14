import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs {
  //
  enabled?: boolean;

  // Name of the Cloudwatch Log Group to deliver logs to.
  logGroup?: string;
}

export function msk_ClusterLoggingInfoBrokerLogsCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "logGroup",
      "Name of the Cloudwatch Log Group to deliver logs to.",
      () => [],
      false,
      false,
    ),
  ];
}
