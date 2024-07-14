import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bedrockmodel_InvocationLoggingConfigurationLoggingConfig,
  bedrockmodel_InvocationLoggingConfigurationLoggingConfig_GetTypes,
} from "../types/bedrockmodel_InvocationLoggingConfigurationLoggingConfig";

export interface InvocationLoggingConfigurationArgs {
  // The logging configuration values to set.
  loggingConfig?: bedrockmodel_InvocationLoggingConfigurationLoggingConfig;
}
export class InvocationLoggingConfiguration extends Resource {
  // The logging configuration values to set.
  public loggingConfig?: bedrockmodel_InvocationLoggingConfigurationLoggingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "The logging configuration values to set.",
        bedrockmodel_InvocationLoggingConfigurationLoggingConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
