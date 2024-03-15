import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionSecurityPolicyUserDefinedField } from "../types/RegionSecurityPolicyUserDefinedField";
import { RegionSecurityPolicyDdosProtectionConfig } from "../types/RegionSecurityPolicyDdosProtectionConfig";

export interface RegionSecurityPolicyArgs {
  /*
Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.
A user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.
Rules may then specify matching values for these fields.
Structure is documented below.
*/
  UserDefinedFields?: Array<RegionSecurityPolicyUserDefinedField>;

  /*
Configuration for Google Cloud Armor DDOS Proctection Config.
Structure is documented below.
*/
  DdosProtectionConfig?: RegionSecurityPolicyDdosProtectionConfig;

  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The Region in which the created Region Security Policy should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
The type indicates the intended use of the security policy.
- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
This field can be set only at resource creation time.
Possible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.
*/
  Type?: string;
}
export class RegionSecurityPolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Server-defined URL for this resource with the resource id.
  public SelfLinkWithPolicyId?: string;

  /*
The type indicates the intended use of the security policy.
- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
This field can be set only at resource creation time.
Possible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.
*/
  public Type?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public PolicyId?: string;

  /*
The Region in which the created Region Security Policy should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.
A user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.
Rules may then specify matching values for these fields.
Structure is documented below.
*/
  public UserDefinedFields?: Array<RegionSecurityPolicyUserDefinedField>;

  /*
Configuration for Google Cloud Armor DDOS Proctection Config.
Structure is documented below.
*/
  public DdosProtectionConfig?: RegionSecurityPolicyDdosProtectionConfig;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public Fingerprint?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DdosProtectionConfig",
        "Configuration for Google Cloud Armor DDOS Proctection Config.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.\nSpecifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created Region Security Policy should reside.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type indicates the intended use of the security policy.\n- CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.\n- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.\n- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.\nThis field can be set only at resource creation time.\nPossible values are: `CLOUD_ARMOR`, `CLOUD_ARMOR_EDGE`, `CLOUD_ARMOR_NETWORK`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "UserDefinedFields",
        "Definitions of user-defined fields for CLOUD_ARMOR_NETWORK policies.\nA user-defined field consists of up to 4 bytes extracted from a fixed offset in the packet, relative to the IPv4, IPv6, TCP, or UDP header, with an optional mask to select certain bits.\nRules may then specify matching values for these fields.\nStructure is documented below.",
      ),
    ];
  }
}
