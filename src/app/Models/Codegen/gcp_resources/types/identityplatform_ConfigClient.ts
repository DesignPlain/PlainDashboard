import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  identityplatform_ConfigClientPermissions,
  identityplatform_ConfigClientPermissions_GetTypes,
} from "./identityplatform_ConfigClientPermissions";

export interface identityplatform_ConfigClient {
  /*
(Output)
API key that can be used when making requests for this project.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  apiKey?: string;

  /*
(Output)
Firebase subdomain.
*/
  firebaseSubdomain?: string;

  /*
Configuration related to restricting a user's ability to affect their account.
Structure is documented below.
*/
  permissions?: identityplatform_ConfigClientPermissions;
}

export function identityplatform_ConfigClient_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiKey",
      "(Output)\nAPI key that can be used when making requests for this project.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firebaseSubdomain",
      "(Output)\nFirebase subdomain.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "permissions",
      "Configuration related to restricting a user's ability to affect their account.\nStructure is documented below.",
      identityplatform_ConfigClientPermissions_GetTypes(),
      false,
      false,
    ),
  ];
}
