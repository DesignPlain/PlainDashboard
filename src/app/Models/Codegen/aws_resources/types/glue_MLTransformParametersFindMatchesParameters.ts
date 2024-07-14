import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_MLTransformParametersFindMatchesParameters {
  // The value that is selected when tuning your transform for a balance between accuracy and cost.
  accuracyCostTradeOff?: number;

  // The value to switch on or off to force the output to match the provided labels from users.
  enforceProvidedLabels?: boolean;

  // The value selected when tuning your transform for a balance between precision and recall.
  precisionRecallTradeOff?: number;

  // The name of a column that uniquely identifies rows in the source table.
  primaryKeyColumnName?: string;
}

export function glue_MLTransformParametersFindMatchesParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "primaryKeyColumnName",
      "The name of a column that uniquely identifies rows in the source table.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "accuracyCostTradeOff",
      "The value that is selected when tuning your transform for a balance between accuracy and cost.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforceProvidedLabels",
      "The value to switch on or off to force the output to match the provided labels from users.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "precisionRecallTradeOff",
      "The value selected when tuning your transform for a balance between precision and recall.",
      [],
      false,
      false,
    ),
  ];
}
