import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_getDatasetExternalDatasetReference {
  /*
The connection id that is used to access the externalSource.
Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}
*/
  Connection?: string;

  // External source that backs this dataset.
  ExternalSource?: string;
}

export function Bigquery_getDatasetExternalDatasetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Connection",
      "The connection id that is used to access the externalSource.\nFormat: projects/{projectId}/locations/{locationId}/connections/{connectionId}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExternalSource",
      "External source that backs this dataset.",
      [],
      true,
      false,
    ),
  ];
}
