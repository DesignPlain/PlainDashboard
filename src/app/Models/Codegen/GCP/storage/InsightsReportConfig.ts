import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InsightsReportConfigCsvOptions } from "../types/InsightsReportConfigCsvOptions";
import { InsightsReportConfigFrequencyOptions } from "../types/InsightsReportConfigFrequencyOptions";
import { InsightsReportConfigObjectMetadataReportOptions } from "../types/InsightsReportConfigObjectMetadataReportOptions";

export interface InsightsReportConfigArgs {
  /*
Options for configuring the format of the inventory report CSV file.
Structure is documented below.
*/
  CsvOptions?: InsightsReportConfigCsvOptions;

  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  DisplayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  FrequencyOptions?: InsightsReportConfigFrequencyOptions;

  /*
The location of the ReportConfig. The source and destination buckets specified in the ReportConfig
must be in the same location.
*/
  Location?: string;

  /*
Options for including metadata in an inventory report.
Structure is documented below.
*/
  ObjectMetadataReportOptions?: InsightsReportConfigObjectMetadataReportOptions;

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
  public CsvOptions?: InsightsReportConfigCsvOptions;

  // The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.
  public DisplayName?: string;

  /*
Options for configuring how inventory reports are generated.
Structure is documented below.
*/
  public FrequencyOptions?: InsightsReportConfigFrequencyOptions;

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
  public ObjectMetadataReportOptions?: InsightsReportConfigObjectMetadataReportOptions;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FrequencyOptions",
        "Options for configuring how inventory reports are generated.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the ReportConfig. The source and destination buckets specified in the ReportConfig\nmust be in the same location.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ObjectMetadataReportOptions",
        "Options for including metadata in an inventory report.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CsvOptions",
        "Options for configuring the format of the inventory report CSV file.\nStructure is documented below.",
      ),
    ];
  }
}
