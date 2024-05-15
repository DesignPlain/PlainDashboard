import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationSecurityPolicyArgs {
  // A textual description for the organization security policy.
  Description?: string;

  // A textual name of the security policy.
  DisplayName?: string;

  /*
The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id} or folders/{folder_id}


- - -
*/
  Parent?: string;

  /*
The type indicates the intended use of the security policy.
For organization security policies, the only supported type
is "FIREWALL".
Default value is `FIREWALL`.
Possible values are: `FIREWALL`.
*/
  Type?: string;
}
export class OrganizationSecurityPolicy extends Resource {
  // The unique identifier for the resource. This identifier is defined by the server.
  public PolicyId?: string;

  /*
The type indicates the intended use of the security policy.
For organization security policies, the only supported type
is "FIREWALL".
Default value is `FIREWALL`.
Possible values are: `FIREWALL`.
*/
  public Type?: string;

  // A textual description for the organization security policy.
  public Description?: string;

  // A textual name of the security policy.
  public DisplayName?: string;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public Fingerprint?: string;

  /*
The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id} or folders/{folder_id}


- - -
*/
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A textual description for the organization security policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A textual name of the security policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.\nFormat: organizations/{organization_id} or folders/{folder_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        'The type indicates the intended use of the security policy.\nFor organization security policies, the only supported type\nis "FIREWALL".\nDefault value is `FIREWALL`.\nPossible values are: `FIREWALL`.',
        [],
        false,
        true,
      ),
    ];
  }
}
