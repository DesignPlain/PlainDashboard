import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference,
  cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef {
  // The ConfigMap to select from.
  localObjectReferences?: Array<cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference>;

  // Specify whether the ConfigMap must be defined
  optional?: boolean;
}

export function cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "localObjectReferences",
      "The ConfigMap to select from.",
      cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "optional",
      "Specify whether the ConfigMap must be defined",
      [],
      true,
      false,
    ),
  ];
}
