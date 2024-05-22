import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose {
  // Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
  enabled?: boolean;

  // The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
  deliveryStream?: string;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.",
      [],
      false,
      true,
    ),
  ];
}
