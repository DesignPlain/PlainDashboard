import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lightsail_ContainerServicePublicDomainNamesCertificate {
  //
  certificateName?: string;

  //
  domainNames?: Array<string>;
}

export function lightsail_ContainerServicePublicDomainNamesCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'certificateName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'domainNames',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
