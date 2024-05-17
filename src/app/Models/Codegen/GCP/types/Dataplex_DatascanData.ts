import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanData {
  /*
The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.
*/
  Resource?: string;

  // The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.
  Entity?: string;
}

export function Dataplex_DatascanData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Resource",
      'The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:\n(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Entity",
      "The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.",
      [],
      false,
      true,
    ),
  ];
}
