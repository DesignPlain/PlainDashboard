import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityhub_InsightFilters,
  securityhub_InsightFilters_GetTypes,
} from '../types/securityhub_InsightFilters';

export interface InsightArgs {
  // A configuration block including one or more (up to 10 distinct) attributes used to filter the findings included in the insight. The insight only includes findings that match criteria defined in the filters. See filters below for more details.
  filters?: securityhub_InsightFilters;

  // The attribute used to group the findings for the insight e.g., if an insight is grouped by `ResourceId`, then the insight produces a list of resource identifiers.
  groupByAttribute?: string;

  // The name of the custom insight.
  name?: string;
}
export class Insight extends DS_Resource {
  // ARN of the insight.
  public arn?: string;

  // A configuration block including one or more (up to 10 distinct) attributes used to filter the findings included in the insight. The insight only includes findings that match criteria defined in the filters. See filters below for more details.
  public filters?: securityhub_InsightFilters;

  // The attribute used to group the findings for the insight e.g., if an insight is grouped by `ResourceId`, then the insight produces a list of resource identifiers.
  public groupByAttribute?: string;

  // The name of the custom insight.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the custom insight.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'filters',
        'A configuration block including one or more (up to 10 distinct) attributes used to filter the findings included in the insight. The insight only includes findings that match criteria defined in the filters. See filters below for more details.',
        () => securityhub_InsightFilters_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'groupByAttribute',
        'The attribute used to group the findings for the insight e.g., if an insight is grouped by `ResourceId`, then the insight produces a list of resource identifiers.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
