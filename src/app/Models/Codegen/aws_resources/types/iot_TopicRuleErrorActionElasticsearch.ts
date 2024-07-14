import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_TopicRuleErrorActionElasticsearch {
  // The endpoint of your Elasticsearch domain.
  endpoint?: string;

  // The unique identifier for the document you are storing.
  id?: string;

  // The Elasticsearch index where you want to store your data.
  index?: string;

  // The IAM role ARN that has access to Elasticsearch.
  roleArn?: string;

  // The type of document you are storing.
  type?: string;
}

export function iot_TopicRuleErrorActionElasticsearch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "index",
      "The Elasticsearch index where you want to store your data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The IAM role ARN that has access to Elasticsearch.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of document you are storing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "The endpoint of your Elasticsearch domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The unique identifier for the document you are storing.",
      [],
      true,
      false,
    ),
  ];
}
