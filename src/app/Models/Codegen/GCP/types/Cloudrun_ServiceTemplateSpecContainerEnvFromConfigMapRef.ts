import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference,
  Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef {
  /*
The ConfigMap to select from.
Structure is documented below.
*/
  LocalObjectReference?: Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference;

  // Specify whether the ConfigMap must be defined
  Optional?: boolean;
}

export function Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LocalObjectReference",
      "The ConfigMap to select from.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Optional",
      "Specify whether the ConfigMap must be defined",
      [],
      false,
      false,
    ),
  ];
}
