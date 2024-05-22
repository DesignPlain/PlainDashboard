import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionSecurityPolicyUserDefinedField,
  compute_RegionSecurityPolicyUserDefinedField_GetTypes,
} from "../types/compute_RegionSecurityPolicyUserDefinedField";
import {
  compute_RegionSecurityPolicyDdosProtectionConfig,
  compute_RegionSecurityPolicyDdosProtectionConfig_GetTypes,
} from "../types/compute_RegionSecurityPolicyDdosProtectionConfig";

export interface RegionSecurityPolicyArgs {
  /*
The type indicates the intended use of the security policy.
- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
This field can be set only at resource creation time.
Possible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.
*/
  type?: string;

  /*
Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.
A user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.
Rules may then specify matching values for these fields.
Structure is documented below.
*/
  userDefinedFields?: Array<compute_RegionSecurityPolicyUserDefinedField>;

  /*
Configuration for Google Cloud Armor DDOS Proctection Config.
Structure is documented below.
*/
  ddosProtectionConfig?: compute_RegionSecurityPolicyDdosProtectionConfig;

  // An optional description of this resource. Provide this property when you create the resource.
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The Region in which the created Region Security Policy should reside.
If it is not provided, the provider region is used.
*/
  region?: string;
}
export class RegionSecurityPolicy extends Resource {
  /*
Configuration for Google Cloud Armor DDOS Proctection Config.
Structure is documented below.
*/
  public ddosProtectionConfig?: compute_RegionSecurityPolicyDdosProtectionConfig;

  // An optional description of this resource. Provide this property when you create the resource.
  public description?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public policyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The Region in which the created Region Security Policy should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  // Server-defined URL for the resource.
  public selfLink?: string;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public fingerprint?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // Server-defined URL for this resource with the resource id.
  public selfLinkWithPolicyId?: string;

  /*
The type indicates the intended use of the security policy.
- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
This field can be set only at resource creation time.
Possible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.
*/
  public type?: string;

  /*
Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.
A user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.
Rules may then specify matching values for these fields.
Structure is documented below.
*/
  public userDefinedFields?: Array<compute_RegionSecurityPolicyUserDefinedField>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "userDefinedFields",
        "Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.\nA user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.\nRules may then specify matching values for these fields.\nStructure is documented below.",
        compute_RegionSecurityPolicyUserDefinedField_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ddosProtectionConfig",
        "Configuration for Google Cloud Armor DDOS Proctection Config.\nStructure is documented below.",
        compute_RegionSecurityPolicyDdosProtectionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.\nSpecifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
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
        "region",
        "The Region in which the created Region Security Policy should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type indicates the intended use of the security policy.\n- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.\n- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.\n- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.\nThis field can be set only at resource creation time.\nPossible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.",
        [],
        false,
        true,
      ),
    ];
  }
}
