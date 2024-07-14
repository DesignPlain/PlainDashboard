import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RetentionConfigurationArgs {
  // The number of days AWS Config stores historical information.
  retentionPeriodInDays?: number;
}
export class RetentionConfiguration extends Resource {
  // The name of the retention configuration object. The object is always named --default--.
  public name?: string;

  // The number of days AWS Config stores historical information.
  public retentionPeriodInDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriodInDays",
        "The number of days AWS Config stores historical information.",
        [],
        true,
        false,
      ),
    ];
  }
}
