import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ListenerCertificateArgs {
  // The ARN of the certificate to attach to the listener.
  certificateArn?: string;

  // The ARN of the listener to which to attach the certificate.
  listenerArn?: string;
}
export class ListenerCertificate extends DS_Resource {
  // The ARN of the certificate to attach to the listener.
  public certificateArn?: string;

  // The ARN of the listener to which to attach the certificate.
  public listenerArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'listenerArn',
        'The ARN of the listener to which to attach the certificate.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateArn',
        'The ARN of the certificate to attach to the listener.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
