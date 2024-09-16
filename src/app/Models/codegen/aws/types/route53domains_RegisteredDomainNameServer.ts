import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53domains_RegisteredDomainNameServer {
  // Glue IP addresses of a name server. The list can contain only one IPv4 and one IPv6 address.
  glueIps?: Array<string>;

  // The fully qualified host name of the name server.
  name?: string;
}

export function route53domains_RegisteredDomainNameServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'glueIps',
      'Glue IP addresses of a name server. The list can contain only one IPv4 and one IPv6 address.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The fully qualified host name of the name server.',
      () => [],
      true,
      false,
    ),
  ];
}
