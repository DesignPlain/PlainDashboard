import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface biglake_TableHiveOptionsStorageDescriptor {
  // The fully qualified Java class name of the output format.
  outputFormat?: string;

  // The fully qualified Java class name of the input format.
  inputFormat?: string;

  // Cloud Storage folder URI where the table data is stored, starting with "gs://".
  locationUri?: string;
}

export function biglake_TableHiveOptionsStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outputFormat",
      "The fully qualified Java class name of the output format.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputFormat",
      "The fully qualified Java class name of the input format.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locationUri",
      'Cloud Storage folder URI where the table data is stored, starting with "gs://".',
      () => [],
      false,
      false,
    ),
  ];
}
