import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_AnalyticsApplicationInputs,
  kinesis_AnalyticsApplicationInputs_GetTypes,
} from "../types/kinesis_AnalyticsApplicationInputs";
import {
  kinesis_AnalyticsApplicationOutput,
  kinesis_AnalyticsApplicationOutput_GetTypes,
} from "../types/kinesis_AnalyticsApplicationOutput";
import {
  kinesis_AnalyticsApplicationCloudwatchLoggingOptions,
  kinesis_AnalyticsApplicationCloudwatchLoggingOptions_GetTypes,
} from "../types/kinesis_AnalyticsApplicationCloudwatchLoggingOptions";
import {
  kinesis_AnalyticsApplicationReferenceDataSources,
  kinesis_AnalyticsApplicationReferenceDataSources_GetTypes,
} from "../types/kinesis_AnalyticsApplicationReferenceDataSources";

export interface AnalyticsApplicationArgs {
  // Input configuration of the application. See Inputs below for more details.
  inputs?: kinesis_AnalyticsApplicationInputs;

  // Name of the Kinesis Analytics Application.
  name?: string;

  // Output destination configuration of the application. See Outputs below for more details.
  outputs?: Array<kinesis_AnalyticsApplicationOutput>;

  /*
Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.
To modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.
*/
  startApplication?: boolean;

  // Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The CloudWatch log stream options to monitor application errors.
See CloudWatch Logging Options below for more details.
*/
  cloudwatchLoggingOptions?: kinesis_AnalyticsApplicationCloudwatchLoggingOptions;

  // SQL Code to transform input data, and generate output.
  code?: string;

  // Description of the application.
  description?: string;

  /*
An S3 Reference Data Source for the application.
See Reference Data Sources below for more details.
*/
  referenceDataSources?: kinesis_AnalyticsApplicationReferenceDataSources;
}
export class AnalyticsApplication extends Resource {
  // Name of the Kinesis Analytics Application.
  public name?: string;

  // Output destination configuration of the application. See Outputs below for more details.
  public outputs?: Array<kinesis_AnalyticsApplicationOutput>;

  // The Status of the application.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Timestamp when the application was last updated.
  public lastUpdateTimestamp?: string;

  // The Timestamp when the application version was created.
  public createTimestamp?: string;

  // Description of the application.
  public description?: string;

  /*
An S3 Reference Data Source for the application.
See Reference Data Sources below for more details.
*/
  public referenceDataSources?: kinesis_AnalyticsApplicationReferenceDataSources;

  /*
Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.
To modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.
*/
  public startApplication?: boolean;

  // Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // SQL Code to transform input data, and generate output.
  public code?: string;

  /*
The CloudWatch log stream options to monitor application errors.
See CloudWatch Logging Options below for more details.
*/
  public cloudwatchLoggingOptions?: kinesis_AnalyticsApplicationCloudwatchLoggingOptions;

  // Input configuration of the application. See Inputs below for more details.
  public inputs?: kinesis_AnalyticsApplicationInputs;

  // The Version of the application.
  public version?: number;

  // The ARN of the Kinesis Analytics Appliation.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the application.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "referenceDataSources",
        "An S3 Reference Data Source for the application.\nSee Reference Data Sources below for more details.",
        kinesis_AnalyticsApplicationReferenceDataSources_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputs",
        "Input configuration of the application. See Inputs below for more details.",
        kinesis_AnalyticsApplicationInputs_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudwatchLoggingOptions",
        "The CloudWatch log stream options to monitor application errors.\nSee CloudWatch Logging Options below for more details.",
        kinesis_AnalyticsApplicationCloudwatchLoggingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "startApplication",
        "Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured.\nTo modify an application's starting position, first stop the application by setting `start_application = false`, then update `starting_position` and set `start_application = true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of tags for the Kinesis Analytics Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "code",
        "SQL Code to transform input data, and generate output.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Kinesis Analytics Application.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "outputs",
        "Output destination configuration of the application. See Outputs below for more details.",
        kinesis_AnalyticsApplicationOutput_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
