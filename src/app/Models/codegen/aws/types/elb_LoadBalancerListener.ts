import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elb_LoadBalancerListener {
  /*
The protocol to use to the instance. Valid
values are `HTTP`, `HTTPS`, `TCP`, or `SSL`
*/
  instanceProtocol?: string;

  // The port to listen on for the load balancer
  lbPort?: number;

  /*
The protocol to listen on. Valid values are `HTTP`,
`HTTPS`, `TCP`, or `SSL`
*/
  lbProtocol?: string;

  /*
The ARN of an SSL certificate you have
uploaded to AWS IAM. --Note ECDSA-specific restrictions below.  Only valid when `lb_protocol` is either HTTPS or SSL--
*/
  sslCertificateId?: string;

  // The port on the instance to route to
  instancePort?: number;
}

export function elb_LoadBalancerListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceProtocol",
      "The protocol to use to the instance. Valid\nvalues are `HTTP`, `HTTPS`, `TCP`, or `SSL`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "lbPort",
      "The port to listen on for the load balancer",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lbProtocol",
      "The protocol to listen on. Valid values are `HTTP`,\n`HTTPS`, `TCP`, or `SSL`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCertificateId",
      "The ARN of an SSL certificate you have\nuploaded to AWS IAM. **Note ECDSA-specific restrictions below.  Only valid when `lb_protocol` is either HTTPS or SSL**",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instancePort",
      "The port on the instance to route to",
      () => [],
      true,
      false,
    ),
  ];
}
