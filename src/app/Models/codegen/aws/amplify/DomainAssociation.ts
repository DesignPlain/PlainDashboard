import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  amplify_DomainAssociationSubDomain,
  amplify_DomainAssociationSubDomain_GetTypes,
} from '../types/amplify_DomainAssociationSubDomain';
import {
  amplify_DomainAssociationCertificateSettings,
  amplify_DomainAssociationCertificateSettings_GetTypes,
} from '../types/amplify_DomainAssociationCertificateSettings';

export interface DomainAssociationArgs {
  // Unique ID for an Amplify app.
  appId?: string;

  // The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.
  certificateSettings?: amplify_DomainAssociationCertificateSettings;

  // Domain name for the domain association.
  domainName?: string;

  // Enables the automated creation of subdomains for branches.
  enableAutoSubDomain?: boolean;

  // Setting for the subdomain. Documented below.
  subDomains?: Array<amplify_DomainAssociationSubDomain>;

  // If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.
  waitForVerification?: boolean;
}
export class DomainAssociation extends DS_Resource {
  // Setting for the subdomain. Documented below.
  public subDomains?: Array<amplify_DomainAssociationSubDomain>;

  // If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.
  public waitForVerification?: boolean;

  // Unique ID for an Amplify app.
  public appId?: string;

  // ARN for the domain association.
  public arn?: string;

  // The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.
  public certificateSettings?: amplify_DomainAssociationCertificateSettings;

  // DNS records for certificate verification in a space-delimited format (`<record> CNAME <target>`).
  public certificateVerificationDnsRecord?: string;

  // Domain name for the domain association.
  public domainName?: string;

  // Enables the automated creation of subdomains for branches.
  public enableAutoSubDomain?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'appId',
        'Unique ID for an Amplify app.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'certificateSettings',
        "The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.",
        () => amplify_DomainAssociationCertificateSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Domain name for the domain association.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableAutoSubDomain',
        'Enables the automated creation of subdomains for branches.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subDomains',
        'Setting for the subdomain. Documented below.',
        () => amplify_DomainAssociationSubDomain_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'waitForVerification',
        'If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
