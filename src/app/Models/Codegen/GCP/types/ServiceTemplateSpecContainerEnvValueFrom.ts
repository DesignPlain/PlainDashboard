import { ServiceTemplateSpecContainerEnvValueFromSecretKeyRef } from "./ServiceTemplateSpecContainerEnvValueFromSecretKeyRef";

export interface ServiceTemplateSpecContainerEnvValueFrom {
  /*
Selects a key (version) of a secret in Secret Manager.
Structure is documented below.
*/
  SecretKeyRef?: ServiceTemplateSpecContainerEnvValueFromSecretKeyRef;
}
