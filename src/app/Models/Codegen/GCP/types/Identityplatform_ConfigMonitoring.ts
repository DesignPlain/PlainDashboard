import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigMonitoringRequestLogging,
  Identityplatform_ConfigMonitoringRequestLogging_GetTypes,
} from "./Identityplatform_ConfigMonitoringRequestLogging";

export interface Identityplatform_ConfigMonitoring {
  /*
Configuration for logging requests made to this project to Stackdriver Logging
Structure is documented below.
*/
  RequestLogging?: Identityplatform_ConfigMonitoringRequestLogging;
}

export function Identityplatform_ConfigMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RequestLogging",
      "Configuration for logging requests made to this project to Stackdriver Logging\nStructure is documented below.",
      Identityplatform_ConfigMonitoringRequestLogging_GetTypes(),
      false,
      false,
    ),
  ];
}
