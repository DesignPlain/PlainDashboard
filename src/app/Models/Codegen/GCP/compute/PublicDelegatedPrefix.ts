import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PublicDelegatedPrefixArgs {
  // The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
  ParentPrefix?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A region where the prefix will reside.
  Region?: string;

  // An optional description of this resource.
  Description?: string;

  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  IpCidrRange?: string;

  // If true, the prefix will be live migrated.
  IsLiveMigration?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;
}
export class PublicDelegatedPrefix extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A region where the prefix will reside.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
The IPv4 address range, in CIDR format, represented by this public advertised prefix.


- - -
*/
  public IpCidrRange?: string;

  // If true, the prefix will be live migrated.
  public IsLiveMigration?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  // The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
  public ParentPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpCidrRange",
        "The IPv4 address range, in CIDR format, represented by this public advertised prefix.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IsLiveMigration",
        "If true, the prefix will be live migrated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ParentPrefix",
        "The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A region where the prefix will reside.",
      ),
    ];
  }
}
