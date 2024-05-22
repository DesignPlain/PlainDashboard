import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface biglake_TableHiveOptionsStorageDescriptor {
  // The fully qualified Java class name of the input format.
  inputFormat?: string;

  // Cloud Storage folder URI where the table data is stored, starting with "gs://".
  locationUri?: string;

  // The fully qualified Java class name of the output format.
  outputFormat?: string;
}

export function biglake_TableHiveOptionsStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputFormat",
      "The fully qualified Java class name of the input format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locationUri",
      'Cloud Storage folder URI where the table data is stored, starting with "gs://".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputFormat",
      "The fully qualified Java class name of the output format.",
      [],
      false,
      false,
    ),
  ];
}
