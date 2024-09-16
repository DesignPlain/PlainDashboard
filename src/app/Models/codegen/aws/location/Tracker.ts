import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TrackerArgs {
  // The optional description for the tracker resource.
  description?: string;

  // A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.
  kmsKeyId?: string;

  // The position filtering method of the tracker resource. Valid values: `TimeBased`, `DistanceBased`, `AccuracyBased`. Default: `TimeBased`.
  positionFiltering?: string;

  // Key-value tags for the tracker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The name of the tracker resource.

The following arguments are optional:
*/
  trackerName?: string;
}
export class Tracker extends DS_Resource {
  // The timestamp for when the tracker resource was created in ISO 8601 format.
  public createTime?: string;

  // A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.
  public kmsKeyId?: string;

  /*
The name of the tracker resource.

The following arguments are optional:
*/
  public trackerName?: string;

  // The timestamp for when the tracker resource was last updated in ISO 8601 format.
  public updateTime?: string;

  // The optional description for the tracker resource.
  public description?: string;

  // The position filtering method of the tracker resource. Valid values: `TimeBased`, `DistanceBased`, `AccuracyBased`. Default: `TimeBased`.
  public positionFiltering?: string;

  // Key-value tags for the tracker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all AWS.
  public trackerArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'positionFiltering',
        'The position filtering method of the tracker resource. Valid values: `TimeBased`, `DistanceBased`, `AccuracyBased`. Default: `TimeBased`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the tracker. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'trackerName',
        'The name of the tracker resource.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The optional description for the tracker resource.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
