import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_ServiceTemplateSpecContainerEnvValueFrom,
  cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerEnvValueFrom";

export interface cloudrun_ServiceTemplateSpecContainerEnv {
  // Name of the environment variable.
  name?: string;

  // Defaults to "".
  value?: string;

  /*
Source for the environment variable's value. Only supports secret_key_ref.
Structure is documented below.
*/
  valueFrom?: cloudrun_ServiceTemplateSpecContainerEnvValueFrom;
}

export function cloudrun_ServiceTemplateSpecContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "valueFrom",
      "Source for the environment variable's value. Only supports secret_key_ref.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the environment variable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      'Defaults to "".',
      [],
      false,
      false,
    ),
  ];
}
