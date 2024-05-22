import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ivschat_LoggingConfigurationDestinationConfiguration,
  ivschat_LoggingConfigurationDestinationConfiguration_GetTypes,
} from "../types/ivschat_LoggingConfigurationDestinationConfiguration";

export interface LoggingConfigurationArgs {
  // Object containing destination configuration for where chat activity will be logged. This object must contain exactly one of the following children arguments:
  destinationConfiguration?: ivschat_LoggingConfigurationDestinationConfiguration;

  // Logging Configuration name.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LoggingConfiguration extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Logging Configuration.
  public arn?: string;

  // Object containing destination configuration for where chat activity will be logged. This object must contain exactly one of the following children arguments:
  public destinationConfiguration?: ivschat_LoggingConfigurationDestinationConfiguration;

  // Logging Configuration name.
  public name?: string;

  // State of the Logging Configuration.
  public state?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "destinationConfiguration",
        "Object containing destination configuration for where chat activity will be logged. This object must contain exactly one of the following children arguments:",
        ivschat_LoggingConfigurationDestinationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Logging Configuration name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
