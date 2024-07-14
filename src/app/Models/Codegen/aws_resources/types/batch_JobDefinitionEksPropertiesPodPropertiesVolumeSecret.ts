import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret {
  // Specifies whether the secret or the secret's keys must be defined.
  optional?: boolean;

  // The name of the secret. The name must be allowed as a DNS subdomain name.
  secretName?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "optional",
      "Specifies whether the secret or the secret's keys must be defined.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretName",
      "The name of the secret. The name must be allowed as a DNS subdomain name.",
      [],
      true,
      false,
    ),
  ];
}
