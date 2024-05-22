import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecContainerEnvValueFrom,
  cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerEnvValueFrom";

export interface cloudrun_getServiceTemplateSpecContainerEnv {
  // The name of the Cloud Run Service.
  name?: string;

  // Defaults to "".
  value?: string;

  // Source for the environment variable's value. Only supports secret_key_ref.
  valueFroms?: Array<cloudrun_getServiceTemplateSpecContainerEnvValueFrom>;
}

export function cloudrun_getServiceTemplateSpecContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      'Defaults to "".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "valueFroms",
      "Source for the environment variable's value. Only supports secret_key_ref.",
      cloudrun_getServiceTemplateSpecContainerEnvValueFrom_GetTypes(),
      true,
      false,
    ),
  ];
}
