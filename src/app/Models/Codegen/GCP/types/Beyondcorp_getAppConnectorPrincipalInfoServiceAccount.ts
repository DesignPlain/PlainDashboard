import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_getAppConnectorPrincipalInfoServiceAccount {
  // Email address of the service account.
  Email?: string;
}

export function Beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Email",
      "Email address of the service account.",
      [],
      true,
      false,
    ),
  ];
}
