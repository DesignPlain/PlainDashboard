import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appintegrations_DataIntegrationScheduleConfig,
  appintegrations_DataIntegrationScheduleConfig_GetTypes,
} from "../types/appintegrations_DataIntegrationScheduleConfig";

export interface DataIntegrationArgs {
  // Tags to apply to the Data Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the description of the Data Integration.
  description?: string;

  // Specifies the KMS key Amazon Resource Name (ARN) for the Data Integration.
  kmsKey?: string;

  // Specifies the name of the Data Integration.
  name?: string;

  // A block that defines the name of the data and how often it should be pulled from the source. The Schedule Config block is documented below.
  scheduleConfig?: appintegrations_DataIntegrationScheduleConfig;

  // Specifies the URI of the data source. Create an AppFlow Connector Profile and reference the name of the profile in the URL. An example of this value for Salesforce is `Salesforce://AppFlow/example` where `example` is the name of the AppFlow Connector Profile.
  sourceUri?: string;
}
export class DataIntegration extends Resource {
  // Specifies the description of the Data Integration.
  public description?: string;

  // Specifies the KMS key Amazon Resource Name (ARN) for the Data Integration.
  public kmsKey?: string;

  // Specifies the name of the Data Integration.
  public name?: string;

  // A block that defines the name of the data and how often it should be pulled from the source. The Schedule Config block is documented below.
  public scheduleConfig?: appintegrations_DataIntegrationScheduleConfig;

  // Specifies the URI of the data source. Create an AppFlow Connector Profile and reference the name of the profile in the URL. An example of this value for Salesforce is `Salesforce://AppFlow/example` where `example` is the name of the AppFlow Connector Profile.
  public sourceUri?: string;

  // Tags to apply to the Data Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Data Integration.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "scheduleConfig",
        "A block that defines the name of the data and how often it should be pulled from the source. The Schedule Config block is documented below.",
        appintegrations_DataIntegrationScheduleConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceUri",
        "Specifies the URI of the data source. Create an AppFlow Connector Profile and reference the name of the profile in the URL. An example of this value for Salesforce is `Salesforce://AppFlow/example` where `example` is the name of the AppFlow Connector Profile.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Data Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Data Integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKey",
        "Specifies the KMS key Amazon Resource Name (ARN) for the Data Integration.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Data Integration.",
        [],
        false,
        true,
      ),
    ];
  }
}
