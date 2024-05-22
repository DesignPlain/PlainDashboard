import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  healthcare_DicomStoreStreamConfigBigqueryDestination,
  healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes,
} from "./healthcare_DicomStoreStreamConfigBigqueryDestination";

export interface healthcare_DicomStoreStreamConfig {
  /*
BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
Structure is documented below.
*/
  bigqueryDestination?: healthcare_DicomStoreStreamConfigBigqueryDestination;
}

export function healthcare_DicomStoreStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bigqueryDestination",
      "BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.\nStructure is documented below.",
      healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
