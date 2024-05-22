import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  msk_ClusterLoggingInfoBrokerLogs,
  msk_ClusterLoggingInfoBrokerLogs_GetTypes,
} from "./msk_ClusterLoggingInfoBrokerLogs";

export interface msk_ClusterLoggingInfo {
  // Configuration block for Broker Logs settings for logging info. See below.
  brokerLogs?: msk_ClusterLoggingInfoBrokerLogs;
}

export function msk_ClusterLoggingInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "brokerLogs",
      "Configuration block for Broker Logs settings for logging info. See below.",
      msk_ClusterLoggingInfoBrokerLogs_GetTypes(),
      true,
      false,
    ),
  ];
}
