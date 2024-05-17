import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef,
  Cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface Cloudrunv2_getServiceTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  SecretKeyReves?: Array<Cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef>;
}

export function Cloudrunv2_getServiceTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SecretKeyReves",
      "Selects a secret and a specific version from Cloud Secret Manager.",
      Cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
