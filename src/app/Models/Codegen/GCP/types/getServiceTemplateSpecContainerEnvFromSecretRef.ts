import { getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference } from "./getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference";

export interface getServiceTemplateSpecContainerEnvFromSecretRef {
  // The Secret to select from.
  LocalObjectReferences?: Array<getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference>;

  // Specify whether the Secret must be defined
  Optional?: boolean;
}
