import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DefaultAutoScalingConfigurationVersionArgs {
  // The ARN of the App Runner auto scaling configuration that you want to set as the default.
  autoScalingConfigurationArn?: string;
}
export class DefaultAutoScalingConfigurationVersion extends Resource {
  // The ARN of the App Runner auto scaling configuration that you want to set as the default.
  public autoScalingConfigurationArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "autoScalingConfigurationArn",
        "The ARN of the App Runner auto scaling configuration that you want to set as the default.",
        [],
        true,
        false,
      ),
    ];
  }
}
