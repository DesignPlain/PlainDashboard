import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Biglake_TableHiveOptionsStorageDescriptor {
  // The fully qualified Java class name of the input format.
  InputFormat?: string;

  // Cloud Storage folder URI where the table data is stored, starting with "gs://".
  LocationUri?: string;

  // The fully qualified Java class name of the output format.
  OutputFormat?: string;
}

export function Biglake_TableHiveOptionsStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InputFormat",
      "The fully qualified Java class name of the input format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocationUri",
      'Cloud Storage folder URI where the table data is stored, starting with "gs://".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OutputFormat",
      "The fully qualified Java class name of the output format.",
      [],
      false,
      false,
    ),
  ];
}
