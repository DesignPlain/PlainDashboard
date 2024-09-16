import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiIndexMetadata,
  vertex_AiIndexMetadata_GetTypes,
} from '../types/vertex_AiIndexMetadata';
import {
  vertex_AiIndexDeployedIndex,
  vertex_AiIndexDeployedIndex_GetTypes,
} from '../types/vertex_AiIndexDeployedIndex';
import {
  vertex_AiIndexIndexStat,
  vertex_AiIndexIndexStat_GetTypes,
} from '../types/vertex_AiIndexIndexStat';

export interface AiIndexArgs {
  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
An additional information about the Index
Structure is documented below.
*/
  metadata?: vertex_AiIndexMetadata;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the index. eg us-central1
  region?: string;

  // The description of the Index.
  description?: string;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  displayName?: string;

  /*
The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
- BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
- STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
*/
  indexUpdateMethod?: string;
}
export class AiIndex extends DS_Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
- BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
- STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
*/
  public indexUpdateMethod?: string;

  /*
An additional information about the Index
Structure is documented below.
*/
  public metadata?: vertex_AiIndexMetadata;

  // Used to perform consistent read-modify-write updates.
  public etag?: string;

  // Points to a YAML file stored on Google Cloud Storage describing additional information about the Index, that is specific to it. Unset if the Index does not have any additional information.
  public metadataSchemaUri?: string;

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

  // The timestamp of when the Index was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // The timestamp of when the Index was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  /*
The pointers to DeployedIndexes created from this Index. An Index can be only deleted if all its DeployedIndexes had been undeployed first.
Structure is documented below.
*/
  public deployedIndexes?: Array<vertex_AiIndexDeployedIndex>;

  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The resource name of the Index.
  public name?: string;

  // The description of the Index.
  public description?: string;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  public displayName?: string;

  /*
Stats of the index resource.
Structure is documented below.
*/
  public indexStats?: Array<vertex_AiIndexIndexStat>;

  // The region of the index. eg us-central1
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'metadata',
        'An additional information about the Index\nStructure is documented below.',
        () => vertex_AiIndexMetadata_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The region of the index. eg us-central1',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the Index.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'indexUpdateMethod',
        'The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.\n* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.\n* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'The labels with user-defined metadata to organize your Indexes.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
