import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference,
  cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef {
  /*
The ConfigMap to select from.
Structure is documented below.
*/
  localObjectReference?: cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference;

  // Specify whether the ConfigMap must be defined
  optional?: boolean;
}

export function cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "localObjectReference",
      "The ConfigMap to select from.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "optional",
      "Specify whether the ConfigMap must be defined",
      [],
      false,
      false,
    ),
  ];
}
