import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securitylake_CustomLogSourceAttribute {
  // The ARN of the AWS Glue crawler.
  crawlerArn?: string;

  // The ARN of the AWS Glue database where results are written.
  databaseArn?: string;

  // The ARN of the AWS Glue table.
  tableArn?: string;
}

export function securitylake_CustomLogSourceAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "crawlerArn",
      "The ARN of the AWS Glue crawler.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseArn",
      "The ARN of the AWS Glue database where results are written.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableArn",
      "The ARN of the AWS Glue table.",
      [],
      true,
      false,
    ),
  ];
}
