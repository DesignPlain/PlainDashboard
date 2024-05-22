import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef,
  cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface cloudrunv2_ServiceTemplateContainerEnvValueSource {
  /*
Selects a secret and a specific version from Cloud Secret Manager.
Structure is documented below.
*/
  secretKeyRef?: cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef;
}

export function cloudrunv2_ServiceTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "secretKeyRef",
      "Selects a secret and a specific version from Cloud Secret Manager.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      false,
      false,
    ),
  ];
}
