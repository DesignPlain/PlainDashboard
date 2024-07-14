import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_FilterFindingCriteria,
  guardduty_FilterFindingCriteria_GetTypes,
} from "../types/guardduty_FilterFindingCriteria";

export interface FilterArgs {
  // Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.
  action?: string;

  // Description of the filter.
  description?: string;

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
}
export class Filter extends Resource {
  // ID of a GuardDuty detector, attached to your account.
  public detectorId?: string;

  // Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
  public rank?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the GuardDuty filter.
  public arn?: string;

  // Description of the filter.
  public description?: string;

  // Represents the criteria to be used in the filter for querying findings. Contains one or more `criterion` blocks, documented below.
  public findingCriteria?: guardduty_FilterFindingCriteria;

  // The name of your filter.
  public name?: string;

  // The tags that you want to add to the Filter resource. A tag consists of a key and a value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.
  public action?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "The tags that you want to add to the Filter resource. A tag consists of a key and a value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the filter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "ID of a GuardDuty detector, attached to your account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "findingCriteria",
        "Represents the criteria to be used in the filter for querying findings. Contains one or more `criterion` blocks, documented below.",
        guardduty_FilterFindingCriteria_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of your filter.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "rank",
        "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.",
        [],
        true,
        false,
      ),
    ];
  }
}
