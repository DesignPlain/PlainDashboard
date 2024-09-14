import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef {
  /*
A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
*/
  key?: string;

  // The name of the Cloud Run Service.
  name?: string;
}

export function cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "A Cloud Secret Manager secret version. Must be 'latest' for the latest\nversion or an integer for a specific version.",
      () => [],
      true,
      false,
    ),
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
