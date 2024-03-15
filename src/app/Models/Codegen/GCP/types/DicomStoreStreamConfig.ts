import { DicomStoreStreamConfigBigqueryDestination } from "./DicomStoreStreamConfigBigqueryDestination";

export interface DicomStoreStreamConfig {
  /*
BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
Structure is documented below.
*/
  BigqueryDestination?: DicomStoreStreamConfigBigqueryDestination;
}
