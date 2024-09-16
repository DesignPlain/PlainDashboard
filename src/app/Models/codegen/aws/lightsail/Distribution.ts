import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lightsail_DistributionDefaultCacheBehavior,
  lightsail_DistributionDefaultCacheBehavior_GetTypes,
} from '../types/lightsail_DistributionDefaultCacheBehavior';
import {
  lightsail_DistributionOrigin,
  lightsail_DistributionOrigin_GetTypes,
} from '../types/lightsail_DistributionOrigin';
import {
  lightsail_DistributionLocation,
  lightsail_DistributionLocation_GetTypes,
} from '../types/lightsail_DistributionLocation';
import {
  lightsail_DistributionCacheBehaviorSettings,
  lightsail_DistributionCacheBehaviorSettings_GetTypes,
} from '../types/lightsail_DistributionCacheBehaviorSettings';
import {
  lightsail_DistributionCacheBehavior,
  lightsail_DistributionCacheBehavior_GetTypes,
} from '../types/lightsail_DistributionCacheBehavior';

export interface DistributionArgs {
  // Map of tags for the Lightsail Distribution. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Bundle ID to use for the distribution.
  bundleId?: string;

  /*
An object that describes the cache behavior settings of the distribution. Detailed below

The following arguments are optional:
*/
  cacheBehaviorSettings?: lightsail_DistributionCacheBehaviorSettings;

  // A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below
  cacheBehaviors?: Array<lightsail_DistributionCacheBehavior>;

  // The IP address type of the distribution. Default: `dualstack`.
  ipAddressType?: string;

  // Indicates whether the distribution is enabled. Default: `true`.
  isEnabled?: boolean;

  // The name of the SSL/TLS certificate attached to the distribution, if any.
  certificateName?: string;

  // Object that describes the default cache behavior of the distribution. Detailed below
  defaultCacheBehavior?: lightsail_DistributionDefaultCacheBehavior;

  // Name of the distribution.
  name?: string;

  // Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below
  origin?: lightsail_DistributionOrigin;
}
export class Distribution extends DS_Resource {
  // The status of the distribution.
  public status?: string;

  // The support code. Include this code in your email to support when you have questions about your Lightsail distribution. This code enables our support team to look up your Lightsail information more easily.
  public supportCode?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the distribution.
  public arn?: string;

  // A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below
  public cacheBehaviors?: Array<lightsail_DistributionCacheBehavior>;

  // The domain name of the distribution.
  public domainName?: string;

  // Name of the distribution.
  public name?: string;

  // The timestamp when the distribution was created.
  public createdAt?: string;

  // The IP address type of the distribution. Default: `dualstack`.
  public ipAddressType?: string;

  // The Lightsail resource type (e.g., Distribution).
  public resourceType?: string;

  // Bundle ID to use for the distribution.
  public bundleId?: string;

  // Object that describes the default cache behavior of the distribution. Detailed below
  public defaultCacheBehavior?: lightsail_DistributionDefaultCacheBehavior;

  // Indicates whether the distribution is enabled. Default: `true`.
  public isEnabled?: boolean;

  // The public DNS of the origin.
  public originPublicDns?: string;

  // Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below
  public origin?: lightsail_DistributionOrigin;

  // Map of tags for the Lightsail Distribution. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The alternate domain names of the distribution.
  public alternativeDomainNames?: Array<string>;

  /*
An object that describes the cache behavior settings of the distribution. Detailed below

The following arguments are optional:
*/
  public cacheBehaviorSettings?: lightsail_DistributionCacheBehaviorSettings;

  // The name of the SSL/TLS certificate attached to the distribution, if any.
  public certificateName?: string;

  // An object that describes the location of the distribution, such as the AWS Region and Availability Zone. Detailed below
  public locations?: Array<lightsail_DistributionLocation>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'cacheBehaviorSettings',
        'An object that describes the cache behavior settings of the distribution. Detailed below\n\nThe following arguments are optional:',
        () => lightsail_DistributionCacheBehaviorSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'isEnabled',
        'Indicates whether the distribution is enabled. Default: `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'defaultCacheBehavior',
        'Object that describes the default cache behavior of the distribution. Detailed below',
        () => lightsail_DistributionDefaultCacheBehavior_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'origin',
        'Object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer. Detailed below',
        () => lightsail_DistributionOrigin_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bundleId',
        'Bundle ID to use for the distribution.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'cacheBehaviors',
        'A set of configuration blocks that describe the per-path cache behavior of the distribution. Detailed below',
        () => lightsail_DistributionCacheBehavior_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddressType',
        'The IP address type of the distribution. Default: `dualstack`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateName',
        'The name of the SSL/TLS certificate attached to the distribution, if any.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the distribution.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags for the Lightsail Distribution. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
