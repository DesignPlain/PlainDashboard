import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_DocumentAttachmentsSource {
  // The key describing the location of an attachment to a document. Valid key types include: `SourceUrl` and `S3FileUrl`
  key?: string;

  // The name of the document attachment file
  name?: string;

  // The value describing the location of an attachment to a document
  values?: Array<string>;
}

export function ssm_DocumentAttachmentsSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The value describing the location of an attachment to a document",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key describing the location of an attachment to a document. Valid key types include: `SourceUrl` and `S3FileUrl`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the document attachment file",
      [],
      false,
      false,
    ),
  ];
}
