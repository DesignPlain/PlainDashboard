import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference,
  Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference";

export interface Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef {
  /*
The Secret to select from.
Structure is documented below.
*/
  LocalObjectReference?: Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference;

  // Specify whether the Secret must be defined
  Optional?: boolean;
}

export function Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LocalObjectReference",
      "The Secret to select from.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Optional",
      "Specify whether the Secret must be defined",
      [],
      false,
      false,
    ),
  ];
}
