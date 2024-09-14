import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mskconnect_ConnectorWorkerConfiguration {
  // The Amazon Resource Name (ARN) of the worker configuration.
  arn?: string;

  // The revision of the worker configuration.
  revision?: number;
}

export function mskconnect_ConnectorWorkerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the worker configuration.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "revision",
      "The revision of the worker configuration.",
      () => [],
      true,
      true,
    ),
  ];
}
