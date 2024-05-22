import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_AnalysisParametersDateTimeParameter,
  quicksight_AnalysisParametersDateTimeParameter_GetTypes,
} from "./quicksight_AnalysisParametersDateTimeParameter";
import {
  quicksight_AnalysisParametersDecimalParameter,
  quicksight_AnalysisParametersDecimalParameter_GetTypes,
} from "./quicksight_AnalysisParametersDecimalParameter";
import {
  quicksight_AnalysisParametersIntegerParameter,
  quicksight_AnalysisParametersIntegerParameter_GetTypes,
} from "./quicksight_AnalysisParametersIntegerParameter";
import {
  quicksight_AnalysisParametersStringParameter,
  quicksight_AnalysisParametersStringParameter_GetTypes,
} from "./quicksight_AnalysisParametersStringParameter";

export interface quicksight_AnalysisParameters {
  // A list of parameters that have a data type of date-time. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DateTimeParameter.html).
  dateTimeParameters?: Array<quicksight_AnalysisParametersDateTimeParameter>;

  // A list of parameters that have a data type of decimal. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DecimalParameter.html).
  decimalParameters?: Array<quicksight_AnalysisParametersDecimalParameter>;

  // A list of parameters that have a data type of integer. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IntegerParameter.html).
  integerParameters?: Array<quicksight_AnalysisParametersIntegerParameter>;

  // A list of parameters that have a data type of string. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StringParameter.html).
  stringParameters?: Array<quicksight_AnalysisParametersStringParameter>;
}

export function quicksight_AnalysisParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "decimalParameters",
      "A list of parameters that have a data type of decimal. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DecimalParameter.html).",
      quicksight_AnalysisParametersDecimalParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "integerParameters",
      "A list of parameters that have a data type of integer. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IntegerParameter.html).",
      quicksight_AnalysisParametersIntegerParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stringParameters",
      "A list of parameters that have a data type of string. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StringParameter.html).",
      quicksight_AnalysisParametersStringParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dateTimeParameters",
      "A list of parameters that have a data type of date-time. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DateTimeParameter.html).",
      quicksight_AnalysisParametersDateTimeParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
