import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference {
  // The name of the Cloud Run Service.
  name?: string;
}

export function cloudrun_getServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      () => [],
      true,
      false,
    ),
  ];
}
