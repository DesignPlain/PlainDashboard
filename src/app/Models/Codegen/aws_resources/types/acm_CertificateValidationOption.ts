import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface acm_CertificateValidationOption {
  // Fully qualified domain name (FQDN) in the certificate.
  domainName?: string;

  // Domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the `domain_name` value or a superdomain of the `domain_name` value. For example, if you request a certificate for `"testing.example.com"`, you can specify `"example.com"` for this value.
  validationDomain?: string;
}

export function acm_CertificateValidationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "Fully qualified domain name (FQDN) in the certificate.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "validationDomain",
      'Domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the `domain_name` value or a superdomain of the `domain_name` value. For example, if you request a certificate for `"testing.example.com"`, you can specify `"example.com"` for this value.',
      [],
      true,
      true,
    ),
  ];
}
