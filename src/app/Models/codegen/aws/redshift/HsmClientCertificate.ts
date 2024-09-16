import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface HsmClientCertificateArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The identifier of the HSM client certificate.
  hsmClientCertificateIdentifier?: string;
}
export class HsmClientCertificate extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the Hsm Client Certificate.
  public arn?: string;

  // The identifier of the HSM client certificate.
  public hsmClientCertificateIdentifier?: string;

  // The public key that the Amazon Redshift cluster will use to connect to the HSM. You must register the public key in the HSM.
  public hsmClientCertificatePublicKey?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'hsmClientCertificateIdentifier',
        'The identifier of the HSM client certificate.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
