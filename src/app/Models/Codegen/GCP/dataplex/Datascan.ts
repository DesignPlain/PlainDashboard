import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_DatascanExecutionStatus,
  dataplex_DatascanExecutionStatus_GetTypes,
} from "../types/dataplex_DatascanExecutionStatus";
import {
  dataplex_DatascanData,
  dataplex_DatascanData_GetTypes,
} from "../types/dataplex_DatascanData";
import {
  dataplex_DatascanDataQualitySpec,
  dataplex_DatascanDataQualitySpec_GetTypes,
} from "../types/dataplex_DatascanDataQualitySpec";
import {
  dataplex_DatascanDataProfileSpec,
  dataplex_DatascanDataProfileSpec_GetTypes,
} from "../types/dataplex_DatascanDataProfileSpec";
import {
  dataplex_DatascanExecutionSpec,
  dataplex_DatascanExecutionSpec_GetTypes,
} from "../types/dataplex_DatascanExecutionSpec";

export interface DatascanArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The data source for DataScan.
Structure is documented below.
*/
  data?: dataplex_DatascanData;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  dataQualitySpec?: dataplex_DatascanDataQualitySpec;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  dataScanId?: string;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location where the data scan should reside.
  location?: string;

  /*
DataProfileScan related setting.
Structure is documented below.
*/
  dataProfileSpec?: dataplex_DatascanDataProfileSpec;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  description?: string;

  // User friendly display name.
  displayName?: string;

  /*
DataScan execution settings.
Structure is documented below.
*/
  executionSpec?: dataplex_DatascanExecutionSpec;
}
export class Datascan extends Resource {
  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  public description?: string;

  /*
Status of the data scan execution.
Structure is documented below.
*/
  public executionStatuses?: Array<dataplex_DatascanExecutionStatus>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The data source for DataScan.
Structure is documented below.
*/
  public data?: dataplex_DatascanData;

  /*
DataProfileScan related setting.
Structure is documented below.
*/
  public dataProfileSpec?: dataplex_DatascanDataProfileSpec;

  /*
DataQualityScan related setting.
Structure is documented below.
*/
  public dataQualitySpec?: dataplex_DatascanDataQualitySpec;

  // DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  public dataScanId?: string;

  // The time when the scan was last updated.
  public updateTime?: string;

  // Current state of the DataScan.
  public state?: string;

  // The time when the scan was created.
  public createTime?: string;

  /*
User-defined labels for the scan. A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location where the data scan should reside.
  public location?: string;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  public name?: string;

  // User friendly display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name.
  public uid?: string;

  /*
DataScan execution settings.
Structure is documented below.
*/
  public executionSpec?: dataplex_DatascanExecutionSpec;

  // The type of DataScan.
  public type?: string;

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
        "data",
        "The data source for DataScan.\nStructure is documented below.",
        dataplex_DatascanData_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataQualitySpec",
        "DataQualityScan related setting.\nStructure is documented below.",
        dataplex_DatascanDataQualitySpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataProfileSpec",
        "DataProfileScan related setting.\nStructure is documented below.",
        dataplex_DatascanDataProfileSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the rule.\nThe maximum length is 1,024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "executionSpec",
        "DataScan execution settings.\nStructure is documented below.",
        dataplex_DatascanExecutionSpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataScanId",
        "DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for the scan. A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the data scan should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User friendly display name.",
        [],
        false,
        false,
      ),
    ];
  }
}
