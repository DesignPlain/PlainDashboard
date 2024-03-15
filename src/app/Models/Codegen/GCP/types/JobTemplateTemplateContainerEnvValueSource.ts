import { JobTemplateTemplateContainerEnvValueSourceSecretKeyRef } from "./JobTemplateTemplateContainerEnvValueSourceSecretKeyRef";

export interface JobTemplateTemplateContainerEnvValueSource {
  /*
Selects a secret and a specific version from Cloud Secret Manager.
Structure is documented below.
*/
  SecretKeyRef?: JobTemplateTemplateContainerEnvValueSourceSecretKeyRef;
}
