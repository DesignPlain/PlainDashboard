import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AzureClusterAzureServicesAuthentication {
  // The Azure Active Directory Application ID for Authentication configuration.
  applicationId?: string;

  // The Azure Active Directory Tenant ID for Authentication configuration.
  tenantId?: string;
}

export function container_AzureClusterAzureServicesAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationId",
      "The Azure Active Directory Application ID for Authentication configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tenantId",
      "The Azure Active Directory Tenant ID for Authentication configuration.",
      [],
      true,
      false,
    ),
  ];
}
