import { ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference } from "./ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference";

export interface ServiceTemplateSpecContainerEnvFromSecretRef {
  /*
The Secret to select from.
Structure is documented below.
*/
  LocalObjectReference?: ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference;

  // Specify whether the Secret must be defined
  Optional?: boolean;
}
