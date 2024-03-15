import { getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef } from "./getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef";

export interface getJobTemplateTemplateContainerEnvValueSource {
  // Selects a secret and a specific version from Cloud Secret Manager.
  SecretKeyReves?: Array<getJobTemplateTemplateContainerEnvValueSourceSecretKeyRef>;
}
