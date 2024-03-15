export interface MetastoreFederationBackendMetastore {
  /*
The type of the backend metastore.
Possible values are: `METASTORE_TYPE_UNSPECIFIED`, `DATAPROC_METASTORE`, `BIGQUERY`.

- - -
*/
  MetastoreType?: string;

  // The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}
  Name?: string;

  // The identifier for this object. Format specified above.
  Rank?: string;
}
