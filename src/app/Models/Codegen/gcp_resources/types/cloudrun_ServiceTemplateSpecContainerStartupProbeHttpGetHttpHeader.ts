import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  // The header field name.
  name?: string;

  // The header field value.
  value?: string;
}

export function cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The header field name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The header field value.",
      [],
      false,
      false,
    ),
  ];
}
