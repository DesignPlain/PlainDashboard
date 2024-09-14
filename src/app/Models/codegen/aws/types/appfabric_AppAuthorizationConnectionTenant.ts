import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appfabric_AppAuthorizationConnectionTenant {
  //
  tenantDisplayName?: string;

  //
  tenantIdentifier?: string;
}

export function appfabric_AppAuthorizationConnectionTenant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tenantDisplayName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tenantIdentifier",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
