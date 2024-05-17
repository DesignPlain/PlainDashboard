import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ExternalAddressArgs {
  // User-provided description for this resource.
  Description?: string;

  // The internal IP address of a workload VM.
  InternalIp?: string;

  /*
The ID of the external IP Address.


- - -
*/
  Name?: string;

  /*
The resource name of the private cloud to create a new external address in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  Parent?: string;
}
export class ExternalAddress extends Resource {
  /*
The ID of the external IP Address.


- - -
*/
  public Name?: string;

  /*
The resource name of the private cloud to create a new external address in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  public Parent?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // The external IP address of a workload VM.
  public ExternalIp?: string;

  // State of the resource.
  public State?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // User-provided description for this resource.
  public Description?: string;

  // The internal IP address of a workload VM.
  public InternalIp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "InternalIp",
        "The internal IP address of a workload VM.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the external IP Address.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the private cloud to create a new external address in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud",
        [],
        true,
        true,
      ),
    ];
  }
}
