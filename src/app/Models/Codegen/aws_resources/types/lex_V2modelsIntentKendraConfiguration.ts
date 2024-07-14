import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentKendraConfiguration {
  // Query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html).
  queryFilterString?: string;

  // Whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.
  queryFilterStringEnabled?: boolean;

  // ARN of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.
  kendraIndex?: string;
}

export function lex_V2modelsIntentKendraConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "queryFilterStringEnabled",
      "Whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kendraIndex",
      "ARN of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryFilterString",
      "Query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html).",
      [],
      false,
      false,
    ),
  ];
}
