import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterLoggingInfoBrokerLogsFirehose {
  // Name of the Kinesis Data Firehose delivery stream to deliver logs to.
  deliveryStream?: string;

  //
  enabled?: boolean;
}

export function msk_ClusterLoggingInfoBrokerLogsFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "Name of the Kinesis Data Firehose delivery stream to deliver logs to.",
      () => [],
      false,
      false,
    ),
  ];
}
