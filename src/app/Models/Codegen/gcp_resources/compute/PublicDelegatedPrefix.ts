import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PublicDelegatedPrefixArgs {
  // If true, the prefix will be live migrated.
  isLiveMigration?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  // The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
  parentPrefix?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A region where the prefix will reside.
  region?: string;

  // An optional description of this resource.
  description?: string;

  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  ipCidrRange?: string;
}
export class PublicDelegatedPrefix extends Resource {
  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  // The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
  public parentPrefix?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // A region where the prefix will reside.
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // An optional description of this resource.
  public description?: string;

  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  public ipCidrRange?: string;

  // If true, the prefix will be live migrated.
  public isLiveMigration?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipCidrRange",
        "The IPv4 address range, in CIDR format, represented by this public advertised prefix.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isLiveMigration",
        "If true, the prefix will be live migrated.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentPrefix",
        "The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.",
        [],
        true,
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
        "A region where the prefix will reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
    ];
  }
}
