import { getServiceTemplateContainerEnvValueSourceSecretKeyRef } from "./getServiceTemplateContainerEnvValueSourceSecretKeyRef";

export interface getServiceTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  SecretKeyReves?: Array<getServiceTemplateContainerEnvValueSourceSecretKeyRef>;
}
