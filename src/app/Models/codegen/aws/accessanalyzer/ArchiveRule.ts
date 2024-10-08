import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  accessanalyzer_ArchiveRuleFilter,
  accessanalyzer_ArchiveRuleFilter_GetTypes,
} from '../types/accessanalyzer_ArchiveRuleFilter';

export interface ArchiveRuleArgs {
  // Rule name.
  ruleName?: string;

  // Analyzer name.
  analyzerName?: string;

  // Filter criteria for the archive rule. See Filter for more details.
  filters?: Array<accessanalyzer_ArchiveRuleFilter>;
}
export class ArchiveRule extends DS_Resource {
  // Analyzer name.
  public analyzerName?: string;

  // Filter criteria for the archive rule. See Filter for more details.
  public filters?: Array<accessanalyzer_ArchiveRuleFilter>;

  // Rule name.
  public ruleName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ruleName',
        'Rule name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'analyzerName',
        'Analyzer name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'filters',
        'Filter criteria for the archive rule. See Filter for more details.',
        () => accessanalyzer_ArchiveRuleFilter_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
