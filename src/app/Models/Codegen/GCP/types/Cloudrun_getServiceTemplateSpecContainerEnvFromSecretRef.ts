import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference,
  Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference";

export interface Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef {
  // The Secret to select from.
  LocalObjectReferences?: Array<Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference>;

  // Specify whether the Secret must be defined
  Optional?: boolean;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LocalObjectReferences",
      "The Secret to select from.",
      Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Optional",
      "Specify whether the Secret must be defined",
      [],
      true,
      false,
    ),
  ];
}
