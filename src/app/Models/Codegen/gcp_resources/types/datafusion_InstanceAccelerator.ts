import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datafusion_InstanceAccelerator {
  /*
The type of an accelator for a CDF instance.
Possible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.
*/
  acceleratorType?: string;

  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  state?: string;
}

export function datafusion_InstanceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "The type of an accelator for a CDF instance.\nPossible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The type of an accelator for a CDF instance.\nPossible values are: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
