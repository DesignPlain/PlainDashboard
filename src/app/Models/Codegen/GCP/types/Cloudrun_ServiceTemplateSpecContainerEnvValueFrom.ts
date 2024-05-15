import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef,
  Cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef";

export interface Cloudrun_ServiceTemplateSpecContainerEnvValueFrom {
  /*
Selects a key (version) of a secret in Secret Manager.
Structure is documented below.
*/
  SecretKeyRef?: Cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef;
}

export function Cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SecretKeyRef",
      "Selects a key (version) of a secret in Secret Manager.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(),
      true,
      false,
    ),
  ];
}
