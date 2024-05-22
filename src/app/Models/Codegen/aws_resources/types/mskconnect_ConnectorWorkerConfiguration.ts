import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorWorkerConfiguration {
  // The revision of the worker configuration.
  revision?: number;

  // The Amazon Resource Name (ARN) of the worker configuration.
  arn?: string;
}

export function mskconnect_ConnectorWorkerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the worker configuration.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "revision",
      "The revision of the worker configuration.",
      [],
      true,
      true,
    ),
  ];
}
