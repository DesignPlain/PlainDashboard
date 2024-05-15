import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanData,
  Dataplex_DatascanData_GetTypes,
} from "../types/Dataplex_DatascanData";
import {
  Dataplex_DatascanDataQualitySpec,
  Dataplex_DatascanDataQualitySpec_GetTypes,
} from "../types/Dataplex_DatascanDataQualitySpec";
import {
  Dataplex_DatascanExecutionStatus,
  Dataplex_DatascanExecutionStatus_GetTypes,
} from "../types/Dataplex_DatascanExecutionStatus";
import {
  Dataplex_DatascanDataProfileSpec,
  Dataplex_DatascanDataProfileSpec_GetTypes,
} from "../types/Dataplex_DatascanDataProfileSpec";
import {
  Dataplex_DatascanExecutionSpec,
  Dataplex_DatascanExecutionSpec_GetTypes,
} from "../types/Dataplex_DatascanExecutionSpec";

export interface DatascanArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
DataProfileScan related setting.
Structure is documented below.
*/
  DataProfileSpec?: Dataplex_DatascanDataProfileSpec;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  DataScanId?: string;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // User friendly display name.
  DisplayName?: string;

  /*
DataScan execution settings.
Structure is documented below.
*/
  ExecutionSpec?: Dataplex_DatascanExecutionSpec;

  // The location where the data scan should reside.
  Location?: string;

  /*
The data source for DataScan.
Structure is documented below.
*/
  Data?: Dataplex_DatascanData;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  DataQualitySpec?: Dataplex_DatascanDataQualitySpec;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  Description?: string;
}
export class Datascan extends Resource {
  // User friendly display name.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The data source for DataScan.
Structure is documented below.
*/
  public Data?: Dataplex_DatascanData;

  /*
DataProfileScan related setting.
Structure is documented below.
*/
  public DataProfileSpec?: Dataplex_DatascanDataProfileSpec;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  public DataScanId?: string;

  /*
Status of the data scan execution.
Structure is documented below.
*/
  public ExecutionStatuses?: Array<Dataplex_DatascanExecutionStatus>;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.
  public Uid?: string;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  public DataQualitySpec?: Dataplex_DatascanDataQualitySpec;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location where the data scan should reside.
  public Location?: string;

  /*
DataScan execution settings.
Structure is documented below.
*/
  public ExecutionSpec?: Dataplex_DatascanExecutionSpec;

  // Current state of the DataScan.
  public State?: string;

  // The type of DataScan.
  public Type?: string;

  // The time when the scan was last updated.
  public UpdateTime?: string;

  // The time when the scan was created.
  public CreateTime?: string;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DataScanId",
        "DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the data scan should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the rule.\nThe maximum length is 1,024 characters.",
        [],
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
        "DataProfileSpec",
        "DataProfileScan related setting.\nStructure is documented below.",
        Dataplex_DatascanDataProfileSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels for the scan. A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ExecutionSpec",
        "DataScan execution settings.\nStructure is documented below.",
        Dataplex_DatascanExecutionSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Data",
        "The data source for DataScan.\nStructure is documented below.",
        Dataplex_DatascanData_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DataQualitySpec",
        "DataQualityScan related setting.\nStructure is documented below.",
        Dataplex_DatascanDataQualitySpec_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
