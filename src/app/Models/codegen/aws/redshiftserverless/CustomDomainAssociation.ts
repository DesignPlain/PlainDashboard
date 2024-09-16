import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface CustomDomainAssociationArgs {
  // ARN of the certificate for the custom domain association.
  customDomainCertificateArn?: string;

  // Custom domain to associate with the workgroup.
  customDomainName?: string;

  // Name of the workgroup.
  workgroupName?: string;
}
export class CustomDomainAssociation extends DS_Resource {
  // ARN of the certificate for the custom domain association.
  public customDomainCertificateArn?: string;

  // Expiration time for the certificate.
  public customDomainCertificateExpiryTime?: string;

  // Custom domain to associate with the workgroup.
  public customDomainName?: string;

  // Name of the workgroup.
  public workgroupName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'customDomainCertificateArn',
        'ARN of the certificate for the custom domain association.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customDomainName',
        'Custom domain to associate with the workgroup.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'workgroupName',
        'Name of the workgroup.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
