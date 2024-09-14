import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface GatewaySecurityPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.
  tlsInspectionPolicy?: string;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
The location of the gateway security policy.
The default value is `global`.
*/
  location?: string;

  /*
Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}
gatewaySecurityPolicy should match the pattern:(^a-z?$).


- - -
*/
  name?: string;
}
export class GatewaySecurityPolicy extends DS_Resource {
  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public createTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
The location of the gateway security policy.
The default value is `global`.
*/
  public location?: string;

  /*
Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}
gatewaySecurityPolicy should match the pattern:(^a-z?$).


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.
  public tlsInspectionPolicy?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the gateway security policy.\nThe default value is `global`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}\ngatewaySecurityPolicy should match the pattern:(^a-z?$).\n\n\n- - -",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tlsInspectionPolicy",
        "Name of a TlsInspectionPolicy resource that defines how TLS inspection is performed for any rule that enables it.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
