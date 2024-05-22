import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config {
  //
  bucketPrefix?: string;

  //
  logDeliveryStatus?: string;

  //
  bucketName?: string;
}

export function cloudwatch_InternetMonitorInternetMeasurementsLogDeliveryS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bucketPrefix", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "logDeliveryStatus",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "bucketName", "", [], true, false),
  ];
}
