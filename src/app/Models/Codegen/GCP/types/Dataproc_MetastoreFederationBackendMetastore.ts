import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_MetastoreFederationBackendMetastore {
  // The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}
  name?: string;

  // The identifier for this object. Format specified above.
  rank?: string;

  /*
The type of the backend metastore.
Possible values are: `METASTORE_TYPE_UNSPECIFIED`, `DATAPROC_METASTORE`, `BIGQUERY`.

- - -
*/
  metastoreType?: string;
}

export function dataproc_MetastoreFederationBackendMetastore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rank",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metastoreType",
      "The type of the backend metastore.\nPossible values are: `METASTORE_TYPE_UNSPECIFIED`, `DATAPROC_METASTORE`, `BIGQUERY`.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
