import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef {
  /*
A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
*/
  Key?: string;

  // The name of the Cloud Run Service.
  Name?: string;
}

export function Cloudrun_getServiceTemplateSpecContainerEnvValueFromSecretKeyRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "A Cloud Secret Manager secret version. Must be 'latest' for the latest\nversion or an integer for a specific version.",
      [],
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
  ];
}
