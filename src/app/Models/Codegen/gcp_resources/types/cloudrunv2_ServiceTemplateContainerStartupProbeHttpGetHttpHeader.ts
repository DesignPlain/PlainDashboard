import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader {
  // The header field value
  value?: string;

  // The header field name
  name?: string;
}

export function cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The header field value",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The header field name",
      [],
      true,
      false,
    ),
  ];
}
