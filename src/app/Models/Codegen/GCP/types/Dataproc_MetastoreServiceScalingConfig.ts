import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_MetastoreServiceScalingConfig {
  /*
Metastore instance sizes.
Possible values are: `EXTRA_SMALL`, `SMALL`, `MEDIUM`, `LARGE`, `EXTRA_LARGE`.
*/
  InstanceSize?: string;

  // Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
  ScalingFactor?: number;
}

export function Dataproc_MetastoreServiceScalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceSize",
      "Metastore instance sizes.\nPossible values are: `EXTRA_SMALL`, `SMALL`, `MEDIUM`, `LARGE`, `EXTRA_LARGE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ScalingFactor",
      "Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.",
      [],
      false,
      false,
    ),
  ];
}
