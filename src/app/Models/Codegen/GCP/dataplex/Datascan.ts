import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DatascanExecutionStatus } from "../types/DatascanExecutionStatus";
import { DatascanDataProfileSpec } from "../types/DatascanDataProfileSpec";
import { DatascanDataQualitySpec } from "../types/DatascanDataQualitySpec";
import { DatascanExecutionSpec } from "../types/DatascanExecutionSpec";
import { DatascanData } from "../types/DatascanData";

export interface DatascanArgs {
  /*
DataProfileScan related setting.
Structure is documented below.
*/
  DataProfileSpec?: DatascanDataProfileSpec;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  DataQualitySpec?: DatascanDataQualitySpec;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  DataScanId?: string;

  /*
DataScan execution settings.
Structure is documented below.
*/
  ExecutionSpec?: DatascanExecutionSpec;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location where the data scan should reside.
  Location?: string;

  /*
The data source for DataScan.
Structure is documented below.
*/
  Data?: DatascanData;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  Description?: string;

  // User friendly display name.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Datascan extends Resource {
  /*
The data source for DataScan.
Structure is documented below.
*/
  public Data?: DatascanData;

  /*
DataProfileScan related setting.
Structure is documented below.
*/
  public DataProfileSpec?: DatascanDataProfileSpec;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  public Description?: string;

  // The type of DataScan.
  public Type?: string;

  // The time when the scan was last updated.
  public UpdateTime?: string;

  // The time when the scan was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
DataScan execution settings.
Structure is documented below.
*/
  public ExecutionSpec?: DatascanExecutionSpec;

  /*
Status of the data scan execution.
Structure is documented below.
*/
  public ExecutionStatuses?: Array<DatascanExecutionStatus>;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location where the data scan should reside.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.
  public Uid?: string;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  public DataScanId?: string;

  // User friendly display name.
  public DisplayName?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Current state of the DataScan.
  public State?: string;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  public DataQualitySpec?: DatascanDataQualitySpec;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DataProfileSpec",
        "DataProfileScan related setting.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataQualitySpec",
        "DataQualityScan related setting.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the scan. A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Data",
        "The data source for DataScan.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataScanId",
        "DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ExecutionSpec",
        "DataScan execution settings.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the data scan should reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the rule.\nThe maximum length is 1,024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User friendly display name.",
      ),
    ];
  }
}
