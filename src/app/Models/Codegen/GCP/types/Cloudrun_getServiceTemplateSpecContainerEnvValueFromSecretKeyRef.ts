import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef {
  // The name of the Cloud Run Service.
  name?: string;

  /*
A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
*/
  key?: string;
}

export function cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(): DynamicUIProps[] {
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
      "key",
      "A Cloud Secret Manager secret version. Must be 'latest' for the latest\nversion or an integer for a specific version.",
      [],
      true,
      false,
    ),
  ];
}
