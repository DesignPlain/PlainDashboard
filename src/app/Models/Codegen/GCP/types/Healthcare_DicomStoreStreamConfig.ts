import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_DicomStoreStreamConfigBigqueryDestination,
  Healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes,
} from "./Healthcare_DicomStoreStreamConfigBigqueryDestination";

export interface Healthcare_DicomStoreStreamConfig {
  /*
BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
Structure is documented below.
*/
  BigqueryDestination?: Healthcare_DicomStoreStreamConfigBigqueryDestination;
}

export function Healthcare_DicomStoreStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BigqueryDestination",
      "BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.\nStructure is documented below.",
      Healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
