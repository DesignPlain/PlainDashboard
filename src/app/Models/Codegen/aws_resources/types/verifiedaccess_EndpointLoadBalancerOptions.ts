import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface verifiedaccess_EndpointLoadBalancerOptions {
  //
  subnetIds?: Array<string>;

  //
  loadBalancerArn?: string;

  //
  port?: number;

  //
  protocol?: string;
}

export function verifiedaccess_EndpointLoadBalancerOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", [], false, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "loadBalancerArn",
      "",
      [],
      false,
      true,
    ),
  ];
}
