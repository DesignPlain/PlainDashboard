import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_ConfigMonitoringRequestLogging,
  identityplatform_ConfigMonitoringRequestLogging_GetTypes,
} from "./identityplatform_ConfigMonitoringRequestLogging";

export interface identityplatform_ConfigMonitoring {
  /*
Configuration for logging requests made to this project to Stackdriver Logging
Structure is documented below.
*/
  requestLogging?: identityplatform_ConfigMonitoringRequestLogging;
}

export function identityplatform_ConfigMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "requestLogging",
      "Configuration for logging requests made to this project to Stackdriver Logging\nStructure is documented below.",
      identityplatform_ConfigMonitoringRequestLogging_GetTypes(),
      false,
      false,
    ),
  ];
}
