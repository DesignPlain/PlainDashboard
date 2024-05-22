import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_LakeMetastore,
  dataplex_LakeMetastore_GetTypes,
} from "../types/dataplex_LakeMetastore";
import {
  dataplex_LakeMetastoreStatus,
  dataplex_LakeMetastoreStatus_GetTypes,
} from "../types/dataplex_LakeMetastoreStatus";
import {
  dataplex_LakeAssetStatus,
  dataplex_LakeAssetStatus_GetTypes,
} from "../types/dataplex_LakeAssetStatus";

export interface LakeArgs {
  // Optional. Settings to manage lake and Dataproc Metastore service instance association.
  metastore?: dataplex_LakeMetastore;

  /*
The name of the lake.



- - -
*/
  name?: string;

  // The project for the resource
  project?: string;

  // Optional. Description of the lake.
  description?: string;

  // Optional. User friendly display name.
  displayName?: string;

  /*
Optional. User-defined labels for the lake.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;
}
export class Lake extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The project for the resource
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public state?: string;

  // Output only. The time when the lake was created.
  public createTime?: string;

  /*
Optional. User-defined labels for the lake.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Output only. Metastore status of the lake.
  public metastoreStatuses?: Array<dataplex_LakeMetastoreStatus>;

  // Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.
  public serviceAccount?: string;

  // Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.
  public uid?: string;

  // Output only. The time when the lake was last updated.
  public updateTime?: string;

  // Optional. Description of the lake.
  public description?: string;

  // Optional. User friendly display name.
  public displayName?: string;

  // Output only. Aggregated status of the underlying assets of the lake.
  public assetStatuses?: Array<dataplex_LakeAssetStatus>;

  // The location for the resource
  public location?: string;

  // Optional. Settings to manage lake and Dataproc Metastore service instance association.
  public metastore?: dataplex_LakeMetastore;

  /*
The name of the lake.



- - -
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the lake.\n\n\n\n- - -",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the lake.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Optional. User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. User-defined labels for the lake.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metastore",
        "Optional. Settings to manage lake and Dataproc Metastore service instance association.",
        dataplex_LakeMetastore_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
