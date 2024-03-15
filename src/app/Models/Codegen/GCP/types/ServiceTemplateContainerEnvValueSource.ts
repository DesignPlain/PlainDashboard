import { ServiceTemplateContainerEnvValueSourceSecretKeyRef } from "./ServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface ServiceTemplateContainerEnvValueSource {
  /*
Selects a secret and a specific version from Cloud Secret Manager.
Structure is documented below.
*/
  SecretKeyRef?: ServiceTemplateContainerEnvValueSourceSecretKeyRef;
}
