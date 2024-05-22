import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elb_getLoadBalancerListener {
  //
  lbPort?: number;

  //
  lbProtocol?: string;

  //
  sslCertificateId?: string;

  //
  instancePort?: number;

  //
  instanceProtocol?: string;
}

export function elb_getLoadBalancerListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "instancePort", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "instanceProtocol",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "lbPort", "", [], true, false),
    new DynamicUIProps(InputType.String, "lbProtocol", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sslCertificateId",
      "",
      [],
      true,
      false,
    ),
  ];
}
