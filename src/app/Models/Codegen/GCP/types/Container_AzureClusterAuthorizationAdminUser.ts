import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AzureClusterAuthorizationAdminUser {
  // The name of the user, e.g. `my-gcp-id@gmail.com`.
  Username?: string;
}

export function Container_AzureClusterAuthorizationAdminUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "The name of the user, e.g. `my-gcp-id@gmail.com`.",
      [],
      true,
      false,
    ),
  ];
}
