import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_InsightsReportConfigFrequencyOptions,
  Storage_InsightsReportConfigFrequencyOptions_GetTypes,
} from "../types/Storage_InsightsReportConfigFrequencyOptions";
import {
  Storage_InsightsReportConfigObjectMetadataReportOptions,
  Storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes,
} from "../types/Storage_InsightsReportConfigObjectMetadataReportOptions";
import {
  Storage_InsightsReportConfigCsvOptions,
  Storage_InsightsReportConfigCsvOptions_GetTypes,
} from "../types/Storage_InsightsReportConfigCsvOptions";

export interface InsightsReportConfigArgs {
  /*
Options for configuring the format of the inventory report CSV file.
Structure is documented below.
*/
  CsvOptions?: Storage_InsightsReportConfigCsvOptions;

  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  DisplayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  FrequencyOptions?: Storage_InsightsReportConfigFrequencyOptions;

  /*
The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
must be in the same location.
*/
  Location?: string;

  /*
Options for including metadata in an inventory report.
Structure is documented below.
*/
  ObjectMetadataReportOptions?: Storage_InsightsReportConfigObjectMetadataReportOptions;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class InsightsReportConfig extends Resource {
  /*
Options for configuring the format of the inventory report CSV file.
Structure is documented below.
*/
  public CsvOptions?: Storage_InsightsReportConfigCsvOptions;

  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  public DisplayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  public FrequencyOptions?: Storage_InsightsReportConfigFrequencyOptions;

  /*
The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
must be in the same location.
*/
  public Location?: string;

  // The UUID of the inventory report configuration.
  public Name?: string;

  /*
Options for including metadata in an inventory report.
Structure is documented below.
*/
  public ObjectMetadataReportOptions?: Storage_InsightsReportConfigObjectMetadataReportOptions;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "FrequencyOptions",
        "Options for configuring how inventory reports are generated.\nStructure is documented below.",
        Storage_InsightsReportConfigFrequencyOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the ReportConfig. The source and destination buckets specified in the ReportConfig\nmust be in the same location.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ObjectMetadataReportOptions",
        "Options for including metadata in an inventory report.\nStructure is documented below.",
        Storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CsvOptions",
        "Options for configuring the format of the inventory report CSV file.\nStructure is documented below.",
        Storage_InsightsReportConfigCsvOptions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.",
        [],
        false,
        false,
      ),
    ];
  }
}
