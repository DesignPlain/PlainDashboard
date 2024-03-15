import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointAttachmentArgs {
  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  OrgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  ServiceAttachment?: string;

  /*
ID of the endpoint attachment.


- - -
*/
  EndpointAttachmentId?: string;

  // Location of the endpoint attachment.
  Location?: string;
}
export class EndpointAttachment extends Resource {
  // State of the endpoint attachment connection to the service attachment.
  public ConnectionState?: string;

  /*
ID of the endpoint attachment.


- - -
*/
  public EndpointAttachmentId?: string;

  // Host that can be used in either HTTP Target Endpoint directly, or as the host in Target Server.
  public Host?: string;

  // Location of the endpoint attachment.
  public Location?: string;

  /*
Name of the Endpoint Attachment in the following format:
organizations/{organization}/endpointAttachments/{endpointAttachment}.
*/
  public Name?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  public OrgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  public ServiceAttachment?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Apigee instance,\nin the format `organizations/{{org_name}}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAttachment",
        "Format: projects/*/regions/*/serviceAttachments/*",
      ),
      new DynamicUIProps(
        InputType.String,
        "EndpointAttachmentId",
        "ID of the endpoint attachment.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the endpoint attachment.",
      ),
    ];
  }
}
