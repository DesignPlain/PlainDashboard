import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iot_CaCertificateRegistrationConfig,
  iot_CaCertificateRegistrationConfig_GetTypes,
} from '../types/iot_CaCertificateRegistrationConfig';
import {
  iot_CaCertificateValidity,
  iot_CaCertificateValidity_GetTypes,
} from '../types/iot_CaCertificateValidity';

export interface CaCertificateArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
PEM encoded verification certificate containing the common name of a registration code. Review
[CreateVerificationCSR](https://docs.aws.amazon.com/iot/latest/developerguide/register-CA-cert.html). Reuired if `certificate_mode` is `DEFAULT`.
*/
  verificationCertificatePem?: string;

  // Boolean flag to indicate if the certificate should be active for device authentication.
  active?: boolean;

  // Boolean flag to indicate if the certificate should be active for device regisration.
  allowAutoRegistration?: boolean;

  // PEM encoded CA certificate.
  caCertificatePem?: string;

  // The certificate mode in which the CA will be registered. Valida values: `DEFAULT` and `SNI_ONLY`. Default: `DEFAULT`.
  certificateMode?: string;

  // Information about the registration configuration. See below.
  registrationConfig?: iot_CaCertificateRegistrationConfig;
}
export class CaCertificate extends DS_Resource {
  // PEM encoded CA certificate.
  public caCertificatePem?: string;

  // The certificate mode in which the CA will be registered. Valida values: `DEFAULT` and `SNI_ONLY`. Default: `DEFAULT`.
  public certificateMode?: string;

  // The customer version of the CA certificate.
  public customerVersion?: number;

  // The generation ID of the CA certificate.
  public generationId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
PEM encoded verification certificate containing the common name of a registration code. Review
[CreateVerificationCSR](https://docs.aws.amazon.com/iot/latest/developerguide/register-CA-cert.html). Reuired if `certificate_mode` is `DEFAULT`.
*/
  public verificationCertificatePem?: string;

  // The ARN of the created CA certificate.
  public arn?: string;

  // Boolean flag to indicate if the certificate should be active for device regisration.
  public allowAutoRegistration?: boolean;

  // Information about the registration configuration. See below.
  public registrationConfig?: iot_CaCertificateRegistrationConfig;

  // When the CA certificate is valid.
  public validities?: Array<iot_CaCertificateValidity>;

  // Boolean flag to indicate if the certificate should be active for device authentication.
  public active?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'caCertificatePem',
        'PEM encoded CA certificate.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateMode',
        'The certificate mode in which the CA will be registered. Valida values: `DEFAULT` and `SNI_ONLY`. Default: `DEFAULT`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'registrationConfig',
        'Information about the registration configuration. See below.',
        () => iot_CaCertificateRegistrationConfig_GetTypes(),
        false,
        false,
      ),
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
        'verificationCertificatePem',
        'PEM encoded verification certificate containing the common name of a registration code. Review\n[CreateVerificationCSR](https://docs.aws.amazon.com/iot/latest/developerguide/register-CA-cert.html). Reuired if `certificate_mode` is `DEFAULT`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'active',
        'Boolean flag to indicate if the certificate should be active for device authentication.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'allowAutoRegistration',
        'Boolean flag to indicate if the certificate should be active for device regisration.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
