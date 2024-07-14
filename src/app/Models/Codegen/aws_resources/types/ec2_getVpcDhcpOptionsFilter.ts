import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcDhcpOptionsFilter {
  // Set of values for filtering.
  values?: Array<string>;

  // Name of the field to filter.
  name?: string;
}

export function ec2_getVpcDhcpOptionsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values for filtering.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the field to filter.",
      [],
      true,
      false,
    ),
  ];
}
