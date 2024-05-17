import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef,
  Cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef";

export interface Cloudrunv2_getJobTemplateTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  SecretKeyReves?: Array<Cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef>;
}

export function Cloudrunv2_getJobTemplateTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SecretKeyReves",
      "Selects a secret and a specific version from Cloud Secret Manager.",
      Cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
