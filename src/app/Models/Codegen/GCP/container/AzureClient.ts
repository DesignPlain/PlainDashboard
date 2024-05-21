import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AzureClientArgs {
  // The Azure Active Directory Application ID.
  applicationId?: string;

  // The location for the resource
  location?: string;

  // The name of this resource.
  name?: string;

  // The project for the resource
  project?: string;

  /*
The Azure Active Directory Tenant ID.



- - -
*/
  tenantId?: string;
}
export class AzureClient extends Resource {
  // Output only. The PEM encoded x509 certificate.
  public certificate?: string;

  // Output only. The time at which this resource was created.
  public createTime?: string;

  // The location for the resource
  public location?: string;

  // The name of this resource.
  public name?: string;

  // The project for the resource
  public project?: string;

  /*
The Azure Active Directory Tenant ID.



- - -
*/
  public tenantId?: string;

  // Output only. A globally unique identifier for the client.
  public uid?: string;

  // The Azure Active Directory Application ID.
  public applicationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "tenantId",
        "The Azure Active Directory Tenant ID.\n\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The Azure Active Directory Application ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
    ];
  }
}
