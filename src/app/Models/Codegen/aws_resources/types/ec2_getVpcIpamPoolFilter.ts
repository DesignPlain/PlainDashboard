import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcIpamPoolFilter {
  // The name of the filter. Filter names are case-sensitive.
  name?: string;

  // The filter values. Filter values are case-sensitive.
  values?: Array<string>;
}

export function ec2_getVpcIpamPoolFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The filter values. Filter values are case-sensitive.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the filter. Filter names are case-sensitive.",
      [],
      true,
      false,
    ),
  ];
}
