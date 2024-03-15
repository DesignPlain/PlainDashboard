import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkEdgeSecurityServiceArgs {
  // The region of the gateway security policy.
  Region?: string;

  // The resource URL for the network edge security service associated with this network edge security service.
  SecurityPolicy?: string;

  // Free-text description of the resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is created.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class NetworkEdgeSecurityService extends Resource {
  // The resource URL for the network edge security service associated with this network edge security service.
  public SecurityPolicy?: string;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a NetworkEdgeSecurityService.
An up-to-date fingerprint must be provided in order to update the NetworkEdgeSecurityService, otherwise the request will fail with error 412 conditionNotMet.
*/
  public Fingerprint?: string;

  /*
Name of the resource. Provided by the client when the resource is created.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Free-text description of the resource.
  public Description?: string;

  // The region of the gateway security policy.
  public Region?: string;

  // Server-defined URL for this resource with the resource id.
  public SelfLinkWithServiceId?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public ServiceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the gateway security policy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The resource URL for the network edge security service associated with this network edge security service.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created.\n\n\n- - -",
      ),
    ];
  }
}
