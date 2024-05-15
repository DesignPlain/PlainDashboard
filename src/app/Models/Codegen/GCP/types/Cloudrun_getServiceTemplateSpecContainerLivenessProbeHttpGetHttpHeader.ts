import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  // The name of the Cloud Run Service.
  Name?: string;

  // The header field value.
  Value?: string;
}

export function Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The header field value.",
      [],
      true,
      false,
    ),
  ];
}
