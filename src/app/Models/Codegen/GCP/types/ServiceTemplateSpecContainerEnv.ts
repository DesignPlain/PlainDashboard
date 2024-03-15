import { ServiceTemplateSpecContainerEnvValueFrom } from "./ServiceTemplateSpecContainerEnvValueFrom";

export interface ServiceTemplateSpecContainerEnv {
  // Defaults to "".
  Value?: string;

  /*
Source for the environment variable's value. Only supports secret_key_ref.
Structure is documented below.
*/
  ValueFrom?: ServiceTemplateSpecContainerEnvValueFrom;

  // Name of the environment variable.
  Name?: string;
}
