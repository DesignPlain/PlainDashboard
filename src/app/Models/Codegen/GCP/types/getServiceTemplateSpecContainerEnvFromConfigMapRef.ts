import { getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference } from "./getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface getServiceTemplateSpecContainerEnvFromConfigMapRef {
  // The ConfigMap to select from.
  LocalObjectReferences?: Array<getServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference>;

  // Specify whether the ConfigMap must be defined
  Optional?: boolean;
}
