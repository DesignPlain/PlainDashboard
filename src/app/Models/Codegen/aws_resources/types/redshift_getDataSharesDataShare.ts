import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshift_getDataSharesDataShare {
  // ARN (Amazon Resource Name) of the data share.
  dataShareArn?: string;

  // Identifier of a datashare to show its managing entity.
  managedBy?: string;

  // ARN (Amazon Resource Name) of the producer.
  producerArn?: string;
}

export function redshift_getDataSharesDataShare_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "managedBy",
      "Identifier of a datashare to show its managing entity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "producerArn",
      "ARN (Amazon Resource Name) of the producer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataShareArn",
      "ARN (Amazon Resource Name) of the data share.",
      [],
      true,
      false,
    ),
  ];
}
