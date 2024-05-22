import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lightsail_DistributionCacheBehaviorSettings,
  lightsail_DistributionCacheBehaviorSettings_GetTypes,
} from "../types/lightsail_DistributionCacheBehaviorSettings";
import {
  lightsail_DistributionOrigin,
  lightsail_DistributionOrigin_GetTypes,
} from "../types/lightsail_DistributionOrigin";
import {
  lightsail_DistributionCacheBehavior,
  lightsail_DistributionCacheBehavior_GetTypes,
} from "../types/lightsail_DistributionCacheBehavior";
import {
  lightsail_DistributionDefaultCacheBehavior,
  lightsail_DistributionDefaultCacheBehavior_GetTypes,
} from "../types/lightsail_DistributionDefaultCacheBehavior";
import {
  lightsail_DistributionLocation,
  lightsail_DistributionLocation_GetTypes,
} from "../types/lightsail_DistributionLocation";

export interface DistributionArgs {
  /*
An object that describes the cache behavior settings of the distribution. Detailed below

The following arguments are optional:
*/
  cacheBehaviorSettings?: lightsail_DistributionCacheBehaviorSettings;

  // The name of the SSL/TLS certificate attached to the distribution, if any.
  certificateName?: string;

  // Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below
  origin?: lightsail_DistributionOrigin;

  // Bundle ID to use for the distribution.
  bundleId?: string;

  // A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below
  cacheBehaviors?: Array<lightsail_DistributionCacheBehavior>;

  // Object that describes the default cache behavior of the distribution. Detailed below
  defaultCacheBehavior?: lightsail_DistributionDefaultCacheBehavior;

  // The IP address type of the distribution. Default: `dualstack`.
  ipAddressType?: string;

  // Indicates whether the distribution is enabled. Default: `true`.
  isEnabled?: boolean;

  // Name of the distribution.
  name?: string;

  /*
Map of tags for the Lightsail Distribution. If
configured with a provider
`default_tags` configuration block
present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;
}
export class Distribution extends Resource {
  // The resource type of the origin resource (e.g., Instance).
  public resourceType?: string;

  // The status of the distribution.
  public status?: string;

  // The support code. Include this code in your email to support when you have questions about your Lightsail distribution. This code enables our support team to look up your Lightsail information more easily.
  public supportCode?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The IP address type of the distribution. Default: `dualstack`.
  public ipAddressType?: string;

  // Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below
  public origin?: lightsail_DistributionOrigin;

  // The public DNS of the origin.
  public originPublicDns?: string;

  // Indicates whether the distribution is enabled. Default: `true`.
  public isEnabled?: boolean;

  // An object that describes the location of the distribution, such as the AWS Region and Availability Zone. Detailed below
  public locations?: Array<lightsail_DistributionLocation>;

  // Name of the distribution.
  public name?: string;

  /*
Map of tags for the Lightsail Distribution. If
configured with a provider
`default_tags` configuration block
present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // The alternate domain names of the distribution.
  public alternativeDomainNames?: Array<string>;

  /*
An object that describes the cache behavior settings of the distribution. Detailed below

The following arguments are optional:
*/
  public cacheBehaviorSettings?: lightsail_DistributionCacheBehaviorSettings;

  // The domain name of the distribution.
  public domainName?: string;

  // The Amazon Resource Name (ARN) of the distribution.
  public arn?: string;

  // Object that describes the default cache behavior of the distribution. Detailed below
  public defaultCacheBehavior?: lightsail_DistributionDefaultCacheBehavior;

  // The timestamp when the distribution was created.
  public createdAt?: string;

  // Bundle ID to use for the distribution.
  public bundleId?: string;

  // A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below
  public cacheBehaviors?: Array<lightsail_DistributionCacheBehavior>;

  // The name of the SSL/TLS certificate attached to the distribution, if any.
  public certificateName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cacheBehaviorSettings",
        "An object that describes the cache behavior settings of the distribution. Detailed below\n\nThe following arguments are optional:",
        lightsail_DistributionCacheBehaviorSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateName",
        "The name of the SSL/TLS certificate attached to the distribution, if any.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cacheBehaviors",
        "A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below",
        lightsail_DistributionCacheBehavior_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultCacheBehavior",
        "Object that describes the default cache behavior of the distribution. Detailed below",
        lightsail_DistributionDefaultCacheBehavior_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isEnabled",
        "Indicates whether the distribution is enabled. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the distribution.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "origin",
        "Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below",
        lightsail_DistributionOrigin_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bundleId",
        "Bundle ID to use for the distribution.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The IP address type of the distribution. Default: `dualstack`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags for the Lightsail Distribution. If\nconfigured with a provider\n`default_tags` configuration block\npresent, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
