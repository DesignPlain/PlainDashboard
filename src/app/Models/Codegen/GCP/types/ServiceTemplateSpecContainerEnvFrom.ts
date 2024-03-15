import { ServiceTemplateSpecContainerEnvFromSecretRef } from "./ServiceTemplateSpecContainerEnvFromSecretRef";
import { ServiceTemplateSpecContainerEnvFromConfigMapRef } from "./ServiceTemplateSpecContainerEnvFromConfigMapRef";

export interface ServiceTemplateSpecContainerEnvFrom {
  /*
The Secret to select from.
Structure is documented below.
*/
  SecretRef?: ServiceTemplateSpecContainerEnvFromSecretRef;

  /*
The ConfigMap to select from.
Structure is documented below.
*/
  ConfigMapRef?: ServiceTemplateSpecContainerEnvFromConfigMapRef;

  // An optional identifier to prepend to each key in the ConfigMap.
  Prefix?: string;
}
