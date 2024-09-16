import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RouterBgp,
  compute_RouterBgp_GetTypes,
} from '../types/compute_RouterBgp';

export interface RouterArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Region where the router resides.
  region?: string;

  /*
BGP information specific to this router.
Structure is documented below.
*/
  bgp?: compute_RouterBgp;

  // An optional description of this resource.
  description?: string;

  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  encryptedInterconnectRouter?: boolean;

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
A reference to the network to which this router belongs.


- - -
*/
  network?: string;
}
export class Router extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Region where the router resides.
  public region?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  public encryptedInterconnectRouter?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
BGP information specific to this router.
Structure is documented below.
*/
  public bgp?: compute_RouterBgp;

  // An optional description of this resource.
  public description?: string;

  /*
A reference to the network to which this router belongs.


- - -
*/
  public network?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'bgp',
        'BGP information specific to this router.\nStructure is documented below.',
        () => compute_RouterBgp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'encryptedInterconnectRouter',
        'Indicates if a router is dedicated for use with encrypted VLAN\nattachments (interconnectAttachments).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'network',
        'A reference to the network to which this router belongs.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'Region where the router resides.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
