import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterClusterTelemetry {
  // Type of the integration.
  Type?: string;
}

export function Container_getClusterClusterTelemetry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of the integration.",
      [],
      true,
      false,
    ),
  ];
}
