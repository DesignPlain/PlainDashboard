import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RegionSslPolicyArgs {
  /*
A list of features enabled when the selected profile is CUSTOM. The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.
See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. --Note--: this argument
-must- be present when using the `CUSTOM` profile. This argument
-must not- be present when using any other profile.
*/
  customFeatures?: Array<string>;

  // An optional description of this resource.
  description?: string;

  /*
The minimum version of SSL protocol that can be used by the clients
to establish a connection with the load balancer.
Default value is `TLS_1_0`.
Possible values are: `TLS_1_0`, `TLS_1_1`, `TLS_1_2`.
*/
  minTlsVersion?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
Profile specifies the set of SSL features that can be used by the
load balancer when negotiating SSL with clients. If using `CUSTOM`,
the set of SSL features to enable must be specified in the
`customFeatures` field.
See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
`CUSTOM` is used, the `custom_features` attribute --must be set--.
Default value is `COMPATIBLE`.
Possible values are: `COMPATIBLE`, `MODERN`, `RESTRICTED`, `CUSTOM`.
*/
  profile?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The region where the regional SSL policy resides.


- - -
*/
  region?: string;
}
export class RegionSslPolicy extends Resource {
  // The URI of the created resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  /*
The minimum version of SSL protocol that can be used by the clients
to establish a connection with the load balancer.
Default value is `TLS_1_0`.
Possible values are: `TLS_1_0`, `TLS_1_1`, `TLS_1_2`.
*/
  public minTlsVersion?: string;

  /*
Profile specifies the set of SSL features that can be used by the
load balancer when negotiating SSL with clients. If using `CUSTOM`,
the set of SSL features to enable must be specified in the
`customFeatures` field.
See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
`CUSTOM` is used, the `custom_features` attribute --must be set--.
Default value is `COMPATIBLE`.
Possible values are: `COMPATIBLE`, `MODERN`, `RESTRICTED`, `CUSTOM`.
*/
  public profile?: string;

  /*
The region where the regional SSL policy resides.


- - -
*/
  public region?: string;

  /*
A list of features enabled when the selected profile is CUSTOM. The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.
See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. --Note--: this argument
-must- be present when using the `CUSTOM` profile. This argument
-must not- be present when using any other profile.
*/
  public customFeatures?: Array<string>;

  // The list of features enabled in the SSL policy.
  public enabledFeatures?: Array<string>;

  /*
Fingerprint of this resource. A hash of the contents stored in this
object. This field is used in optimistic locking.
*/
  public fingerprint?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region where the regional SSL policy resides.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customFeatures",
        "A list of features enabled when the selected profile is CUSTOM. The\nmethod returns the set of features that can be specified in this\nlist. This field must be empty if the profile is not CUSTOM.\nSee the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)\nfor which ciphers are available to use. **Note**: this argument\n*must* be present when using the `CUSTOM` profile. This argument\n*must not* be present when using any other profile.",
        InputType_String_GetTypes(),
        false,
        false,
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
        "minTlsVersion",
        "The minimum version of SSL protocol that can be used by the clients\nto establish a connection with the load balancer.\nDefault value is `TLS_1_0`.\nPossible values are: `TLS_1_0`, `TLS_1_1`, `TLS_1_2`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "profile",
        "Profile specifies the set of SSL features that can be used by the\nload balancer when negotiating SSL with clients. If using `CUSTOM`,\nthe set of SSL features to enable must be specified in the\n`customFeatures` field.\nSee the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)\nfor information on what cipher suites each profile provides. If\n`CUSTOM` is used, the `custom_features` attribute **must be set**.\nDefault value is `COMPATIBLE`.\nPossible values are: `COMPATIBLE`, `MODERN`, `RESTRICTED`, `CUSTOM`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
