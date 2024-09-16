import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_ManagedPrefixListEntry,
  ec2_ManagedPrefixListEntry_GetTypes,
} from '../types/ec2_ManagedPrefixListEntry';

export interface ManagedPrefixListArgs {
  // Name of this resource. The name must not start with `com.amazonaws`.
  name?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Address family (`IPv4` or `IPv6`) of this prefix list.
  addressFamily?: string;

  // Configuration block for prefix list entry. Detailed below. Different entries may have overlapping CIDR blocks, but a particular CIDR should not be duplicated.
  entries?: Array<ec2_ManagedPrefixListEntry>;

  // Maximum number of entries that this prefix list can contain.
  maxEntries?: number;
}
export class ManagedPrefixList extends DS_Resource {
  // Maximum number of entries that this prefix list can contain.
  public maxEntries?: number;

  // Name of this resource. The name must not start with `com.amazonaws`.
  public name?: string;

  // ID of the AWS account that owns this prefix list.
  public ownerId?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Latest version of this prefix list.
  public version?: number;

  // Address family (`IPv4` or `IPv6`) of this prefix list.
  public addressFamily?: string;

  // Configuration block for prefix list entry. Detailed below. Different entries may have overlapping CIDR blocks, but a particular CIDR should not be duplicated.
  public entries?: Array<ec2_ManagedPrefixListEntry>;

  // ARN of the prefix list.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of this resource. The name must not start with `com.amazonaws`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'addressFamily',
        'Address family (`IPv4` or `IPv6`) of this prefix list.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'entries',
        'Configuration block for prefix list entry. Detailed below. Different entries may have overlapping CIDR blocks, but a particular CIDR should not be duplicated.',
        () => ec2_ManagedPrefixListEntry_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxEntries',
        'Maximum number of entries that this prefix list can contain.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
