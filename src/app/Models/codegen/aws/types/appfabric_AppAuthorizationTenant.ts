import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appfabric_AppAuthorizationTenant {
  // The display name of the tenant.
  tenantDisplayName?: string;

  // The ID of the application tenant.
  tenantIdentifier?: string;
}

export function appfabric_AppAuthorizationTenant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tenantDisplayName",
      "The display name of the tenant.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tenantIdentifier",
      "The ID of the application tenant.",
      () => [],
      true,
      false,
    ),
  ];
}
