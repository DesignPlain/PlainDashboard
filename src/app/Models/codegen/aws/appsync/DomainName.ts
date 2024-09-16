import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DomainNameArgs {
  // ARN of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. The certifiacte must reside in us-east-1.
  certificateArn?: string;

  // A description of the Domain Name.
  description?: string;

  // Domain name.
  domainName?: string;
}
export class DomainName extends DS_Resource {
  // Domain name that AppSync provides.
  public appsyncDomainName?: string;

  // ARN of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. The certifiacte must reside in us-east-1.
  public certificateArn?: string;

  // A description of the Domain Name.
  public description?: string;

  // Domain name.
  public domainName?: string;

  // ID of your Amazon Route 53 hosted zone.
  public hostedZoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Domain name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateArn',
        'ARN of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. The certifiacte must reside in us-east-1.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the Domain Name.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
