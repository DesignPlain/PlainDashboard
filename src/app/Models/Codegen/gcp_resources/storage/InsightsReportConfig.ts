import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  storage_InsightsReportConfigCsvOptions,
  storage_InsightsReportConfigCsvOptions_GetTypes,
} from "../types/storage_InsightsReportConfigCsvOptions";
import {
  storage_InsightsReportConfigFrequencyOptions,
  storage_InsightsReportConfigFrequencyOptions_GetTypes,
} from "../types/storage_InsightsReportConfigFrequencyOptions";
import {
  storage_InsightsReportConfigObjectMetadataReportOptions,
  storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes,
} from "../types/storage_InsightsReportConfigObjectMetadataReportOptions";

export interface InsightsReportConfigArgs {
  /*
Options for configuring the format of the inventory report CSV file.
Structure is documented below.
*/
  csvOptions?: storage_InsightsReportConfigCsvOptions;

  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  displayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  frequencyOptions?: storage_InsightsReportConfigFrequencyOptions;

  /*
The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
must be in the same location.
*/
  location?: string;

  /*
Options for including metadata in an inventory report.
Structure is documented below.
*/
  objectMetadataReportOptions?: storage_InsightsReportConfigObjectMetadataReportOptions;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class InsightsReportConfig extends Resource {
  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  public displayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  public frequencyOptions?: storage_InsightsReportConfigFrequencyOptions;

  /*
The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
must be in the same location.
*/
  public location?: string;

  // The UUID of the inventory report configuration.
  public name?: string;

  /*
Options for including metadata in an inventory report.
Structure is documented below.
*/
  public objectMetadataReportOptions?: storage_InsightsReportConfigObjectMetadataReportOptions;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Options for configuring the format of the inventory report CSV file.
Structure is documented below.
*/
  public csvOptions?: storage_InsightsReportConfigCsvOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "csvOptions",
        "Options for configuring the format of the inventory report CSV file.\nStructure is documented below.",
        storage_InsightsReportConfigCsvOptions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "frequencyOptions",
        "Options for configuring how inventory reports are generated.\nStructure is documented below.",
        storage_InsightsReportConfigFrequencyOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the ReportConfig. The source and destination buckets specified in the ReportConfig\nmust be in the same location.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "objectMetadataReportOptions",
        "Options for including metadata in an inventory report.\nStructure is documented below.",
        storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
