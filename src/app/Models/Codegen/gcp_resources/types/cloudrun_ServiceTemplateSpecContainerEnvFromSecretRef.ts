import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference,
  cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference";

export interface cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef {
  /*
The Secret to select from.
Structure is documented below.
*/
  localObjectReference?: cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference;

  // Specify whether the Secret must be defined
  optional?: boolean;
}

export function cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "optional",
      "Specify whether the Secret must be defined",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "localObjectReference",
      "The Secret to select from.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(),
      false,
      false,
    ),
  ];
}
