import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef,
  Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef,
  Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef";

export interface Cloudrun_getServiceTemplateSpecContainerEnvFrom {
  // The ConfigMap to select from.
  ConfigMapReves?: Array<Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef>;

  // An optional identifier to prepend to each key in the ConfigMap.
  Prefix?: string;

  // The Secret to select from.
  SecretReves?: Array<Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef>;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ConfigMapReves",
      "The ConfigMap to select from.",
      Cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Prefix",
      "An optional identifier to prepend to each key in the ConfigMap.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecretReves",
      "The Secret to select from.",
      Cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(),
      true,
      false,
    ),
  ];
}
