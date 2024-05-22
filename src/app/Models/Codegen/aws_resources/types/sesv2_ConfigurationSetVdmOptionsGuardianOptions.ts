import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetVdmOptionsGuardianOptions {
  // Specifies the status of your VDM optimized shared delivery. Valid values: `ENABLED`, `DISABLED`.
  optimizedSharedDelivery?: string;
}

export function sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "optimizedSharedDelivery",
      "Specifies the status of your VDM optimized shared delivery. Valid values: `ENABLED`, `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
