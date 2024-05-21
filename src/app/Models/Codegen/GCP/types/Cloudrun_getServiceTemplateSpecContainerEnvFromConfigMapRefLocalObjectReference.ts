import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference {
  // The name of the Cloud Run Service.
  name?: string;
}

export function cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
  ];
}
