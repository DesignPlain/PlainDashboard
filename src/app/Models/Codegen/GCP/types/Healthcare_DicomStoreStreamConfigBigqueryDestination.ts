import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Healthcare_DicomStoreStreamConfigBigqueryDestination {
  // a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
  TableUri?: string;
}

export function Healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TableUri",
      "a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.",
      [],
      true,
      false,
    ),
  ];
}
