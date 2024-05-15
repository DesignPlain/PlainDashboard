import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference,
  Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef {
  // The ConfigMap to select from.
  LocalObjectReferences?: Array<Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference>;

  // Specify whether the ConfigMap must be defined
  Optional?: boolean;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LocalObjectReferences",
      "The ConfigMap to select from.",
      Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Optional",
      "Specify whether the ConfigMap must be defined",
      [],
      true,
      false,
    ),
  ];
}
