import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef,
  Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef";

export interface Cloudrun_getServiceTemplateSpecContainerEnvValueFrom {
  // Selects a key (version) of a secret in Secret Manager.
  SecretKeyReves?: Array<Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef>;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SecretKeyReves",
      "Selects a key (version) of a secret in Secret Manager.",
      Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
