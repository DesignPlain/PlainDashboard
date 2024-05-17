import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef,
  Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface Cloudrunv2_ServiceTemplateContainerEnvValueSource {
  /*
Selects a secret and a specific version from Cloud Secret Manager.
Structure is documented below.
*/
  SecretKeyRef?: Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef;
}

export function Cloudrunv2_ServiceTemplateContainerEnvValueSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SecretKeyRef",
      "Selects a secret and a specific version from Cloud Secret Manager.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(),
      false,
      false,
    ),
  ];
}
