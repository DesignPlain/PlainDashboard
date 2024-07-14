import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_getConfigurationSetVdmOptionGuardianOption {
  // Specifies the status of your VDM optimized shared delivery.
  optimizedSharedDelivery?: string;
}

export function sesv2_getConfigurationSetVdmOptionGuardianOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "optimizedSharedDelivery",
      "Specifies the status of your VDM optimized shared delivery.",
      [],
      true,
      false,
    ),
  ];
}
