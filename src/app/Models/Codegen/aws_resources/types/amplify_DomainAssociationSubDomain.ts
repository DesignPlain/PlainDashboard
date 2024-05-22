import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface amplify_DomainAssociationSubDomain {
  // Verified status of the subdomain.
  verified?: boolean;

  // Branch name setting for the subdomain.
  branchName?: string;

  // DNS record for the subdomain.
  dnsRecord?: string;

  // Prefix setting for the subdomain.
  prefix?: string;
}

export function amplify_DomainAssociationSubDomain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "verified",
      "Verified status of the subdomain.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "Branch name setting for the subdomain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsRecord",
      "DNS record for the subdomain.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix setting for the subdomain.",
      [],
      true,
      false,
    ),
  ];
}
