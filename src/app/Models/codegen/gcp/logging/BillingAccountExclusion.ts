import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BillingAccountExclusionArgs {
  // The billing account to create the exclusion for.
  billingAccount?: string;

  // A human-readable description.
  description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  disabled?: boolean;

  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  filter?: string;

  // The name of the logging exclusion.
  name?: string;
}
export class BillingAccountExclusion extends DS_Resource {
  // The billing account to create the exclusion for.
  public billingAccount?: string;

  // A human-readable description.
  public description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  public disabled?: boolean;

  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  public filter?: string;

  // The name of the logging exclusion.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'billingAccount',
        'The billing account to create the exclusion for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A human-readable description.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disabled',
        'Whether this exclusion rule should be disabled or not. This defaults to\nfalse.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'filter',
        'The filter to apply when excluding logs. Only log entries that match the filter are excluded.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to\nwrite a filter.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the logging exclusion.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
