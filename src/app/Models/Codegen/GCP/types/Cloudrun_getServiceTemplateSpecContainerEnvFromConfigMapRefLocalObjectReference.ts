import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference {
  // The name of the Cloud Run Service.
  Name?: string;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
  ];
}
