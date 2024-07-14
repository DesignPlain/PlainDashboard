import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EndpointAttachmentArgs {
  /*
ID of the endpoint attachment.


- - -
*/
  endpointAttachmentId?: string;

  // Location of the endpoint attachment.
  location?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  orgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  serviceAttachment?: string;
}
export class EndpointAttachment extends Resource {
  // State of the endpoint attachment connection to the service attachment.
  public connectionState?: string;

  /*
ID of the endpoint attachment.


- - -
*/
  public endpointAttachmentId?: string;

  // Host that can be used in either HTTP Target Endpoint directly, or as the host in Target Server.
  public host?: string;

  // Location of the endpoint attachment.
  public location?: string;

  /*
Name of the Endpoint Attachment in the following format:
organizations/{organization}/endpointAttachments/{endpointAttachment}.
*/
  public name?: string;

  /*
The Apigee Organization associated with the Apigee instance,
in the format `organizations/{{org_name}}`.
*/
  public orgId?: string;

  // Format: projects/-/regions/-/serviceAttachments/-
  public serviceAttachment?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "endpointAttachmentId",
        "ID of the endpoint attachment.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the endpoint attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The Apigee Organization associated with the Apigee instance,\nin the format `organizations/{{org_name}}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAttachment",
        "Format: projects/*/regions/*/serviceAttachments/*",
        [],
        true,
        true,
      ),
    ];
  }
}
