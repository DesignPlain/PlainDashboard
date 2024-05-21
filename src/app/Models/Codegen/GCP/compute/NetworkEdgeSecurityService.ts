import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkEdgeSecurityServiceArgs {
  // The resource URL for the network edge security service associated with this network edge security service.
  securityPolicy?: string;

  // Free-text description of the resource.
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is created.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the gateway security policy.
  region?: string;
}
export class NetworkEdgeSecurityService extends Resource {
  /*
Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a NetworkEdgeSecurityService.
An up-to-date fingerprint must be provided in order to update the NetworkEdgeSecurityService, otherwise the request will fail with error 412 conditionNotMet.
*/
  public fingerprint?: string;

  /*
Name of the resource. Provided by the client when the resource is created.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The resource URL for the network edge security service associated with this network edge security service.
  public securityPolicy?: string;

  // Server-defined URL for this resource with the resource id.
  public selfLinkWithServiceId?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // Free-text description of the resource.
  public description?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public serviceId?: string;

  // The region of the gateway security policy.
  public region?: string;

  // Server-defined URL for the resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "securityPolicy",
        "The resource URL for the network edge security service associated with this network edge security service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Free-text description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is created.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the gateway security policy.",
        [],
        false,
        true,
      ),
    ];
  }
}
