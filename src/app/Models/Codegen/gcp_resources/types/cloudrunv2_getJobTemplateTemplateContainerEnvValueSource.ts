import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef,
  cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef";

export interface cloudrunv2_getJobTemplateTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  secretKeyReves?: Array<cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef>;
}

export function cloudrunv2_getJobTemplateTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretKeyReves",
      "Selects a secret and a specific version from Cloud Secret Manager.",
      cloudrunv2_getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
