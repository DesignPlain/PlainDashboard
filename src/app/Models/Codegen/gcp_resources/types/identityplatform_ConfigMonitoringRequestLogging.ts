import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identityplatform_ConfigMonitoringRequestLogging {
  // Whether logging is enabled for this project or not.
  enabled?: boolean;
}

export function identityplatform_ConfigMonitoringRequestLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether logging is enabled for this project or not.",
      [],
      false,
      false,
    ),
  ];
}
