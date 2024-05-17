import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerEnvValueFrom,
  Cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerEnvValueFrom";

export interface Cloudrun_getServiceTemplateSpecContainerEnv {
  // The name of the Cloud Run Service.
  Name?: string;

  // Defaults to "".
  Value?: string;

  // Source for the environment variable's value. Only supports secret_key_ref.
  ValueFroms?: Array<Cloudrun_getServiceTemplateSpecContainerEnvValueFrom>;
}

export function Cloudrun_getServiceTemplateSpecContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ValueFroms",
      "Source for the environment variable's value. Only supports secret_key_ref.",
      Cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      'Defaults to "".',
      [],
      true,
      false,
    ),
  ];
}
