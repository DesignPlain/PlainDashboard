import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_AssetResourceSpec {
  // Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`
  name?: string;

  // Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. Possible values: DIRECT, MANAGED
  readAccessMode?: string;

  /*
Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET

- - -
*/
  type?: string;
}

export function dataplex_AssetResourceSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "readAccessMode",
      "Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. Possible values: DIRECT, MANAGED",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
