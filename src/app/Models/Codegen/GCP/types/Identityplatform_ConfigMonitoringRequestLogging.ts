import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigMonitoringRequestLogging {
  // Whether logging is enabled for this project or not.
  Enabled?: boolean;
}

export function Identityplatform_ConfigMonitoringRequestLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether logging is enabled for this project or not.",
      [],
      false,
      false,
    ),
  ];
}
