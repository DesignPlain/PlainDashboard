import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef,
  cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface cloudrunv2_getServiceTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  secretKeyReves?: Array<cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef>;
}

export function cloudrunv2_getServiceTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretKeyReves",
      "Selects a secret and a specific version from Cloud Secret Manager.",
      cloudrunv2_getServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
