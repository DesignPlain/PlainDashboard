import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  route53_ZoneVpc,
  route53_ZoneVpc_GetTypes,
} from '../types/route53_ZoneVpc';

export interface ZoneArgs {
  // Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
  forceDestroy?: boolean;

  // This is the name of the hosted zone.
  name?: string;

  // A mapping of tags to assign to the zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegation_set_id` argument in this resource and any `aws.route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
  vpcs?: Array<route53_ZoneVpc>;

  // A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
  comment?: string;

  // The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
  delegationSetId?: string;
}
export class Zone extends DS_Resource {
  // The Amazon Resource Name (ARN) of the Hosted Zone.
  public arn?: string;

  // The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.
  public delegationSetId?: string;

  // The Route 53 name server that created the SOA record.
  public primaryNameServer?: string;

  // A mapping of tags to assign to the zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegation_set_id` argument in this resource and any `aws.route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.
  public vpcs?: Array<route53_ZoneVpc>;

  // The Hosted Zone ID. This can be referenced by zone records.
  public zoneId?: string;

  // A comment for the hosted zone. Defaults to 'Managed by Pulumi'.
  public comment?: string;

  // Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.
  public forceDestroy?: boolean;

  // This is the name of the hosted zone.
  public name?: string;

  /*
A list of name servers in associated (or default) delegation set.
Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
*/
  public nameServers?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'Whether to destroy all records (possibly managed outside of this provider) in the zone when destroying the zone.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'This is the name of the hosted zone.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A mapping of tags to assign to the zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'vpcs',
        'Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegation_set_id` argument in this resource and any `aws.route53.ZoneAssociation` resource specifying the same zone ID. Detailed below.',
        () => route53_ZoneVpc_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        "A comment for the hosted zone. Defaults to 'Managed by Pulumi'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'delegationSetId',
        'The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
