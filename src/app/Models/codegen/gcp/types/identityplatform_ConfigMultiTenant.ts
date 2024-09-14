import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identityplatform_ConfigMultiTenant {
  // Whether this project can have tenants or not.
  allowTenants?: boolean;

  /*
The default cloud parent org or folder that the tenant project should be created under.
The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.
*/
  defaultTenantLocation?: string;
}

export function identityplatform_ConfigMultiTenant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowTenants",
      "Whether this project can have tenants or not.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultTenantLocation",
      'The default cloud parent org or folder that the tenant project should be created under.\nThe parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".\nIf the value is not set, the tenant will be created under the same organization or folder as the agent project.',
      () => [],
      false,
      false,
    ),
  ];
}
