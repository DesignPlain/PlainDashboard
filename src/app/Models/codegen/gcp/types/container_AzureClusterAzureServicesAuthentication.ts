import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tenantId",
      "The Azure Active Directory Tenant ID for Authentication configuration.",
      () => [],
      true,
      false,
    ),
  ];
}
