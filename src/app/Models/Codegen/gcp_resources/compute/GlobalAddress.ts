import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GlobalAddressArgs {
  /*
Labels to apply to this address.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The prefix length of the IP range. If not present, it means the
address field is a single IP address.
This field is not applicable to addresses with addressType=INTERNAL
when purpose=PRIVATE_SERVICE_CONNECT
*/
  prefixLength?: number;

  // An optional description of this resource.
  description?: string;

  /*
The IP Version that will be used by this address. The default value is `IPV4`.
Possible values are: `IPV4`, `IPV6`.
*/
  ipVersion?: string;

  /*
The URL of the network in which to reserve the IP range. The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.
This should only be set when using an Internal address.
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The purpose of the resource. Possible values include:
- VPC_PEERING - for peer networks
- PRIVATE_SERVICE_CONNECT - for  Private Service Connect networks
*/
  purpose?: string;

  /*
The IP address or beginning of the address range represented by this
resource. This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.
*/
  address?: string;

  /*
The type of the address to reserve.
- EXTERNAL indicates public/external single IP address.
- INTERNAL indicates internal IP ranges belonging to some network.
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  addressType?: string;
}
export class GlobalAddress extends Resource {
  /*
The prefix length of the IP range. If not present, it means the
address field is a single IP address.
This field is not applicable to addresses with addressType=INTERNAL
when purpose=PRIVATE_SERVICE_CONNECT
*/
  public prefixLength?: number;

  /*
The IP address or beginning of the address range represented by this
resource. This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.
*/
  public address?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // The fingerprint used for optimistic locking of this resource. Used internally during updates.
  public labelFingerprint?: string;

  /*
The purpose of the resource. Possible values include:
- VPC_PEERING - for peer networks
- PRIVATE_SERVICE_CONNECT - for  Private Service Connect networks
*/
  public purpose?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The URL of the network in which to reserve the IP range. The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.
This should only be set when using an Internal address.
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
The type of the address to reserve.
- EXTERNAL indicates public/external single IP address.
- INTERNAL indicates internal IP ranges belonging to some network.
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  public addressType?: string;

  // An optional description of this resource.
  public description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  public name?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The IP Version that will be used by this address. The default value is `IPV4`.
Possible values are: `IPV4`, `IPV6`.
*/
  public ipVersion?: string;

  /*
Labels to apply to this address.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "prefixLength",
        "The prefix length of the IP range. If not present, it means the\naddress field is a single IP address.\nThis field is not applicable to addresses with addressType=INTERNAL\nwhen purpose=PRIVATE_SERVICE_CONNECT",
        [],
        false,
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
        "purpose",
        "The purpose of the resource. Possible values include:\n* VPC_PEERING - for peer networks\n* PRIVATE_SERVICE_CONNECT - for  Private Service Connect networks",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "address",
        "The IP address or beginning of the address range represented by this\nresource. This can be supplied as an input to reserve a specific\naddress or omitted to allow GCP to choose a valid one for you.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipVersion",
        "The IP Version that will be used by this address. The default value is `IPV4`.\nPossible values are: `IPV4`, `IPV6`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The URL of the network in which to reserve the IP range. The IP range\nmust be in RFC1918 space. The network cannot be deleted if there are\nany reserved IP ranges referring to it.\nThis should only be set when using an Internal address.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "addressType",
        "The type of the address to reserve.\n* EXTERNAL indicates public/external single IP address.\n* INTERNAL indicates internal IP ranges belonging to some network.\nDefault value is `EXTERNAL`.\nPossible values are: `EXTERNAL`, `INTERNAL`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this address.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
