import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ListenerCertificateArgs {
  // The ARN of the certificate to attach to the listener.
  certificateArn?: string;

  // The ARN of the listener to which to attach the certificate.
  listenerArn?: string;
}
export class ListenerCertificate extends Resource {
  // The ARN of the certificate to attach to the listener.
  public certificateArn?: string;

  // The ARN of the listener to which to attach the certificate.
  public listenerArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "The ARN of the certificate to attach to the listener.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "listenerArn",
        "The ARN of the listener to which to attach the certificate.",
        [],
        true,
        true,
      ),
    ];
  }
}
