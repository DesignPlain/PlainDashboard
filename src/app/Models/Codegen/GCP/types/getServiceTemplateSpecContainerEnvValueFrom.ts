import { getServiceTemplateSpecContainerEnvValueFromSecretKeyRef } from "./getServiceTemplateSpecContainerEnvValueFromSecretKeyRef";

export interface getServiceTemplateSpecContainerEnvValueFrom {
  // Selects a key (version) of a secret in Secret Manager.
  SecretKeyReves?: Array<getServiceTemplateSpecContainerEnvValueFromSecretKeyRef>;
}
