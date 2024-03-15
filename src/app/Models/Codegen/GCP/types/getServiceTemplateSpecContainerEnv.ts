import { getServiceTemplateSpecContainerEnvValueFrom } from "./getServiceTemplateSpecContainerEnvValueFrom";

export interface getServiceTemplateSpecContainerEnv {
  // The name of the Cloud Run Service.
  Name?: string;

  // Defaults to "".
  Value?: string;

  // Source for the environment variable's value. Only supports secret_key_ref.
  ValueFroms?: Array<getServiceTemplateSpecContainerEnvValueFrom>;
}
