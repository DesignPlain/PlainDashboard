import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigClientPermissions,
  Identityplatform_ConfigClientPermissions_GetTypes,
} from "./Identityplatform_ConfigClientPermissions";

export interface Identityplatform_ConfigClient {
  /*
(Output)
Firebase subdomain.
*/
  FirebaseSubdomain?: string;

  /*
Configuration related to restricting a user's ability to affect their account.
Structure is documented below.
*/
  Permissions?: Identityplatform_ConfigClientPermissions;

  /*
(Output)
API key that can be used when making requests for this project.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  ApiKey?: string;
}

export function Identityplatform_ConfigClient_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ApiKey",
      "(Output)\nAPI key that can be used when making requests for this project.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FirebaseSubdomain",
      "(Output)\nFirebase subdomain.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Permissions",
      "Configuration related to restricting a user's ability to affect their account.\nStructure is documented below.",
      Identityplatform_ConfigClientPermissions_GetTypes(),
      false,
      false,
    ),
  ];
}
