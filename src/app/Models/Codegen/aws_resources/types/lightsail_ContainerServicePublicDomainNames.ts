import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lightsail_ContainerServicePublicDomainNamesCertificate,
  lightsail_ContainerServicePublicDomainNamesCertificate_GetTypes,
} from "./lightsail_ContainerServicePublicDomainNamesCertificate";

export interface lightsail_ContainerServicePublicDomainNames {
  //
  certificates?: Array<lightsail_ContainerServicePublicDomainNamesCertificate>;
}

export function lightsail_ContainerServicePublicDomainNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      lightsail_ContainerServicePublicDomainNamesCertificate_GetTypes(),
      true,
      false,
    ),
  ];
}
