import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  guardduty_FilterFindingCriteria,
  guardduty_FilterFindingCriteria_GetTypes,
} from '../types/guardduty_FilterFindingCriteria';

export interface FilterArgs {
  // ID of a GuardDuty detector, attached to your account.
  detectorId?: string;

  // Represents the criteria to be used in the filter for querying findings. Contains one or more `criterion` blocks, documented below.
  findingCriteria?: guardduty_FilterFindingCriteria;

  // The name of your filter.
  name?: string;

  // Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
  rank?: number;

  // The tags that you want to add to the Filter resource. A tag consists of a key and a value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.
  action?: string;

  // Description of the filter.
  description?: string;
}
export class Filter extends DS_Resource {
  // ID of a GuardDuty detector, attached to your account.
  public detectorId?: string;

  // Represents the criteria to be used in the filter for querying findings. Contains one or more `criterion` blocks, documented below.
  public findingCriteria?: guardduty_FilterFindingCriteria;

  // The name of your filter.
  public name?: string;

  // Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
  public rank?: number;

  // The tags that you want to add to the Filter resource. A tag consists of a key and a value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.
  public action?: string;

  // The ARN of the GuardDuty filter.
  public arn?: string;

  // Description of the filter.
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the filter.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'detectorId',
        'ID of a GuardDuty detector, attached to your account.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'findingCriteria',
        'Represents the criteria to be used in the filter for querying findings. Contains one or more `criterion` blocks, documented below.',
        () => guardduty_FilterFindingCriteria_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of your filter.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'rank',
        'Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'The tags that you want to add to the Filter resource. A tag consists of a key and a value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'action',
        'Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
