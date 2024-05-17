import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigMultiTenant {
  // Whether this project can have tenants or not.
  AllowTenants?: boolean;

  /*
The default cloud parent org or folder that the tenant project should be created under.
The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.
*/
  DefaultTenantLocation?: string;
}

export function Identityplatform_ConfigMultiTenant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowTenants",
      "Whether this project can have tenants or not.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultTenantLocation",
      'The default cloud parent org or folder that the tenant project should be created under.\nThe parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".\nIf the value is not set, the tenant will be created under the same organization or folder as the agent project.',
      [],
      false,
      false,
    ),
  ];
}
