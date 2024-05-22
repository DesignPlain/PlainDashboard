import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  mskconnect_ConnectorLogDeliveryWorkerLogDelivery,
  mskconnect_ConnectorLogDeliveryWorkerLogDelivery_GetTypes,
} from "./mskconnect_ConnectorLogDeliveryWorkerLogDelivery";

export interface mskconnect_ConnectorLogDelivery {
  // The workers can send worker logs to different destination types. This configuration specifies the details of these destinations. See below.
  workerLogDelivery?: mskconnect_ConnectorLogDeliveryWorkerLogDelivery;
}

export function mskconnect_ConnectorLogDelivery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "workerLogDelivery",
      "The workers can send worker logs to different destination types. This configuration specifies the details of these destinations. See below.",
      mskconnect_ConnectorLogDeliveryWorkerLogDelivery_GetTypes(),
      true,
      true,
    ),
  ];
}
