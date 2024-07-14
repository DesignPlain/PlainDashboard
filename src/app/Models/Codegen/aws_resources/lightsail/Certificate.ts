import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lightsail_CertificateDomainValidationOption,
  lightsail_CertificateDomainValidationOption_GetTypes,
} from "../types/lightsail_CertificateDomainValidationOption";

export interface CertificateArgs {
  // The name of the Lightsail load balancer.
  name?: string;

  // Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name.
  subjectAlternativeNames?: Array<string>;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A domain name for which the certificate should be issued.
  domainName?: string;
}
export class Certificate extends Resource {
  // The ARN of the lightsail certificate.
  public arn?: string;

  // The timestamp when the instance was created.
  public createdAt?: string;

  // A domain name for which the certificate should be issued.
  public domainName?: string;

  // Set of domain validation objects which can be used to complete certificate validation. Can have more than one element, e.g., if SANs are defined.
  public domainValidationOptions?: Array<lightsail_CertificateDomainValidationOption>;

  // The name of the Lightsail load balancer.
  public name?: string;

  // Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name.
  public subjectAlternativeNames?: Array<string>;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Lightsail load balancer.",
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
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "A domain name for which the certificate should be issued.",
        [],
        false,
        true,
      ),
    ];
  }
}
