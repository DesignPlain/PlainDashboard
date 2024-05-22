import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterLoggingInfoBrokerLogsFirehose {
  // Name of the Kinesis Data Firehose delivery stream to deliver logs to.
  deliveryStream?: string;

  // Controls whether provisioned throughput is enabled or not. Default value: `false`.
  enabled?: boolean;
}

export function msk_ClusterLoggingInfoBrokerLogsFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "Name of the Kinesis Data Firehose delivery stream to deliver logs to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Controls whether provisioned throughput is enabled or not. Default value: `false`.",
      [],
      true,
      false,
    ),
  ];
}
