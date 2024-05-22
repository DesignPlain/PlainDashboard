import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DashboardParametersIntegerParameter,
  quicksight_DashboardParametersIntegerParameter_GetTypes,
} from "./quicksight_DashboardParametersIntegerParameter";
import {
  quicksight_DashboardParametersStringParameter,
  quicksight_DashboardParametersStringParameter_GetTypes,
} from "./quicksight_DashboardParametersStringParameter";
import {
  quicksight_DashboardParametersDateTimeParameter,
  quicksight_DashboardParametersDateTimeParameter_GetTypes,
} from "./quicksight_DashboardParametersDateTimeParameter";
import {
  quicksight_DashboardParametersDecimalParameter,
  quicksight_DashboardParametersDecimalParameter_GetTypes,
} from "./quicksight_DashboardParametersDecimalParameter";

export interface quicksight_DashboardParameters {
  // A list of parameters that have a data type of integer. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IntegerParameter.html).
  integerParameters?: Array<quicksight_DashboardParametersIntegerParameter>;

  // A list of parameters that have a data type of string. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StringParameter.html).
  stringParameters?: Array<quicksight_DashboardParametersStringParameter>;

  // A list of parameters that have a data type of date-time. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DateTimeParameter.html).
  dateTimeParameters?: Array<quicksight_DashboardParametersDateTimeParameter>;

  // A list of parameters that have a data type of decimal. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DecimalParameter.html).
  decimalParameters?: Array<quicksight_DashboardParametersDecimalParameter>;
}

export function quicksight_DashboardParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "integerParameters",
      "A list of parameters that have a data type of integer. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IntegerParameter.html).",
      quicksight_DashboardParametersIntegerParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stringParameters",
      "A list of parameters that have a data type of string. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StringParameter.html).",
      quicksight_DashboardParametersStringParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dateTimeParameters",
      "A list of parameters that have a data type of date-time. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DateTimeParameter.html).",
      quicksight_DashboardParametersDateTimeParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "decimalParameters",
      "A list of parameters that have a data type of decimal. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DecimalParameter.html).",
      quicksight_DashboardParametersDecimalParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
