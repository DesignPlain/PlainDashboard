import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RetentionConfigurationArgs {
  // The number of days AWS Config stores historical information.
  retentionPeriodInDays?: number;
}
export class RetentionConfiguration extends DS_Resource {
  // The name of the retention configuration object. The object is always named --default--.
  public name?: string;

  // The number of days AWS Config stores historical information.
  public retentionPeriodInDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'retentionPeriodInDays',
        'The number of days AWS Config stores historical information.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
