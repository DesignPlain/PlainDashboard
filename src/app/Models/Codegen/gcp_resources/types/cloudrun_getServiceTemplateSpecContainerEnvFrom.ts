import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef,
  cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef";
import {
  cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef,
  cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef";

export interface cloudrun_getServiceTemplateSpecContainerEnvFrom {
  // The Secret to select from.
  secretReves?: Array<cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef>;

  // The ConfigMap to select from.
  configMapReves?: Array<cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef>;

  // An optional identifier to prepend to each key in the ConfigMap.
  prefix?: string;
}

export function cloudrun_getServiceTemplateSpecContainerEnvFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretReves",
      "The Secret to select from.",
      cloudrun_getServiceTemplateSpecContainerEnvFromSecretRef_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configMapReves",
      "The ConfigMap to select from.",
      cloudrun_getServiceTemplateSpecContainerEnvFromConfigMapRef_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "An optional identifier to prepend to each key in the ConfigMap.",
      [],
      true,
      false,
    ),
  ];
}
