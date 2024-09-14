import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redshift_getProducerDataSharesDataShare {
  // ARN (Amazon Resource Name) of the data share.
  dataShareArn?: string;

  // Identifier of a datashare to show its managing entity.
  managedBy?: string;

  /*
Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.

The following arguments are optional:
*/
  producerArn?: string;
}

export function redshift_getProducerDataSharesDataShare_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataShareArn",
      "ARN (Amazon Resource Name) of the data share.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedBy",
      "Identifier of a datashare to show its managing entity.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "producerArn",
      "Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
  ];
}
