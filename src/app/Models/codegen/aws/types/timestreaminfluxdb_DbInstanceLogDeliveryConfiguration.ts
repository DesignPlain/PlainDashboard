import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration,
  timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration_GetTypes,
} from "./timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration";

export interface timestreaminfluxdb_DbInstanceLogDeliveryConfiguration {
  // Configuration for S3 bucket log delivery.
  s3Configuration?: timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration;
}

export function timestreaminfluxdb_DbInstanceLogDeliveryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "Configuration for S3 bucket log delivery.",
      () =>
        timestreaminfluxdb_DbInstanceLogDeliveryConfigurationS3Configuration_GetTypes(),
      false,
      false,
    ),
  ];
}
