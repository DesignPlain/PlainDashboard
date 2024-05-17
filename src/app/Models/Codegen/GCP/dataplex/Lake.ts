import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_LakeAssetStatus,
  Dataplex_LakeAssetStatus_GetTypes,
} from "../types/Dataplex_LakeAssetStatus";
import {
  Dataplex_LakeMetastore,
  Dataplex_LakeMetastore_GetTypes,
} from "../types/Dataplex_LakeMetastore";
import {
  Dataplex_LakeMetastoreStatus,
  Dataplex_LakeMetastoreStatus_GetTypes,
} from "../types/Dataplex_LakeMetastoreStatus";

export interface LakeArgs {
  // The location for the resource
  Location?: string;

  // Optional. Settings to manage lake and Dataproc Metastore service instance association.
  Metastore?: Dataplex_LakeMetastore;

  /*
The name of the lake.



- - -
*/
  Name?: string;

  // The project for the resource
  Project?: string;

  // Optional. Description of the lake.
  Description?: string;

  // Optional. User friendly display name.
  DisplayName?: string;

  /*
Optional. User-defined labels for the lake.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Lake extends Resource {
  /*
Optional. User-defined labels for the lake.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. Metastore status of the lake.
  public MetastoreStatuses?: Array<Dataplex_LakeMetastoreStatus>;

  // The project for the resource
  public Project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // Optional. User friendly display name.
  public DisplayName?: string;

  // The location for the resource
  public Location?: string;

  /*
The name of the lake.



- - -
*/
  public Name?: string;

  // Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public State?: string;

  // Output only. The time when the lake was last updated.
  public UpdateTime?: string;

  // Output only. Aggregated status of the underlying assets of the lake.
  public AssetStatuses?: Array<Dataplex_LakeAssetStatus>;

  // Optional. Settings to manage lake and Dataproc Metastore service instance association.
  public Metastore?: Dataplex_LakeMetastore;

  // Output only. The time when the lake was created.
  public CreateTime?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake.
  public ServiceAccount?: string;

  // Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name.
  public Uid?: string;

  // Optional. Description of the lake.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. User-defined labels for the lake.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Metastore",
        "Optional. Settings to manage lake and Dataproc Metastore service instance association.",
        Dataplex_LakeMetastore_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the lake.\n\n\n\n- - -",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the lake.",
        [],
        false,
        false,
      ),
    ];
  }
}
