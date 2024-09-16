import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface amplify_DomainAssociationSubDomain {
  // Prefix setting for the subdomain.
  prefix?: string;

  // Verified status of the subdomain.
  verified?: boolean;

  // Branch name setting for the subdomain.
  branchName?: string;

  // DNS record for the subdomain in a space-prefixed and space-delimited format (` CNAME <target>`).
  dnsRecord?: string;
}

export function amplify_DomainAssociationSubDomain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Prefix setting for the subdomain.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'verified',
      'Verified status of the subdomain.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'branchName',
      'Branch name setting for the subdomain.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dnsRecord',
      'DNS record for the subdomain in a space-prefixed and space-delimited format (` CNAME <target>`).',
      () => [],
      false,
      false,
    ),
  ];
}
