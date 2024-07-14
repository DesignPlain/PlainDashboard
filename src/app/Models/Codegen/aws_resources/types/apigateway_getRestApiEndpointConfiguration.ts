import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigateway_getRestApiEndpointConfiguration {
  //
  types?: Array<string>;

  //
  vpcEndpointIds?: Array<string>;
}

export function apigateway_getRestApiEndpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "types",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcEndpointIds",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
