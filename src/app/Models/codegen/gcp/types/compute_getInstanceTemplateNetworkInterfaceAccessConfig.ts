import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getInstanceTemplateNetworkInterfaceAccessConfig {
  /*
The IP address that will be 1:1 mapped to the instance's
network ip. If not given, one will be generated.
*/
  natIp?: string;

  /*
The [networking tier][network-tier] used for configuring
this instance template. This field can take the following values: PREMIUM or
STANDARD. If this field is not specified, it is assumed to be PREMIUM.
*/
  networkTier?: string;

  // The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.
  publicPtrDomainName?: string;
}

export function compute_getInstanceTemplateNetworkInterfaceAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'networkTier',
      'The [networking tier][network-tier] used for configuring\nthis instance template. This field can take the following values: PREMIUM or\nSTANDARD. If this field is not specified, it is assumed to be PREMIUM.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicPtrDomainName',
      'The DNS domain name for the public PTR record.The DNS domain name for the public PTR record.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'natIp',
      "The IP address that will be 1:1 mapped to the instance's\nnetwork ip. If not given, one will be generated.",
      () => [],
      true,
      false,
    ),
  ];
}
