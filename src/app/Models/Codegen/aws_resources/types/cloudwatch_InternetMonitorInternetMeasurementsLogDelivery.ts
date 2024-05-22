import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config,
  cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config_GetTypes,
} from "./cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config";

export interface cloudwatch_InternetMonitorInternetMeasurementsLogDelivery {
  //
  s3Config?: cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config;
}

export function cloudwatch_InternetMonitorInternetMeasurementsLogDelivery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Config",
      "",
      cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config_GetTypes(),
      false,
      false,
    ),
  ];
}
