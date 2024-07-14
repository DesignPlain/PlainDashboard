import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LbCertificateAttachmentArgs {
  // The name of your SSL/TLS certificate.
  certificateName?: string;

  // The name of the load balancer to which you want to associate the SSL/TLS certificate.
  lbName?: string;
}
export class LbCertificateAttachment extends Resource {
  // The name of your SSL/TLS certificate.
  public certificateName?: string;

  // The name of the load balancer to which you want to associate the SSL/TLS certificate.
  public lbName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateName",
        "The name of your SSL/TLS certificate.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lbName",
        "The name of the load balancer to which you want to associate the SSL/TLS certificate.",
        [],
        true,
        true,
      ),
    ];
  }
}
