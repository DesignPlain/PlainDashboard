import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datafusion_InstanceAccelerator {
  /*
The type of an accelator for a CDF instance.
Possible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.
*/
  AcceleratorType?: string;

  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  State?: string;
}

export function Datafusion_InstanceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AcceleratorType",
      "The type of an accelator for a CDF instance.\nPossible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "The type of an accelator for a CDF instance.\nPossible values are: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
