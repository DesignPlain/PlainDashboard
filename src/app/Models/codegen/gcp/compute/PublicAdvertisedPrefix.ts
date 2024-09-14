import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PublicAdvertisedPrefixArgs {
  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  ipCidrRange?: string;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // An optional description of this resource.
  description?: string;

  // The IPv4 address to be used for reverse DNS verification.
  dnsVerificationIp?: string;
}
export class PublicAdvertisedPrefix extends DS_Resource {
  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // An optional description of this resource.
  public description?: string;

  // The IPv4 address to be used for reverse DNS verification.
  public dnsVerificationIp?: string;

  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  public ipCidrRange?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipCidrRange",
        "The IPv4 address range, in CIDR format, represented by this public advertised prefix.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        () => [],
        false,
        true,
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
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dnsVerificationIp",
        "The IPv4 address to be used for reverse DNS verification.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
