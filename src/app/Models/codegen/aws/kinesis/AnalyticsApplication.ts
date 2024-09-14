import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_AnalyticsApplicationInputs,
  kinesis_AnalyticsApplicationInputs_GetTypes,
} from "../types/kinesis_AnalyticsApplicationInputs";
import {
  kinesis_AnalyticsApplicationReferenceDataSources,
  kinesis_AnalyticsApplicationReferenceDataSources_GetTypes,
} from "../types/kinesis_AnalyticsApplicationReferenceDataSources";
import {
  kinesis_AnalyticsApplicationCloudwatchLoggingOptions,
  kinesis_AnalyticsApplicationCloudwatchLoggingOptions_GetTypes,
} from "../types/kinesis_AnalyticsApplicationCloudwatchLoggingOptions";
import {
  kinesis_AnalyticsApplicationOutput,
  kinesis_AnalyticsApplicationOutput_GetTypes,
} from "../types/kinesis_AnalyticsApplicationOutput";

export interface AnalyticsApplicationArgs {
  // Description of the application.
  description?: string;

  // Input configuration of the application. See Inputs below for more details.
  inputs?: kinesis_AnalyticsApplicationInputs;

  /*
An S3 Reference Data Source for the application.
See Reference Data Sources below for more details.
*/
  referenceDataSources?: kinesis_AnalyticsApplicationReferenceDataSources;

  /*
Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.
To modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.
*/
  startApplication?: boolean;

  /*
The CloudWatch log stream options to monitor application errors.
See CloudWatch Logging Options below for more details.
*/
  cloudwatchLoggingOptions?: kinesis_AnalyticsApplicationCloudwatchLoggingOptions;

  // SQL Code to transform input data, and generate output.
  code?: string;

  // Name of the Kinesis Analytics Application.
  name?: string;

  // Output destination configuration of the application. See Outputs below for more details.
  outputs?: Array<kinesis_AnalyticsApplicationOutput>;

  // Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AnalyticsApplication extends DS_Resource {
  /*
The CloudWatch log stream options to monitor application errors.
See CloudWatch Logging Options below for more details.
*/
  public cloudwatchLoggingOptions?: kinesis_AnalyticsApplicationCloudwatchLoggingOptions;

  // Description of the application.
  public description?: string;

  /*
Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.
To modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.
*/
  public startApplication?: boolean;

  // The Status of the application.
  public status?: string;

  // Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Kinesis Analytics Appliation.
  public arn?: string;

  // SQL Code to transform input data, and generate output.
  public code?: string;

  // The Timestamp when the application version was created.
  public createTimestamp?: string;

  /*
An S3 Reference Data Source for the application.
See Reference Data Sources below for more details.
*/
  public referenceDataSources?: kinesis_AnalyticsApplicationReferenceDataSources;

  // The Timestamp when the application was last updated.
  public lastUpdateTimestamp?: string;

  // Name of the Kinesis Analytics Application.
  public name?: string;

  // Output destination configuration of the application. See Outputs below for more details.
  public outputs?: Array<kinesis_AnalyticsApplicationOutput>;

  // The Version of the application.
  public version?: number;

  // Input configuration of the application. See Inputs below for more details.
  public inputs?: kinesis_AnalyticsApplicationInputs;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "referenceDataSources",
        "An S3 Reference Data Source for the application.\nSee Reference Data Sources below for more details.",
        () => kinesis_AnalyticsApplicationReferenceDataSources_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "startApplication",
        "Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.\nTo modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudwatchLoggingOptions",
        "The CloudWatch log stream options to monitor application errors.\nSee CloudWatch Logging Options below for more details.",
        () => kinesis_AnalyticsApplicationCloudwatchLoggingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "code",
        "SQL Code to transform input data, and generate output.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "outputs",
        "Output destination configuration of the application. See Outputs below for more details.",
        () => kinesis_AnalyticsApplicationOutput_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the application.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputs",
        "Input configuration of the application. See Inputs below for more details.",
        () => kinesis_AnalyticsApplicationInputs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Kinesis Analytics Application.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
