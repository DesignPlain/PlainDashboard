import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apprunner_ObservabilityConfigurationTraceConfiguration,
  apprunner_ObservabilityConfigurationTraceConfiguration_GetTypes,
} from "../types/apprunner_ObservabilityConfigurationTraceConfiguration";

export interface ObservabilityConfigurationArgs {
  // Name of the observability configuration.
  observabilityConfigurationName?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing. See Trace Configuration below for more details.
  traceConfiguration?: apprunner_ObservabilityConfigurationTraceConfiguration;
}
export class ObservabilityConfiguration extends Resource {
  // ARN of this observability configuration.
  public arn?: string;

  // Whether the observability configuration has the highest `observability_configuration_revision` among all configurations that share the same `observability_configuration_name`.
  public latest?: boolean;

  // Name of the observability configuration.
  public observabilityConfigurationName?: string;

  // The revision of this observability configuration.
  public observabilityConfigurationRevision?: number;

  // Current state of the observability configuration. An INACTIVE configuration revision has been deleted and can't be used. It is permanently removed some time after deletion.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing. See Trace Configuration below for more details.
  public traceConfiguration?: apprunner_ObservabilityConfigurationTraceConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "observabilityConfigurationName",
        "Name of the observability configuration.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "traceConfiguration",
        "Configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing. See Trace Configuration below for more details.",
        apprunner_ObservabilityConfigurationTraceConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
