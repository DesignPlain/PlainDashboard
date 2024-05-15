import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GatewaySecurityPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.
  TlsInspectionPolicy?: string;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
The location of the gateway security policy.
The default value is `global`.
*/
  Location?: string;

  /*
Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}
gatewaySecurityPolicy should match the pattern:(^a-z?$).


- - -
*/
  Name?: string;
}
export class GatewaySecurityPolicy extends Resource {
  /*
Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}
gatewaySecurityPolicy should match the pattern:(^a-z?$).


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Server-defined URL of this resource.
  public SelfLink?: string;

  // Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.
  public TlsInspectionPolicy?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public CreateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The location of the gateway security policy.
The default value is `global`.
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}\ngatewaySecurityPolicy should match the pattern:(^a-z?$).\n\n\n- - -",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TlsInspectionPolicy",
        "Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the gateway security policy.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
    ];
  }
}
