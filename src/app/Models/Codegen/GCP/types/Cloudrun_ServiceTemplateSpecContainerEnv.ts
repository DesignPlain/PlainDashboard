import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerEnvValueFrom,
  Cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerEnvValueFrom";

export interface Cloudrun_ServiceTemplateSpecContainerEnv {
  // Defaults to "".
  Value?: string;

  /*
Source for the environment variable's value. Only supports secret_key_ref.
Structure is documented below.
*/
  ValueFrom?: Cloudrun_ServiceTemplateSpecContainerEnvValueFrom;

  // Name of the environment variable.
  Name?: string;
}

export function Cloudrun_ServiceTemplateSpecContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      'Defaults to "".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ValueFrom",
      "Source for the environment variable's value. Only supports secret_key_ref.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerEnvValueFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the environment variable.",
      [],
      false,
      false,
    ),
  ];
}
