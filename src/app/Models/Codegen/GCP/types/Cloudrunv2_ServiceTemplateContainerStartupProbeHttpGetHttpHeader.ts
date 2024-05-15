import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader {
  // The header field name
  Name?: string;

  // The header field value
  Value?: string;
}

export function Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The header field name",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The header field value",
      [],
      false,
      false,
    ),
  ];
}
