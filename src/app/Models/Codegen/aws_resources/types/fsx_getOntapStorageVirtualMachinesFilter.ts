import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_getOntapStorageVirtualMachinesFilter {
  // Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/fsx/latest/APIReference/API_StorageVirtualMachineFilter.html).
  name?: string;

  // Set of values that are accepted for the given field. An SVM will be selected if any one of the given values matches.
  values?: Array<string>;
}

export function fsx_getOntapStorageVirtualMachinesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field. An SVM will be selected if any one of the given values matches.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/fsx/latest/APIReference/API_StorageVirtualMachineFilter.html).",
      [],
      true,
      false,
    ),
  ];
}
