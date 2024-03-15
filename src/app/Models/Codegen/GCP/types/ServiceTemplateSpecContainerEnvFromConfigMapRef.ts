import { ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference } from "./ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference";

export interface ServiceTemplateSpecContainerEnvFromConfigMapRef {
  /*
The ConfigMap to select from.
Structure is documented below.
*/
  LocalObjectReference?: ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference;

  // Specify whether the ConfigMap must be defined
  Optional?: boolean;
}
