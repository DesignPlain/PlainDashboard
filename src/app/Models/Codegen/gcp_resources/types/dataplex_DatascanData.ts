import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataplex_DatascanData {
  // The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.
  entity?: string;

  /*
The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.
*/
  resource?: string;
}

export function dataplex_DatascanData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "entity",
      "The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "resource",
      'The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:\n(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.',
      [],
      false,
      true,
    ),
  ];
}
