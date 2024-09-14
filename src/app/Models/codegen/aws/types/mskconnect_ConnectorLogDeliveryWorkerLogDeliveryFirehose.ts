import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose {
  // The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
  deliveryStream?: string;

  // Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
  enabled?: boolean;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.",
      () => [],
      true,
      true,
    ),
  ];
}
