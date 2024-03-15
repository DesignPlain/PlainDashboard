import { getServiceTemplateSpecContainerEnvFromConfigMapRef } from "./getServiceTemplateSpecContainerEnvFromConfigMapRef";
import { getServiceTemplateSpecContainerEnvFromSecretRef } from "./getServiceTemplateSpecContainerEnvFromSecretRef";

export interface getServiceTemplateSpecContainerEnvFrom {
  // The ConfigMap to select from.
  ConfigMapReves?: Array<getServiceTemplateSpecContainerEnvFromConfigMapRef>;

  // An optional identifier to prepend to each key in the ConfigMap.
  Prefix?: string;

  // The Secret to select from.
  SecretReves?: Array<getServiceTemplateSpecContainerEnvFromSecretRef>;
}
