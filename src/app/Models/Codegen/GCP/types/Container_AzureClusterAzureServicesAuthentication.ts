import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AzureClusterAzureServicesAuthentication {
  // The Azure Active Directory Application ID for Authentication configuration.
  ApplicationId?: string;

  // The Azure Active Directory Tenant ID for Authentication configuration.
  TenantId?: string;
}

export function Container_AzureClusterAzureServicesAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TenantId",
      "The Azure Active Directory Tenant ID for Authentication configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ApplicationId",
      "The Azure Active Directory Application ID for Authentication configuration.",
      [],
      true,
      false,
    ),
  ];
}
