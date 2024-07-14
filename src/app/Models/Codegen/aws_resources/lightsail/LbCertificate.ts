import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lightsail_LbCertificateDomainValidationRecord,
  lightsail_LbCertificateDomainValidationRecord_GetTypes,
} from "../types/lightsail_LbCertificateDomainValidationRecord";

export interface LbCertificateArgs {
  // The domain name (e.g., example.com) for your SSL/TLS certificate.
  domainName?: string;

  // The load balancer name where you want to create the SSL/TLS certificate.
  lbName?: string;

  // The SSL/TLS certificate name.
  name?: string;

  // Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name.
  subjectAlternativeNames?: Array<string>;
}
export class LbCertificate extends Resource {
  // Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name.
  public subjectAlternativeNames?: Array<string>;

  //
  public supportCode?: string;

  // The ARN of the lightsail certificate.
  public arn?: string;

  // The timestamp when the instance was created.
  public createdAt?: string;

  // The domain name (e.g., example.com) for your SSL/TLS certificate.
  public domainName?: string;

  //
  public domainValidationRecords?: Array<lightsail_LbCertificateDomainValidationRecord>;

  // The load balancer name where you want to create the SSL/TLS certificate.
  public lbName?: string;

  // The SSL/TLS certificate name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The domain name (e.g., example.com) for your SSL/TLS certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lbName",
        "The load balancer name where you want to create the SSL/TLS certificate.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The SSL/TLS certificate name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subjectAlternativeNames",
        "Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
