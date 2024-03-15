import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AzureClientArgs {
  // The Azure Active Directory Application ID.
  ApplicationId?: string;

  // The location for the resource
  Location?: string;

  // The name of this resource.
  Name?: string;

  // The project for the resource
  Project?: string;

  /*
The Azure Active Directory Tenant ID.



- - -
*/
  TenantId?: string;
}
export class AzureClient extends Resource {
  // Output only. The PEM encoded x509 certificate.
  public Certificate?: string;

  // Output only. The time at which this resource was created.
  public CreateTime?: string;

  // The location for the resource
  public Location?: string;

  // The name of this resource.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  /*
The Azure Active Directory Tenant ID.



- - -
*/
  public TenantId?: string;

  // Output only. A globally unique identifier for the client.
  public Uid?: string;

  // The Azure Active Directory Application ID.
  public ApplicationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "TenantId",
        "The Azure Active Directory Tenant ID.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApplicationId",
        "The Azure Active Directory Application ID.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of this resource.",
      ),
    ];
  }
}
