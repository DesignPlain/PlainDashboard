import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EndpointAttachmentArgs {
  /*
ID of the endpoint attachment.


- - -
*/
  EndpointAttachmentId?: string;

  // Location of the endpoint attachment.
  Location?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  OrgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  ServiceAttachment?: string;
}
export class EndpointAttachment extends Resource {
  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  public OrgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  public ServiceAttachment?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EndpointAttachmentId",
        "ID of the endpoint attachment.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the endpoint attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization associated with the Apigee instance,\nin the format `organizations/{{org_name}}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAttachment",
        "Format: projects/*/regions/*/serviceAttachments/*",
        [],
        true,
        true,
      ),
    ];
  }
}
