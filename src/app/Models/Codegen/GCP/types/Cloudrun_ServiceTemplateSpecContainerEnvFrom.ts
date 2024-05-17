import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef,
  Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef,
  Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef";

export interface Cloudrun_ServiceTemplateSpecContainerEnvFrom {
  // An optional identifier to prepend to each key in the ConfigMap.
  Prefix?: string;

  /*
The Secret to select from.
Structure is documented below.
*/
  SecretRef?: Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef;

  /*
The ConfigMap to select from.
Structure is documented below.
*/
  ConfigMapRef?: Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef;
}

export function Cloudrun_ServiceTemplateSpecContainerEnvFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Prefix",
      "An optional identifier to prepend to each key in the ConfigMap.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SecretRef",
      "The Secret to select from.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfigMapRef",
      "The ConfigMap to select from.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(),
      false,
      false,
    ),
  ];
}
